import { Query, Args, Mutation, Resolver } from "@nestjs/graphql";
import { JobFormService } from "./job-form.service";
import {
  FindManyJobFormsEntity,
  JobFormEntity,
} from "./entities/job-form.entity";
import { CreateJobFormInput } from "./dtos/create-job-form.input";
import { FilterJobFormArg } from "./dtos/filter-job-form.args";
import { OptionsArgs } from "../../core/graphql/base/dtos/options.args";
import { UploadHandler } from "../../core/graphql/upload-handler.class";
import { authRoles } from "../../services/auth/constants/auth.roles";
import { Auth } from "../../services/auth/decorators/auth.decorator";
import { CustomOptions } from "../../core/class-validator/decorators/custom-options.decorator";
import { __decorate } from "../../helpers/decorate";
import { __metadata } from "../../helpers/metadata";
import { __param } from "../../helpers/param";

let JobFormResolver = class JobFormResolver {
  private _jobFormService: any;
  constructor(_jobFormService: any) {
    this._jobFormService = _jobFormService;
  }
  async findManyJobForms(query = {}, options: any, customOptions: any) {
    return this._jobFormService.findManyPaginated(
      query,
      null,
      Object.assign(Object.assign({}, options), customOptions)
    );
  }
  async findOneJobForm(query: any, customOptions: any) {
    return this._jobFormService.findOne(query, null, customOptions);
  }
  async createJobForm(data: any, customOptions: any) {
    await UploadHandler.forRequired(data, { cv: "resume" });
    return this._jobFormService.create(data, customOptions);
  }
};
__decorate(
  [
    Auth(authRoles.jobForm.findAll),
    Query(() => FindManyJobFormsEntity),
    __param(0, Args("query", { nullable: true })),
    __param(1, Args("options", { nullable: true })),
    __param(2, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FilterJobFormArg, OptionsArgs, Object]),
    __metadata("design:returntype", Promise),
  ],
  JobFormResolver.prototype,
  "findManyJobForms",
  null
);
__decorate(
  [
    Auth(authRoles.jobForm.findOne),
    Query(() => JobFormEntity, { nullable: true }),
    __param(0, Args("query", { nullable: true })),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FilterJobFormArg, Object]),
    __metadata("design:returntype", Promise),
  ],
  JobFormResolver.prototype,
  "findOneJobForm",
  null
);
__decorate(
  [
    Auth(authRoles.jobForm.create),
    Mutation(() => JobFormEntity),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateJobFormInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  JobFormResolver.prototype,
  "createJobForm",
  null
);
JobFormResolver = __decorate(
  [
    Resolver(() => JobFormEntity),
    __metadata("design:paramtypes", [JobFormService]),
  ],
  JobFormResolver
);
const _JobFormResolver = JobFormResolver;
export { _JobFormResolver as JobFormResolver };
