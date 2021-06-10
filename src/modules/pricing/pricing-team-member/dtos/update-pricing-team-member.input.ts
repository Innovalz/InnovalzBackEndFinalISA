import { CreatePricingTeamMemberInput } from "./create-pricing-team-member.input";
import { PartialType, Field, Int, InputType } from "@nestjs/graphql";
import { IsNumber, IsPositive } from "class-validator";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let UpdatePricingTeamMemberInput = class UpdatePricingTeamMemberInput extends PartialType(
  CreatePricingTeamMemberInput
) {
  static _GRAPHQL_METADATA_FACTORY() {
    return { id: { nullable: false, type: () => Number } };
  }
};
__decorate(
  [
    Field(() => Int),
    IsNumber(),
    IsPositive(),
    __metadata("design:type", Number),
  ],
  UpdatePricingTeamMemberInput.prototype,
  "id",
  void 0
);
UpdatePricingTeamMemberInput = __decorate(
  [InputType()],
  UpdatePricingTeamMemberInput
);
const _UpdatePricingTeamMemberInput = UpdatePricingTeamMemberInput;
export { _UpdatePricingTeamMemberInput as UpdatePricingTeamMemberInput };
