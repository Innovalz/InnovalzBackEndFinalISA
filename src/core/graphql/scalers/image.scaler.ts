let ImageScaler_1: ReturnTypeFuncValue;
import { ReturnTypeFuncValue, Scalar } from "@nestjs/graphql";
import { types } from "mime-types";
import { __decorate } from "../../../helpers/decorate";
import { BaseScaler } from "./base.scaler";

let ImageScaler = (ImageScaler_1 = class ImageScaler extends BaseScaler {
  description: string;
  static supportedFormats: string[];
  constructor() {
    super();
    this.description = "Image upload type.";
  }
});
ImageScaler.supportedFormats = [types.jpg, types.png, types.gif, types.svg];
ImageScaler = ImageScaler_1 = __decorate(
  [Scalar("Image", () => ImageScaler_1)],
  ImageScaler
);
const _ImageScaler = ImageScaler;
export { _ImageScaler as ImageScaler };
