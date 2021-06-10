import { PartialType, InputType } from "@nestjs/graphql";
import { __decorate } from "../../../helpers/decorate";
import { UpdateRequestOfferInput } from "./update-request-offer.input";

let FilterRequestOfferArg = class FilterRequestOfferArg extends PartialType(
  UpdateRequestOfferInput
) {
  static _GRAPHQL_METADATA_FACTORY() {
    return {};
  }
};
FilterRequestOfferArg = __decorate([InputType()], FilterRequestOfferArg);
const _FilterRequestOfferArg = FilterRequestOfferArg;
export { _FilterRequestOfferArg as FilterRequestOfferArg };
