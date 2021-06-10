import { Strategy, ExtractJwt } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { configs } from "../../../core/typescript/util/configs.util";
import { UserService } from "../../../modules/user/user.service";
import { SupportedLanguages } from "../../../core/typescript/@types/supported-languages";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let JwtStrategy = class JwtStrategy extends PassportStrategy(Strategy) {
  private _userService: any;
  constructor(_userService: any) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configs.options.jwt.secret,
    });
    this._userService = _userService;
  }
  async validate(_payload: { _id: any }) {
    const exitsUser = await this._userService.findOne(
      {
        _id: _payload._id,
      },
      null,
      { user: {}, language: (SupportedLanguages as any).ar }
    );
    if (!exitsUser) {
      throw new Error("User not exists");
    }
    return exitsUser;
  }
};
JwtStrategy = __decorate(
  [Injectable(), __metadata("design:paramtypes", [UserService])],
  JwtStrategy
);
const _JwtStrategy = JwtStrategy;
export { _JwtStrategy as JwtStrategy };
