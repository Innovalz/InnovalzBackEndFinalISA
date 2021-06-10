import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { PartialLocalizeSchema } from "../../../core/database/base/schema/localize.schema";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let TProductSchema = class TProductSchema {};
__decorate(
  [Prop(), __metadata("design:type", Number)],
  TProductSchema.prototype,
  "id",
  void 0
);
__decorate(
  [
    Prop({ i18n: true, type: () => PartialLocalizeSchema }),
    __metadata("design:type", String),
  ],
  TProductSchema.prototype,
  "title",
  void 0
);
__decorate(
  [
    Prop({ i18n: true, type: () => PartialLocalizeSchema }),
    __metadata("design:type", String),
  ],
  TProductSchema.prototype,
  "subTitle",
  void 0
);
__decorate(
  [
    Prop({ i18n: true, type: () => PartialLocalizeSchema }),
    __metadata("design:type", String),
  ],
  TProductSchema.prototype,
  "shortDesc",
  void 0
);
__decorate(
  [
    Prop({ i18n: true, type: () => [Number] }),
    __metadata("design:type", Array),
  ],
  TProductSchema.prototype,
  "smallParagraphs",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", Boolean)],
  TProductSchema.prototype,
  "isActive",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", Boolean)],
  TProductSchema.prototype,
  "onHome",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TProductSchema.prototype,
  "logo",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TProductSchema.prototype,
  "icon",
  void 0
);
TProductSchema = __decorate([Schema()], TProductSchema);
const _TProductSchema = TProductSchema;
export { _TProductSchema as TProductSchema };
export const ProductSchema = SchemaFactory.createForClass(TProductSchema);
