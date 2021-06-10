import { Module } from "@nestjs/common";
import { UserSchema } from "./repo/user.schema";
import { ModelsNames } from "../../core/database/models-names";
import { injectMongoose } from "../../core/database/imports/inject-mongoose";
import { UserService } from "./user.service";
import { UserResolver } from "./user.resolver";
import { UserRepo } from "./repo/user.repo";
import { __decorate } from "../../helpers/decorate";

let UserModule = class UserModule {};
UserModule = __decorate(
  [
    Module({
      imports: [
        injectMongoose(ModelsNames.user, UserSchema, {
          disable: { i18n: true },
        }),
      ],
      providers: [UserService, UserRepo, UserResolver],
      exports: [UserService, UserRepo],
    }),
  ],
  UserModule
);
const _UserModule = UserModule;
export { _UserModule as UserModule };
