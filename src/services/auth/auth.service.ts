import { Injectable } from "@nestjs/common";
import { UserRepo } from "../../modules/user/repo/user.repo";
import { EncryptUtil } from "../../core/typescript/util/encrypt.class";
import { JwtService } from "@nestjs/jwt";
import { MailService } from "../mail/mail.service";
import { EmailTemplates } from "../mail/templates/mail-templates.class";
import { configs } from "../../core/typescript/util/configs.util";
import { __decorate } from "../../helpers/decorate";
import { __metadata } from "../../helpers/metadata";

let AuthService = class AuthService {
  private _userRepo: any;
  private _jwtService: any;
  private _emailService: any;

  constructor(_userRepo: any, _jwtService: any, _emailService: any) {
    this._userRepo = _userRepo;
    this._jwtService = _jwtService;
    this._emailService = _emailService;
  }
  _constructPayload(user: { _id: any; id: any; roles: any }) {
    return {
      _id: user._id,
      id: user.id,
      roles: user.roles,
    };
  }
  _signToken(payload: { _id: any; id: any; roles: any }) {
    return this._jwtService.sign(payload, {
      expiresIn: configs.options.jwt.signOptions.expiresIn,
    });
  }
  _constructAuthRes(token: any, user: any) {
    return {
      token,
      user,
    };
  }
  async registerUser(
    registerDto: {
      confirmPassword: any;
      email: any;
      phone: any;
      password: any;
    },
    options: any
  ) {
    console.log(registerDto)
    delete registerDto.confirmPassword;
    const userIfExists = await this._userRepo.checkExistsCaseInsensitive({
      email: registerDto.email,
      phone: registerDto.phone,
    });
    if (userIfExists) {
      throw new Error("Email or phone already exists");
    } else {
      registerDto.password = await EncryptUtil.hastPromise(
        registerDto.password
      );
      const createdUser = await this._userRepo.create(registerDto, options);
      const payload = this._constructPayload(createdUser);
      const token = this._signToken(payload);
      this._emailService.sendEmail({
        to: createdUser.email,
        subject: "Welcome to Innovalz",
        html: EmailTemplates.welcome({
          userName: createdUser.name || "Innovalz user",
        }),
      });
      return { token, user: createdUser };
    }
  }
  async loginUser(loginDto: { email: any; password: any }, _options: any) {
    console.log(
      `TCL ~ file: auth.service.ts ~ line 91 ~ AuthService ~ loginDto`,
      loginDto
    );
    const userIfExists = await this._userRepo.checkExistsCaseInsensitive({
      email: loginDto.email,
    });
    if (!userIfExists) {
      throw new Error("May email or password are invalid");
    } else {
      const isPasswordValid = await EncryptUtil.comparePromise(
        loginDto.password,
        userIfExists.password
      );
      if (isPasswordValid) {
        const payload = this._constructPayload(userIfExists);
        const token = this._signToken(payload);
        return { token, user: userIfExists };
      } else {
        throw new Error("May email or password are invalid");
      }
    }
  }
  async forgetPassword(forgetPasswordDto: { email: any }, _options: any) {
    const userIfExists = await this._userRepo.checkExistsCaseInsensitive({
      email: forgetPasswordDto.email,
    });
    if (userIfExists) {
      const baseResetUrl = "http://www.innovalz.com/reset-password/";
      const payload = this._constructPayload(userIfExists);
      const token = this._signToken(payload);
      this._emailService.sendEmail({
        to: userIfExists.email,
        subject: "Reset password",
        html: EmailTemplates.forgetPassword({
          redirectUrl: baseResetUrl + token,
        }),
      });
      return true;
    }
    return false;
  }
  async resetPassword(
    resetPasswordDto: { confirmNewPassword: any; newPassword: any },
    options: { user: any }
  ) {
    const { user } = options;
    const userIfExists = await this._userRepo.checkExistsCaseInsensitive({
      email: user.email,
    });
    if (!userIfExists) {
      throw new Error("Email is not exists");
    } else {
      delete resetPasswordDto.confirmNewPassword;
      const resetPasswordUser = await this._userRepo.findOneAndUpdate(
        { _id: userIfExists._id },
        {
          password: await EncryptUtil.hastPromise(resetPasswordDto.newPassword),
        },
        options
      );
      const payload = this._constructPayload(userIfExists);
      const token = this._signToken(payload);
      return { token, user: resetPasswordUser };
    }
  }
  async changePassword(
    changePasswordDto: {
      oldPassword: any;
      confirmNewPassword: any;
      newPassword: any;
    },
    options: { user: any }
  ) {
    const { user } = options;
    const userIfExists = await this._userRepo.checkExistsCaseInsensitive({
      email: user.email,
    });
    if (!userIfExists) {
      throw new Error("Email is not exists");
    } else {
      const oldPasswordValid = await EncryptUtil.comparePromise(
        changePasswordDto.oldPassword,
        userIfExists.password
      );
      if (!oldPasswordValid) {
        throw new Error("Invalid old password");
      } else {
        delete changePasswordDto.confirmNewPassword;
        const resetUserPassword = await this._userRepo.findOneAndUpdate(
          { _id: userIfExists._id },
          {
            password: await EncryptUtil.hastPromise(
              changePasswordDto.newPassword
            ),
          },
          options
        );
        const payload = this._constructPayload(userIfExists);
        const token = this._signToken(payload);
        return { token, user: resetUserPassword };
      }
    }
  }
};
AuthService = __decorate(
  [
    Injectable(),
    __metadata("design:paramtypes", [UserRepo, JwtService, MailService]),
  ],
  AuthService
);
const _AuthService = AuthService;
export { _AuthService as AuthService };
