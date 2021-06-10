import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let TJobSchema = class TJobSchema {};
__decorate(
  [Prop(), __metadata("design:type", Number)],
  TJobSchema.prototype,
  "id",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TJobSchema.prototype,
  "title",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TJobSchema.prototype,
  "shortDesc",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TJobSchema.prototype,
  "fullDesc",
  void 0
);
TJobSchema = __decorate([Schema()], TJobSchema);
const _TJobSchema = TJobSchema;
export { _TJobSchema as TJobSchema };
export const JobSchema = SchemaFactory.createForClass(TJobSchema);
