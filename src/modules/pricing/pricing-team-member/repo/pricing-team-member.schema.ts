import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let TPricingTeamMemberSchema = class TPricingTeamMemberSchema {};
__decorate(
  [Prop(), __metadata("design:type", Number)],
  TPricingTeamMemberSchema.prototype,
  "id",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TPricingTeamMemberSchema.prototype,
  "image",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TPricingTeamMemberSchema.prototype,
  "title",
  void 0
);
TPricingTeamMemberSchema = __decorate([Schema()], TPricingTeamMemberSchema);
const _TPricingTeamMemberSchema = TPricingTeamMemberSchema;
export { _TPricingTeamMemberSchema as TPricingTeamMemberSchema };
export const PricingTeamMemberSchema = SchemaFactory.createForClass(
  TPricingTeamMemberSchema
);
