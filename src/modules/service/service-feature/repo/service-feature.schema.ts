import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { PartialLocalizeSchema } from "../../../../core/database/base/schema/localize.schema";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let TServiceFeatureSchema = class TServiceFeatureSchema {};
__decorate(
  [Prop(), __metadata("design:type", Number)],
  TServiceFeatureSchema.prototype,
  "id",
  void 0
);
__decorate(
  [
    Prop({ i18n: true, type: () => PartialLocalizeSchema }),
    __metadata("design:type", String),
  ],
  TServiceFeatureSchema.prototype,
  "title",
  void 0
);
__decorate(
  [
    Prop({ i18n: true, type: () => PartialLocalizeSchema }),
    __metadata("design:type", String),
  ],
  TServiceFeatureSchema.prototype,
  "desc",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", Number)],
  TServiceFeatureSchema.prototype,
  "childService",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TServiceFeatureSchema.prototype,
  "image",
  void 0
);
TServiceFeatureSchema = __decorate([Schema()], TServiceFeatureSchema);
const _TServiceFeatureSchema = TServiceFeatureSchema;
export { _TServiceFeatureSchema as TServiceFeatureSchema };
export const ServiceFeatureSchema = SchemaFactory.createForClass(
  TServiceFeatureSchema
);
