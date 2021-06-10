import { Module, forwardRef } from "@nestjs/common";
import { PricingTeamMemberService } from "./pricing-team-member.service";
import { PricingTeamMemberResolver } from "./pricing-team-member.resolver";
import { PricingTeamMemberSchema } from "./repo/pricing-team-member.schema";
import { ModelsNames } from "../../../core/database/models-names";
import { injectMongoose } from "../../../core/database/imports/inject-mongoose";
import { PricingTeamMemberRepo } from "./repo/pricing-team-member.repo";
import { PricingServiceModule } from "../pricing-services/pricing-service.module";
import { __decorate } from "../../../helpers/decorate";

let PricingTeamMemberModule = class PricingTeamMemberModule {};
PricingTeamMemberModule = __decorate(
  [
    Module({
      imports: [
        injectMongoose(ModelsNames.pricingTeamMember, PricingTeamMemberSchema, {
          disable: { i18n: true },
        }),
        forwardRef(() => PricingServiceModule),
      ],
      providers: [
        PricingTeamMemberRepo,
        PricingTeamMemberService,
        PricingTeamMemberResolver,
      ],
      exports: [PricingTeamMemberService],
    }),
  ],
  PricingTeamMemberModule
);
const _PricingTeamMemberModule = PricingTeamMemberModule;
export { _PricingTeamMemberModule as PricingTeamMemberModule };
