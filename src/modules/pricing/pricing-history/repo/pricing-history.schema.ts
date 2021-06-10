import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";
import { TUserDataSchema } from "./user-data.schema";

let TPricingHistorySchema = class TPricingHistorySchema {};
__decorate(
  [Prop(), __metadata("design:type", Number)],
  TPricingHistorySchema.prototype,
  "id",
  void 0
);
__decorate(
  [
    Prop({ type: () => TUserDataSchema }),
    __metadata("design:type", TUserDataSchema),
  ],
  TPricingHistorySchema.prototype,
  "user",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", Array)],
  TPricingHistorySchema.prototype,
  "pricingServices",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", Number)],
  TPricingHistorySchema.prototype,
  "totalPrice",
  void 0
);
TPricingHistorySchema = __decorate(
  [Schema({ timestamps: true })],
  TPricingHistorySchema
);
const _TPricingHistorySchema = TPricingHistorySchema;
export { _TPricingHistorySchema as TPricingHistorySchema };
export const PricingHistorySchema = SchemaFactory.createForClass(
  TPricingHistorySchema
);
