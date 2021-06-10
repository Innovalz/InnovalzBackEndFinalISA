import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { JobModule } from "./job/job.module";
import { PartnerModule } from "./partner/partner.module";
import { ProductModule } from "./product/product.module";
import { ChildServiceModule } from "./service/child-service/child-service.module";
import { ParentServiceModule } from "./service/parent-service/parent-service.module";
import { ServiceFeatureModule } from "./service/service-feature/service-feature.module";
import { StandAloneModule } from "./stand-alone/stand-alone.module";
import { RequestOfferModule } from "./request-offer/request-offer.module";
import { SmallParagraphModule } from "./small-paragraph/small-paragraph.module";
import { JobFormModule } from "./job-form/job-form.module";
import { ContactUsModule } from "./contact-us/contact-us.module";
import { PricingStepModule } from "./pricing/pricing-step/pricing-step.module";
import { PricingCategoryModule } from "./pricing/pricing-category/pricing-category.module";
import { PricingServiceModule } from "./pricing/pricing-services/pricing-service.module";
import { PricingHistoryModule } from "./pricing/pricing-history/pricing-history.module";
import { PricingTeamMemberModule } from "./pricing/pricing-team-member/pricing-team-member.module";
import { __decorate } from "../helpers/decorate";

let ModulesModule = class ModulesModule {};
ModulesModule = __decorate(
  [
    Module({
      imports: [
        UserModule,
        StandAloneModule,
        ContactUsModule,
        ProductModule,
        ParentServiceModule,
        ChildServiceModule,
        ServiceFeatureModule,
        JobModule,
        JobFormModule,
        PartnerModule,
        RequestOfferModule,
        SmallParagraphModule,
        PricingStepModule,
        PricingCategoryModule,
        PricingServiceModule,
        PricingTeamMemberModule,
        PricingHistoryModule,
      ],
    }),
  ],
  ModulesModule
);
const _ModulesModule = ModulesModule;
export { _ModulesModule as ModulesModule };
