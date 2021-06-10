import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { PartialLocalizeSchema } from "../../../core/database/base/schema/localize.schema";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let TSmallParagraphSchema = class TSmallParagraphSchema {};
__decorate(
  [Prop(), __metadata("design:type", Number)],
  TSmallParagraphSchema.prototype,
  "id",
  void 0
);
__decorate(
  [
    Prop({ i18n: true, type: () => PartialLocalizeSchema }),
    __metadata("design:type", String),
  ],
  TSmallParagraphSchema.prototype,
  "headline",
  void 0
);
__decorate(
  [
    Prop({ i18n: true, type: () => [PartialLocalizeSchema] }),
    __metadata("design:type", Array),
  ],
  TSmallParagraphSchema.prototype,
  "fullDesc",
  void 0
);
TSmallParagraphSchema = __decorate([Schema()], TSmallParagraphSchema);
const _TSmallParagraphSchema = TSmallParagraphSchema;
export { _TSmallParagraphSchema as TSmallParagraphSchema };
export const SmallParagraphSchema = SchemaFactory.createForClass(
  TSmallParagraphSchema
);
