import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let TRequestOfferSchema = class TRequestOfferSchema {};
__decorate(
  [Prop(), __metadata("design:type", Number)],
  TRequestOfferSchema.prototype,
  "id",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TRequestOfferSchema.prototype,
  "name",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TRequestOfferSchema.prototype,
  "email",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TRequestOfferSchema.prototype,
  "phone",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", Number)],
  TRequestOfferSchema.prototype,
  "product",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TRequestOfferSchema.prototype,
  "otherProduct",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", Array)],
  TRequestOfferSchema.prototype,
  "features",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TRequestOfferSchema.prototype,
  "details",
  void 0
);
TRequestOfferSchema = __decorate([Schema()], TRequestOfferSchema);
const _TRequestOfferSchema = TRequestOfferSchema;
export { _TRequestOfferSchema as TRequestOfferSchema };
export const RequestOfferSchema = SchemaFactory.createForClass(
  TRequestOfferSchema
);
