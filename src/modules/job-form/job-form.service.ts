import { Injectable } from "@nestjs/common";
import { __decorate } from "../../helpers/decorate";
import { __metadata } from "../../helpers/metadata";
import { JobFormRepo } from "./repo/job-form.repo";

let JobFormService = class JobFormService {
  private _jobFormRepo: any;
  constructor(_jobFormRepo: any) {
    this._jobFormRepo = _jobFormRepo;
  }
  async findManyPaginated(filter: any, projection: any, options: any) {
    return await this._jobFormRepo.findManyPaginated(
      filter,
      projection,
      options
    );
  }
  async findAll(filter: any, projection: any, options: any) {
    return await this._jobFormRepo.findAll(filter, projection, options);
  }
  async findOne(filter: any, projection: any, options: any) {
    return await this._jobFormRepo.findOne(filter, projection, options);
  }
  async create(entity: any, options: any) {
    return await this._jobFormRepo.create(entity, options);
  }
  async findOneAndUpdate(filter: any, update: any, options: any) {
    return await this._jobFormRepo.findOneAndUpdate(filter, update, options);
  }
  async findOneAndRemove(filter: any, options: any) {
    return await this._jobFormRepo.findOneAndRemove(filter, options);
  }
};
JobFormService = __decorate(
  [Injectable(), __metadata("design:paramtypes", [JobFormRepo])],
  JobFormService
);
const _JobFormService = JobFormService;
export { _JobFormService as JobFormService };
