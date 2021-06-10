let ResumeScaler_1: ReturnTypeFuncValue;
import { ReturnTypeFuncValue, Scalar } from "@nestjs/graphql";
import { types } from "mime-types";
import { __decorate } from "../../../helpers/decorate";
import { BaseScaler } from "./base.scaler";

let ResumeScaler = (ResumeScaler_1 = class ResumeScaler extends BaseScaler {
  static supportedFormats: string[];
  description: string;
  constructor() {
    super();
    this.description = "Resume upload type.";
  }
});
ResumeScaler.supportedFormats = [types.pdf, types.doc, types.docx];
ResumeScaler = ResumeScaler_1 = __decorate(
  [Scalar("Resume", () => ResumeScaler_1)],
  ResumeScaler
);
const _ResumeScaler = ResumeScaler;
export { _ResumeScaler as ResumeScaler };
