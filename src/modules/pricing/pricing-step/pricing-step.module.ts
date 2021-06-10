import { Module, forwardRef } from "@nestjs/common";
import { PricingStepService } from "./pricing-step.service";
import { PricingStepResolver } from "./pricing-step.resolver";
import { PricingStepSchema } from "./repo/pricing-step.schema";
import { ModelsNames } from "../../../core/database/models-names";
import { injectMongoose } from "../../../core/database/imports/inject-mongoose";
import { PricingStepRepo } from "./repo/pricing-step.repo";
import { PricingCategoryModule } from "../pricing-category/pricing-category.module";
import { __decorate } from "../../../helpers/decorate";

let PricingStepModule = class PricingStepModule {};
PricingStepModule = __decorate(
  [
    Module({
      imports: [
        injectMongoose(ModelsNames.pricingStep, PricingStepSchema, {
          disable: { i18n: true },
        }),
        forwardRef(() => PricingCategoryModule),
      ],
      providers: [PricingStepRepo, PricingStepService, PricingStepResolver],
      exports: [PricingStepService],
    }),
  ],
  PricingStepModule
);
const _PricingStepModule = PricingStepModule;
export { _PricingStepModule as PricingStepModule };
