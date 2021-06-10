import { createWriteStream } from "fs";
import { join } from "path";
import { configs } from "../typescript/util/configs.util";
import { Random } from "../typescript/helpers/random.class";
import { ImageScaler } from "./scalers/image.scaler";
import { ResumeScaler } from "./scalers/resume.scaler";
import { FileScaler } from "./scalers/file.scaler";
const allowedScalers = {
  image: ImageScaler,
  file: FileScaler,
  resume: ResumeScaler,
};
class UploadHandler {
  static async parseFile(value, allowedMimeTypes) {
    return await new Promise(async (resolve, reject) => {
      const file = await value;
      if (file) {
        const newFileName = Random.generateFileName(
          file.filename,
          file.mimetype
        );
        if (
          allowedMimeTypes.length &&
          !allowedMimeTypes.includes(file.mimetype)
        ) {
          reject(`${file.mimetype} is invalid mime type`);
        }
        file
          .createReadStream()
          .pipe(createWriteStream(join(configs.paths.uploads, newFileName)))
          .on("finish", () => resolve(newFileName))
          .on("error", () => reject(newFileName));
      } else {
        reject("Upload error");
      }
    });
  }
  static async forRequired(data, fieldsObj) {
    try {
      for (const field in fieldsObj) {
        if (Object.prototype.hasOwnProperty.call(fieldsObj, field)) {
          const scalerName = fieldsObj[field];
          data[field] = await this.parseFile(
            data[field],
            allowedScalers[scalerName].supportedFormats
          );
        }
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  static async forOptional(data, fieldsObj) {
    try {
      for (const field in fieldsObj) {
        if (
          Object.prototype.hasOwnProperty.call(fieldsObj, field) &&
          data[field]
        ) {
          const scalerName = fieldsObj[field];
          data[field] = await this.parseFile(
            data[field],
            allowedScalers[scalerName].supportedFormats
          );
        }
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
const _UploadHandler = UploadHandler;
export { _UploadHandler as UploadHandler };
