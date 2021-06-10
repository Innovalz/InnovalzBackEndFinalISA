import { Injectable } from "@nestjs/common";
import { __decorate } from "../../helpers/decorate";
import { __metadata } from "../../helpers/metadata";
import { JobRepo } from "./repo/job.repo";

let JobService = class JobService {
  private _jobRepo: any;
  constructor(_jobRepo: any) {
    this._jobRepo = _jobRepo;
  }
  async findManyPaginated(filter: any, projection: any, options: any) {
    return await this._jobRepo.findManyPaginated(filter, projection, options);
  }
  async findAll(filter: any, projection: any, options: any) {
    return await this._jobRepo.findAll(filter, projection, options);
  }
  async findOne(filter: any, projection: any, options: any) {
    return await this._jobRepo.findOne(filter, projection, options);
  }
  async create(entity: any, options: any) {
    return await this._jobRepo.create(entity, options);
  }
  async findOneAndUpdate(filter: any, update: any, options: any) {
    return await this._jobRepo.findOneAndUpdate(filter, update, options);
  }
  async findOneAndRemove(filter: any, options: any) {
    return await this._jobRepo.findOneAndRemove(filter, options);
  }
};
JobService = __decorate(
  [Injectable(), __metadata("design:paramtypes", [JobRepo])],
  JobService
);
const _JobService = JobService;
export { _JobService as JobService };
