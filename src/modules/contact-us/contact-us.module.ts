import { Module } from "@nestjs/common";
import { ContactUsService } from "./contact-us.service";
import { ContactUsResolver } from "./contact-us.resolver";
import { ContactUsSchema } from "./repo/contact-us.schema";
import { ModelsNames } from "../../core/database/models-names";
import { injectMongoose } from "../../core/database/imports/inject-mongoose";
import { ContactUsRepo } from "./repo/contact-us.repo";
import { __decorate } from "../../helpers/decorate";

let ContactUsModule = class ContactUsModule {};
ContactUsModule = __decorate(
  [
    Module({
      imports: [
        injectMongoose(ModelsNames.contactUs, ContactUsSchema, {
          disable: { i18n: true },
        }),
      ],
      providers: [ContactUsRepo, ContactUsService, ContactUsResolver],
      exports: [ContactUsService],
    }),
  ],
  ContactUsModule
);
const _ContactUsModule = ContactUsModule;
export { _ContactUsModule as ContactUsModule };
