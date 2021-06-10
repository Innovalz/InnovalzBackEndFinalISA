import { Module } from "@nestjs/common";
import { PricingHistoryService } from "./pricing-history.service";
import { PricingHistoryResolver } from "./pricing-history.resolver";
import { PricingHistorySchema } from "./repo/pricing-history.schema";
import { ModelsNames } from "../../../core/database/models-names";
import { injectMongoose } from "../../../core/database/imports/inject-mongoose";
import { PricingHistoryRepo } from "./repo/pricing-history.repo";
import { UserModule } from "../../user/user.module";
import { PricingServiceModule } from "../pricing-services/pricing-service.module";
import { __decorate } from "../../../helpers/decorate";

let PricingHistoryModule = class PricingHistoryModule {};
PricingHistoryModule = __decorate(
  [
    Module({
      imports: [
        injectMongoose(ModelsNames.pricingHistory, PricingHistorySchema, {
          disable: { i18n: true },
        }),
        PricingServiceModule,
        UserModule,
      ],
      providers: [
        PricingHistoryRepo,
        PricingHistoryService,
        PricingHistoryResolver,
      ],
      exports: [PricingHistoryService],
    }),
  ],
  PricingHistoryModule
);
const _PricingHistoryModule = PricingHistoryModule;
export { _PricingHistoryModule as PricingHistoryModule };
