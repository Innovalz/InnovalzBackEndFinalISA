import { Query, Args, Mutation, Resolver } from "@nestjs/graphql";
import { JobService } from "./job.service";
import { FindManyJobsEntity, JobEntity } from "./entities/job.entity";
import { CreateJobInput } from "./dtos/create-job.input";
import { UpdateJobInput } from "./dtos/update-job.input";
import { FilterJobArg } from "./dtos/filter-job.args";
import { OptionsArgs } from "../../core/graphql/base/dtos/options.args";
import { BaseArgs } from "../../core/graphql/base/dtos/base.args";
import { authRoles } from "../../services/auth/constants/auth.roles";
import { Auth } from "../../services/auth/decorators/auth.decorator";
import { CustomOptions } from "../../core/class-validator/decorators/custom-options.decorator";
import { __decorate } from "../../helpers/decorate";
import { __metadata } from "../../helpers/metadata";
import { __param } from "../../helpers/param";

let JobResolver = class JobResolver {
  private _jobService: any;
  constructor(_jobService: any) {
    this._jobService = _jobService;
  }
  async findManyJobs(query = {}, options: any, customOptions: any) {
    return this._jobService.findManyPaginated(
      query,
      null,
      Object.assign(Object.assign({}, options), customOptions)
    );
  }
  async findOneJob(query: any, customOptions: any) {
    return this._jobService.findOne(query, null, customOptions);
  }
  async createJob(data: any, customOptions: any) {
    return this._jobService.create(data, customOptions);
  }
  async updateJob(data: { id: any }, customOptions: any) {
    return this._jobService.findOneAndUpdate(
      { id: data.id },
      data,
      customOptions
    );
  }
  async removeJob(args: { id: any }, customOptions: any) {
    return this._jobService.findOneAndRemove({ id: args.id }, customOptions);
  }
};
__decorate(
  [
    Auth(authRoles.job.findAll),
    Query(() => FindManyJobsEntity),
    __param(0, Args("query", { nullable: true })),
    __param(1, Args("options", { nullable: true })),
    __param(2, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FilterJobArg, OptionsArgs, Object]),
    __metadata("design:returntype", Promise),
  ],
  JobResolver.prototype,
  "findManyJobs",
  null
);
__decorate(
  [
    Auth(authRoles.job.findOne),
    Query(() => JobEntity, { nullable: true }),
    __param(0, Args("query", { nullable: true })),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FilterJobArg, Object]),
    __metadata("design:returntype", Promise),
  ],
  JobResolver.prototype,
  "findOneJob",
  null
);
__decorate(
  [
    Auth(authRoles.job.create),
    Mutation(() => JobEntity),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateJobInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  JobResolver.prototype,
  "createJob",
  null
);
__decorate(
  [
    Auth(authRoles.job.update),
    Mutation(() => JobEntity, { nullable: true }),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateJobInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  JobResolver.prototype,
  "updateJob",
  null
);
__decorate(
  [
    Auth(authRoles.job.delete),
    Mutation(() => JobEntity, { nullable: true }),
    __param(0, Args()),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BaseArgs, Object]),
    __metadata("design:returntype", Promise),
  ],
  JobResolver.prototype,
  "removeJob",
  null
);
JobResolver = __decorate(
  [Resolver(() => JobEntity), __metadata("design:paramtypes", [JobService])],
  JobResolver
);
const _JobResolver = JobResolver;
export { _JobResolver as JobResolver };
