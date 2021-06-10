import { Field, InputType } from "@nestjs/graphql";
import { ImageScaler } from "../../../../core/graphql/scalers/image.scaler";
import { Exclude } from "class-transformer";
import { IsString, IsNotEmpty } from "class-validator";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let CreatePricingTeamMemberInput = class CreatePricingTeamMemberInput {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      image: { nullable: false, type: () => String },
      title: { nullable: false, type: () => String },
    };
  }
};
__decorate(
  [Field(() => ImageScaler), Exclude(), __metadata("design:type", String)],
  CreatePricingTeamMemberInput.prototype,
  "image",
  void 0
);
__decorate(
  [IsString(), IsNotEmpty(), __metadata("design:type", String)],
  CreatePricingTeamMemberInput.prototype,
  "title",
  void 0
);
CreatePricingTeamMemberInput = __decorate(
  [InputType()],
  CreatePricingTeamMemberInput
);
const _CreatePricingTeamMemberInput = CreatePricingTeamMemberInput;
export { _CreatePricingTeamMemberInput as CreatePricingTeamMemberInput };
