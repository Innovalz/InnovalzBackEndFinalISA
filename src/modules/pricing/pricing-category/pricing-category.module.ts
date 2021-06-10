import { Module, forwardRef } from "@nestjs/common";
import { PricingCategoryService } from "./pricing-category.service";
import { PricingCategoryResolver } from "./pricing-category.resolver";
import { PricingCategorySchema } from "./repo/pricing-category.schema";
import { ModelsNames } from "../../../core/database/models-names";
import { injectMongoose } from "../../../core/database/imports/inject-mongoose";
import { PricingCategoryRepo } from "./repo/pricing-category.repo";
import { PricingStepModule } from "../pricing-step/pricing-step.module";
import { PricingServiceModule } from "../pricing-services/pricing-service.module";
import { __decorate } from "../../../helpers/decorate";

let PricingCategoryModule = class PricingCategoryModule {};
PricingCategoryModule = __decorate(
  [
    Module({
      imports: [
        injectMongoose(ModelsNames.pricingCategory, PricingCategorySchema, {
          disable: { i18n: true },
        }),
        forwardRef(() => PricingStepModule),
        forwardRef(() => PricingServiceModule),
      ],
      providers: [
        PricingCategoryRepo,
        PricingCategoryService,
        PricingCategoryResolver,
      ],
      exports: [PricingCategoryService],
    }),
  ],
  PricingCategoryModule
);
const _PricingCategoryModule = PricingCategoryModule;
export { _PricingCategoryModule as PricingCategoryModule };
