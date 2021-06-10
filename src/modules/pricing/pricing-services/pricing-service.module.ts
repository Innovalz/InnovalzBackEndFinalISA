import { Module, forwardRef } from "@nestjs/common";
import { PricingServiceService } from "./pricing-service.service";
import { PricingServiceResolver } from "./pricing-service.resolver";
import { PricingServiceSchema } from "./repo/pricing-service.schema";
import { ModelsNames } from "../../../core/database/models-names";
import { injectMongoose } from "../../../core/database/imports/inject-mongoose";
import { PricingServiceRepo } from "./repo/pricing-service.repo";
import { PricingCategoryModule } from "../pricing-category/pricing-category.module";
import { PricingTeamMemberModule } from "../pricing-team-member/pricing-team-member.module";
import { __decorate } from "../../../helpers/decorate";

let PricingServiceModule = class PricingServiceModule {};
PricingServiceModule = __decorate(
  [
    Module({
      imports: [
        injectMongoose(ModelsNames.pricingService, PricingServiceSchema, {
          disable: { i18n: true },
        }),
        forwardRef(() => PricingCategoryModule),
        forwardRef(() => PricingTeamMemberModule),
      ],
      providers: [
        PricingServiceRepo,
        PricingServiceService,
        PricingServiceResolver,
      ],
      exports: [PricingServiceService],
    }),
  ],
  PricingServiceModule
);
const _PricingServiceModule = PricingServiceModule;
export { _PricingServiceModule as PricingServiceModule };
