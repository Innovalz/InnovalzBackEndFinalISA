import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { PartialLocalizeSchema } from "../../../core/database/base/schema/localize.schema";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let TPartnerSchema = class TPartnerSchema {};
__decorate(
  [Prop(), __metadata("design:type", Number)],
  TPartnerSchema.prototype,
  "id",
  void 0
);
__decorate(
  [
    Prop({ i18n: true, type: () => PartialLocalizeSchema }),
    __metadata("design:type", String),
  ],
  TPartnerSchema.prototype,
  "title",
  void 0
);
__decorate(
  [
    Prop({ i18n: true, type: () => PartialLocalizeSchema }),
    __metadata("design:type", String),
  ],
  TPartnerSchema.prototype,
  "desc",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", Boolean)],
  TPartnerSchema.prototype,
  "isActive",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", Boolean)],
  TPartnerSchema.prototype,
  "onHome",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TPartnerSchema.prototype,
  "image",
  void 0
);
TPartnerSchema = __decorate([Schema()], TPartnerSchema);
const _TPartnerSchema = TPartnerSchema;
export { _TPartnerSchema as TPartnerSchema };
export const PartnerSchema = SchemaFactory.createForClass(TPartnerSchema);
