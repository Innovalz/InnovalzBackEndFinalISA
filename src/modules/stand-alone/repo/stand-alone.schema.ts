import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Schema as _Schema } from "mongoose";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";
import { StandAloneKeys } from "../types/stand-alone-key.enum";

let TStandAlone = class TStandAlone {};
__decorate(
  [
    Prop({ type: StandAloneKeys, enum: StandAloneKeys }),
    __metadata("design:type", String),
  ],
  TStandAlone.prototype,
  "key",
  void 0
);
__decorate(
  [
    Prop({ type: () => _Schema.Types.Mixed, i18n: true }),
    __metadata("design:type", Object),
  ],
  TStandAlone.prototype,
  "value",
  void 0
);
TStandAlone = __decorate([Schema()], TStandAlone);
const _TStandAlone = TStandAlone;
export { _TStandAlone as TStandAlone };
export const StandAloneSchema = SchemaFactory.createForClass(TStandAlone);
