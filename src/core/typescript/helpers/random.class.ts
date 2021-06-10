import { v4 } from "uuid";
import { CustomAssertions } from "./custom-assertions.class";
import { ExtractUtil } from "../util/extract.util";
export class Random {
  static generateId() {
    return v4();
  }
  static generateFileName(originalFileName: any, mimetype: any) {
    CustomAssertions.argsNullOrEmptyAssertion({ originalFileName });
    const fileName = Random.generateId();
    const extensionType = ExtractUtil.extensionType(originalFileName, mimetype);
    CustomAssertions.valuesNullOrEmptyAssertion([
      { value: fileName, message: "Empty or null file name" },
      { value: extensionType, message: "Empty or null extension type" },
    ]);
    return fileName + extensionType;
  }
}
