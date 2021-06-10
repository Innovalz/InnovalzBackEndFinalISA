let DocumentScaler_1: ReturnTypeFuncValue;
import { ReturnTypeFuncValue, Scalar } from "@nestjs/graphql";
import { types } from "mime-types";
import { __decorate } from "../../../helpers/decorate";
import { BaseScaler } from "./base.scaler";

let DocumentScaler = (DocumentScaler_1 = class DocumentScaler extends (
  BaseScaler
) {
  static supportedFormats: string[];
  description: string;
  constructor() {
    super();
    this.description = "Document upload type.";
  }
});
DocumentScaler.supportedFormats = [types.pdf, types.doc, types.docx];
DocumentScaler = DocumentScaler_1 = __decorate(
  [Scalar("Document", () => DocumentScaler_1)],
  DocumentScaler
);
const _DocumentScaler = DocumentScaler;
export { _DocumentScaler as DocumentScaler };
