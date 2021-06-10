import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";
import { TPricingFeatureSchema } from "./pricing-feature.schema";

let TPricingServiceSchema = class TPricingServiceSchema {};
__decorate(
  [Prop(), __metadata("design:type", Number)],
  TPricingServiceSchema.prototype,
  "id",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", Number)],
  TPricingServiceSchema.prototype,
  "category",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TPricingServiceSchema.prototype,
  "image",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TPricingServiceSchema.prototype,
  "title",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TPricingServiceSchema.prototype,
  "desc",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", Number)],
  TPricingServiceSchema.prototype,
  "setupRate",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", Number)],
  TPricingServiceSchema.prototype,
  "setupTime",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", Number)],
  TPricingServiceSchema.prototype,
  "devRate",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", Number)],
  TPricingServiceSchema.prototype,
  "devTime",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", Number)],
  TPricingServiceSchema.prototype,
  "monthlyHostRate",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TPricingServiceSchema.prototype,
  "monthlyHostDesc",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", Number)],
  TPricingServiceSchema.prototype,
  "price",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", Array)],
  TPricingServiceSchema.prototype,
  "team",
  void 0
);
__decorate(
  [
    Prop({ type: () => TPricingFeatureSchema }),
    __metadata("design:type", TPricingFeatureSchema),
  ],
  TPricingServiceSchema.prototype,
  "features",
  void 0
);
TPricingServiceSchema = __decorate([Schema()], TPricingServiceSchema);
const _TPricingServiceSchema = TPricingServiceSchema;
export { _TPricingServiceSchema as TPricingServiceSchema };
export const PricingServiceSchema = SchemaFactory.createForClass(
  TPricingServiceSchema
);
