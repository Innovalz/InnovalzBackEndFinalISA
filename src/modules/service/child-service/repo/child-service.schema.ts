import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { PartialLocalizeSchema } from "../../../../core/database/base/schema/localize.schema";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let TChildServiceSchema = class TChildServiceSchema {};
__decorate(
  [Prop(), __metadata("design:type", Number)],
  TChildServiceSchema.prototype,
  "id",
  void 0
);
__decorate(
  [
    Prop({ i18n: true, type: () => PartialLocalizeSchema }),
    __metadata("design:type", String),
  ],
  TChildServiceSchema.prototype,
  "title",
  void 0
);
__decorate(
  [
    Prop({ i18n: true, type: () => [PartialLocalizeSchema] }),
    __metadata("design:type", Array),
  ],
  TChildServiceSchema.prototype,
  "fullDesc",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", Boolean)],
  TChildServiceSchema.prototype,
  "isActive",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", Boolean)],
  TChildServiceSchema.prototype,
  "onHome",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TChildServiceSchema.prototype,
  "logo",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TChildServiceSchema.prototype,
  "icon",
  void 0
);
__decorate(
  [Prop({ type: Number }), __metadata("design:type", Number)],
  TChildServiceSchema.prototype,
  "parentService",
  void 0
);
TChildServiceSchema = __decorate([Schema()], TChildServiceSchema);
const _TChildServiceSchema = TChildServiceSchema;
export { _TChildServiceSchema as TChildServiceSchema };
export const ChildServiceSchema = SchemaFactory.createForClass(
  TChildServiceSchema
);
