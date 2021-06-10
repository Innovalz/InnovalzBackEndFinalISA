import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let TContactUsSchema = class TContactUsSchema {};
__decorate(
  [Prop(), __metadata("design:type", Number)],
  TContactUsSchema.prototype,
  "id",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TContactUsSchema.prototype,
  "name",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TContactUsSchema.prototype,
  "email",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TContactUsSchema.prototype,
  "phone",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TContactUsSchema.prototype,
  "message",
  void 0
);
TContactUsSchema = __decorate([Schema()], TContactUsSchema);
const _TContactUsSchema = TContactUsSchema;
export { _TContactUsSchema as TContactUsSchema };
export const ContactUsSchema = SchemaFactory.createForClass(TContactUsSchema);
