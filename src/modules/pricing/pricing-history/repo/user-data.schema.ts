import { Prop, Schema } from "@nestjs/mongoose";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let TUserDataSchema = class TUserDataSchema {};
__decorate(
  [Prop(), __metadata("design:type", String)],
  TUserDataSchema.prototype,
  "name",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TUserDataSchema.prototype,
  "email",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TUserDataSchema.prototype,
  "phone",
  void 0
);
TUserDataSchema = __decorate([Schema({ _id: false })], TUserDataSchema);
const _TUserDataSchema = TUserDataSchema;
export { _TUserDataSchema as TUserDataSchema };
