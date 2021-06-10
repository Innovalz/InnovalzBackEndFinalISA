import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let TJobFormSchema = class TJobFormSchema {};
__decorate(
  [Prop(), __metadata("design:type", Number)],
  TJobFormSchema.prototype,
  "id",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", Number)],
  TJobFormSchema.prototype,
  "job",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TJobFormSchema.prototype,
  "name",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TJobFormSchema.prototype,
  "phone",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TJobFormSchema.prototype,
  "email",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TJobFormSchema.prototype,
  "cv",
  void 0
);
TJobFormSchema = __decorate([Schema()], TJobFormSchema);
const _TJobFormSchema = TJobFormSchema;
export { _TJobFormSchema as TJobFormSchema };
export const JobFormSchema = SchemaFactory.createForClass(TJobFormSchema);
