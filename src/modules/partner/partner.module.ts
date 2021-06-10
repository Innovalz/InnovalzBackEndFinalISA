import { Module } from "@nestjs/common";
import { PartnerService } from "./partner.service";
import { PartnerResolver } from "./partner.resolver";
import { PartnerSchema } from "./repo/partner.schema";
import { ModelsNames } from "../../core/database/models-names";
import { injectMongoose } from "../../core/database/imports/inject-mongoose";
import { PartnerRepo } from "./repo/partner.repo";
import { __decorate } from "../../helpers/decorate";

let PartnerModule = class PartnerModule {};
PartnerModule = __decorate(
  [
    Module({
      imports: [injectMongoose(ModelsNames.partner, PartnerSchema)],
      providers: [PartnerRepo, PartnerService, PartnerResolver],
      exports: [PartnerService],
    }),
  ],
  PartnerModule
);
const _PartnerModule = PartnerModule;
export { _PartnerModule as PartnerModule };
