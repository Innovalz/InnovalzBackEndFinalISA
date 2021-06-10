import { OmitType, PartialType, InputType } from "@nestjs/graphql";
import { IsOptional, IsString } from "class-validator";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";
import { UpdateChildServiceInput } from "./update-child-service.input";

let FilterChildServiceArg = class FilterChildServiceArg extends OmitType(
  PartialType(UpdateChildServiceInput),
  ["fullDesc", "logo", "icon"] as any
) {
  static _GRAPHQL_METADATA_FACTORY() {
    return { fullDesc: { nullable: true, type: () => String } };
  }
};
__decorate(
  [IsOptional(), IsString(), __metadata("design:type", String)],
  FilterChildServiceArg.prototype,
  "fullDesc",
  void 0
);
FilterChildServiceArg = __decorate([InputType()], FilterChildServiceArg);
const _FilterChildServiceArg = FilterChildServiceArg;
export { _FilterChildServiceArg as FilterChildServiceArg };
