import { Module } from "@nestjs/common";
import { __decorate } from "../../helpers/decorate";
import { MailService } from "./mail.service";

let MailModule = class MailModule {};
MailModule = __decorate(
  [
    Module({
      providers: [MailService],
      exports: [MailService],
    }),
  ],
  MailModule
);
const _MailModule = MailModule;
export { _MailModule as MailModule };
