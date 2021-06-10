let FileScaler_1: ReturnTypeFuncValue;
import { ReturnTypeFuncValue, Scalar } from "@nestjs/graphql";
import { __decorate } from "../../../helpers/decorate";
import { BaseScaler } from "./base.scaler";

let FileScaler = (FileScaler_1 = class FileScaler extends BaseScaler {
  description: string;
  static supportedFormats: string[];
  constructor() {
    super();
    this.description = "File upload type.";
  }
});
FileScaler.supportedFormats = [];
FileScaler = FileScaler_1 = __decorate(
  [Scalar("File", () => FileScaler_1)],
  FileScaler
);
const _FileScaler = FileScaler;
export { _FileScaler as FileScaler };
