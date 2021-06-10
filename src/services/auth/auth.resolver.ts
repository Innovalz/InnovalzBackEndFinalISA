import { Query, Mutation, Args, Resolver } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { ResetUserPasswordInput } from "./dtos/reset-user-password.input";
import { LoginUserInput } from "./dtos/login-user.input";
import { RegisterUserInput } from "./dtos/register-user.input";
import {
  UserEntity,
  UserWithTokenEntity,
} from "../../modules/user/entities/user.entity";
import { ForgetUserPasswordInput } from "./dtos/forget-user-password.input";
import { User } from "./decorators/user.decorator";
import { ChangeUserPasswordInput } from "./dtos/change-user-password.input";
import { Auth } from "./decorators/auth.decorator";
import { authRoles } from "./constants/auth.roles";
import { CustomOptions } from "../../core/class-validator/decorators/custom-options.decorator";
import { __param } from "../../helpers/param";
import { __metadata } from "../../helpers/metadata";
import { __decorate } from "../../helpers/decorate";

let AuthResolver = class AuthResolver {
  private _authService: any;
  constructor(_authService: any) {
    this._authService = _authService;
  }
  async me(user: any) {
    return user;
  }
  async userRegister(data: any, customOptions: any) {
    return await this._authService.registerUser(data, customOptions);
  }
  async userLogin(data: any, customOptions: any) {
    return await this._authService.loginUser(data, customOptions);
  }
  async userForgetPassword(data: any, customOptions: any) {
    return await this._authService.forgetPassword(data, customOptions);
  }
  async userResetPassword(data: any, user: any, customOptions: any) {
    return await this._authService.resetPassword(data, customOptions);
  }
  async userChangePassword(data: any, customOptions: any) {
    return await this._authService.changePassword(data, customOptions);
  }
};
__decorate(
  [
    Auth(authRoles.auth.me),
    Query(() => UserEntity),
    __param(0, User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserEntity]),
    __metadata("design:returntype", Promise),
  ],
  AuthResolver.prototype,
  "me",
  null
);
__decorate(
  [
    Auth(authRoles.auth.register),
    Mutation(() => UserWithTokenEntity),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegisterUserInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  AuthResolver.prototype,
  "userRegister",
  null
);
__decorate(
  [
    Auth(authRoles.auth.login),
    Mutation(() => UserWithTokenEntity),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoginUserInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  AuthResolver.prototype,
  "userLogin",
  null
);
__decorate(
  [
    Auth(authRoles.auth.forgetPassword),
    Mutation(() => Boolean),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ForgetUserPasswordInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  AuthResolver.prototype,
  "userForgetPassword",
  null
);
__decorate(
  [
    Auth(authRoles.auth.resetPassword),
    Mutation(() => UserWithTokenEntity),
    __param(0, Args("data")),
    __param(1, User()),
    __param(2, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ResetUserPasswordInput, Object, Object]),
    __metadata("design:returntype", Promise),
  ],
  AuthResolver.prototype,
  "userResetPassword",
  null
);
__decorate(
  [
    Auth(authRoles.auth.changePassword),
    Mutation(() => UserWithTokenEntity),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ChangeUserPasswordInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  AuthResolver.prototype,
  "userChangePassword",
  null
);
AuthResolver = __decorate(
  [Resolver(() => UserEntity), __metadata("design:paramtypes", [AuthService])],
  AuthResolver
);
const _AuthResolver = AuthResolver;
export { _AuthResolver as AuthResolver };
