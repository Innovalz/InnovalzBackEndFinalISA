import { InputType, PartialType } from "@nestjs/graphql";
import { IsString } from "class-validator";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let LocalizeInput = class LocalizeInput {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      ar: { nullable: false, type: () => String },
      en: { nullable: false, type: () => String },
    };
  }
};
__decorate(
  [IsString(), __metadata("design:type", String)],
  LocalizeInput.prototype,
  "ar",
  void 0
);
__decorate(
  [IsString(), __metadata("design:type", String)],
  LocalizeInput.prototype,
  "en",
  void 0
);
LocalizeInput = __decorate([InputType()], LocalizeInput);
const _LocalizeInput = LocalizeInput;
export { _LocalizeInput as LocalizeInput };

let PartialLocalizeInput = class PartialLocalizeInput extends PartialType(
  LocalizeInput
) {
  static _GRAPHQL_METADATA_FACTORY() {
    return {};
  }
};
PartialLocalizeInput = __decorate([InputType()], PartialLocalizeInput);
const _PartialLocalizeInput = PartialLocalizeInput;
export { _PartialLocalizeInput as PartialLocalizeInput };
