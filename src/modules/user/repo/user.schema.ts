import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";
import { Role } from "../../../services/auth/types/role.enum";

let TUserSchema = class TUserSchema {};
__decorate(
  [Prop(), __metadata("design:type", Number)],
  TUserSchema.prototype,
  "id",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TUserSchema.prototype,
  "email",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TUserSchema.prototype,
  "password",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TUserSchema.prototype,
  "name",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TUserSchema.prototype,
  "phone",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TUserSchema.prototype,
  "company",
  void 0
);
__decorate(
  [
    Prop({ type: [String], enum: Role, default: [Role.user] }),
    __metadata("design:type", Array),
  ],
  TUserSchema.prototype,
  "roles",
  void 0
);
TUserSchema = __decorate([Schema()], TUserSchema);
const _TUserSchema = TUserSchema;
export { _TUserSchema as TUserSchema };
export const UserSchema = SchemaFactory.createForClass(TUserSchema);
