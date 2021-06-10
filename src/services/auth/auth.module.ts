import { Module } from "@nestjs/common";
import { UserModule } from "../../modules/user/user.module";
import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { configs } from "../../core/typescript/util/configs.util";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { MailModule } from "../mail/mail.module";
import { RolesGuard } from "./guards/roles.guard";
import { GRAPH_JWT_KEY, GqlAuthGuard } from "./guards/gql-auth.guard";
import { __decorate } from "../../helpers/decorate";

let AuthModule = class AuthModule {};
AuthModule = __decorate(
  [
    Module({
      imports: [
        UserModule,
        MailModule,
        PassportModule.register({ defaultStrategy: GRAPH_JWT_KEY }),
        JwtModule.register({
          secret: configs.options.jwt.secret,
          signOptions: configs.options.jwt.signOptions,
        }),
      ],
      providers: [
        AuthResolver,
        AuthService,
        JwtStrategy,
        GqlAuthGuard,
        RolesGuard,
      ],
    }),
  ],
  AuthModule
);
const _AuthModule = AuthModule;
export { _AuthModule as AuthModule };
