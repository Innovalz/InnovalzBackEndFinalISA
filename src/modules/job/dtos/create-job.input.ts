import { InputType } from "@nestjs/graphql";
import { IsString, IsNotEmpty } from "class-validator";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let CreateJobInput = class CreateJobInput {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      title: { nullable: false, type: () => String },
      shortDesc: { nullable: false, type: () => String },
      fullDesc: { nullable: false, type: () => String },
    };
  }
};
__decorate(
  [IsString(), IsNotEmpty(), __metadata("design:type", String)],
  CreateJobInput.prototype,
  "title",
  void 0
);
__decorate(
  [IsString(), IsNotEmpty(), __metadata("design:type", String)],
  CreateJobInput.prototype,
  "shortDesc",
  void 0
);
__decorate(
  [IsString(), IsNotEmpty(), __metadata("design:type", String)],
  CreateJobInput.prototype,
  "fullDesc",
  void 0
);
CreateJobInput = __decorate([InputType()], CreateJobInput);
const _CreateJobInput = CreateJobInput;
export { _CreateJobInput as CreateJobInput };
