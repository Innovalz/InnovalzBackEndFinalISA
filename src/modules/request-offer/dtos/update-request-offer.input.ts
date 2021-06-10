import { CreateRequestOfferInput } from "./create-request-offer.input";
import { PartialType, Field, Int, InputType } from "@nestjs/graphql";
import { IsNumber, IsPositive } from "class-validator";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let UpdateRequestOfferInput = class UpdateRequestOfferInput extends PartialType(
  CreateRequestOfferInput
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
  UpdateRequestOfferInput.prototype,
  "id",
  void 0
);
UpdateRequestOfferInput = __decorate([InputType()], UpdateRequestOfferInput);
const _UpdateRequestOfferInput = UpdateRequestOfferInput;
export { _UpdateRequestOfferInput as UpdateRequestOfferInput };
