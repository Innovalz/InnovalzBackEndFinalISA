import { Field, Int, InputType } from "@nestjs/graphql";
import { ResumeScaler } from "../../../core/graphql/scalers/resume.scaler";
import { Transform } from "class-transformer";
import {
  IsNumber,
  IsPositive,
  IsString,
  IsNotEmpty,
  IsMobilePhone,
  IsEmail,
} from "class-validator";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let CreateJobFormInput = class CreateJobFormInput {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      job: { nullable: false, type: () => Number },
      name: { nullable: false, type: () => String },
      phone: { nullable: false, type: () => String },
      email: { nullable: false, type: () => String },
      cv: { nullable: false, type: () => Object },
    };
  }
};
__decorate(
  [
    Field(() => Int),
    IsNumber(),
    IsPositive(),
    __metadata("design:type", Number),
  ],
  CreateJobFormInput.prototype,
  "job",
  void 0
);
__decorate(
  [IsString(), IsNotEmpty(), __metadata("design:type", String)],
  CreateJobFormInput.prototype,
  "name",
  void 0
);
__decorate(
  [IsString(), IsMobilePhone(), __metadata("design:type", String)],
  CreateJobFormInput.prototype,
  "phone",
  void 0
);
__decorate(
  [IsString(), IsEmail(), __metadata("design:type", String)],
  CreateJobFormInput.prototype,
  "email",
  void 0
);
__decorate(
  [
    Field(() => ResumeScaler),
    Transform(({ value }) => {
      console.log({ value });
    }),
    __metadata("design:type", Object),
  ],
  CreateJobFormInput.prototype,
  "cv",
  void 0
);
CreateJobFormInput = __decorate([InputType()], CreateJobFormInput);
const _CreateJobFormInput = CreateJobFormInput;
export { _CreateJobFormInput as CreateJobFormInput };
class CFileUpload {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      filename: { nullable: false, type: () => String },
      mimetype: { nullable: false, type: () => String },
      encoding: { nullable: false, type: () => String },
      createReadStream: { nullable: false, type: () => Object },
    };
  }
}
const _CFileUpload = CFileUpload;
export { _CFileUpload as CFileUpload };
