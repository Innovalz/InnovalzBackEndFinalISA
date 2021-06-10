import { Prop, Schema } from "@nestjs/mongoose";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let LocalizeSchema = class LocalizeSchema {};
__decorate(
  [Prop(), __metadata("design:type", String)],
  LocalizeSchema.prototype,
  "ar",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  LocalizeSchema.prototype,
  "en",
  void 0
);
LocalizeSchema = __decorate([Schema()], LocalizeSchema);
const _LocalizeSchema = LocalizeSchema;
export { _LocalizeSchema as LocalizeSchema };

let PartialLocalizeSchema = class PartialLocalizeSchema {};
__decorate(
  [Prop(), __metadata("design:type", String)],
  PartialLocalizeSchema.prototype,
  "ar",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  PartialLocalizeSchema.prototype,
  "en",
  void 0
);
PartialLocalizeSchema = __decorate([Schema()], PartialLocalizeSchema);
const _PartialLocalizeSchema = PartialLocalizeSchema;
export { _PartialLocalizeSchema as PartialLocalizeSchema };
