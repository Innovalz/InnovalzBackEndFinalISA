import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { PartialLocalizeSchema } from "../../../../core/database/base/schema/localize.schema";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let TParentServiceSchema = class TParentServiceSchema {};
__decorate(
  [Prop(), __metadata("design:type", Number)],
  TParentServiceSchema.prototype,
  "id",
  void 0
);
__decorate(
  [
    Prop({ i18n: true, type: () => PartialLocalizeSchema }),
    __metadata("design:type", String),
  ],
  TParentServiceSchema.prototype,
  "title",
  void 0
);
__decorate(
  [
    Prop({ i18n: true, type: () => PartialLocalizeSchema }),
    __metadata("design:type", String),
  ],
  TParentServiceSchema.prototype,
  "desc",
  void 0
);
__decorate(
  [Prop(), __metadata("design:type", String)],
  TParentServiceSchema.prototype,
  "icon",
  void 0
);
TParentServiceSchema = __decorate([Schema()], TParentServiceSchema);
const _TParentServiceSchema = TParentServiceSchema;
export { _TParentServiceSchema as TParentServiceSchema };
export const ParentServiceSchema = SchemaFactory.createForClass(
  TParentServiceSchema
);
