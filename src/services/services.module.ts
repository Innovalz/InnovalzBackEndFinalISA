import { Module } from "@nestjs/common";
import { __decorate } from "../helpers/decorate";
import { AuthModule } from "./auth/auth.module";
import { MailModule } from "./mail/mail.module";

let ServicesModule = class ServicesModule {};
ServicesModule = __decorate(
  [
    Module({
      imports: [AuthModule, MailModule],
    }),
  ],
  ServicesModule
);
const _ServicesModule = ServicesModule;
export { _ServicesModule as ServicesModule };
