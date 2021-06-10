import { OmitType, PartialType, InputType } from "@nestjs/graphql";
import { __decorate } from "../../../../helpers/decorate";
import { UpdatePricingTeamMemberInput } from "./update-pricing-team-member.input";

let FilterPricingTeamMemberArg = class FilterPricingTeamMemberArg extends OmitType(
  PartialType(UpdatePricingTeamMemberInput),
  ["image"] as any
) {
  static _GRAPHQL_METADATA_FACTORY() {
    return {};
  }
};
FilterPricingTeamMemberArg = __decorate(
  [InputType()],
  FilterPricingTeamMemberArg
);
const _FilterPricingTeamMemberArg = FilterPricingTeamMemberArg;
export { _FilterPricingTeamMemberArg as FilterPricingTeamMemberArg };
