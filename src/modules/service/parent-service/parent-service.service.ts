import { Injectable } from "@nestjs/common";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";
import { ParentServiceRepo } from "./repo/parent-service.repo";

let ParentServiceService = class ParentServiceService {
  private _parentServiceRepo: any;
  constructor(_parentServiceRepo: any) {
    this._parentServiceRepo = _parentServiceRepo;
  }
  async findManyPaginated(filter: any, projection: any, options: any) {
    return await this._parentServiceRepo.findManyPaginated(
      filter,
      projection,
      options
    );
  }
  async findAll(filter: any, projection: any, options: any) {
    return await this._parentServiceRepo.findAll(filter, projection, options);
  }
  async findOne(filter: any, projection: any, options: any) {
    return await this._parentServiceRepo.findOne(filter, projection, options);
  }
  async create(entity: any, options: any) {
    return await this._parentServiceRepo.create(entity, options);
  }
  async findOneAndUpdate(filter: any, update: any, options: any) {
    return await this._parentServiceRepo.findOneAndUpdate(
      filter,
      update,
      options
    );
  }
  async findOneAndRemove(filter: any, options: any) {
    return await this._parentServiceRepo.findOneAndRemove(filter, options);
  }
};
ParentServiceService = __decorate(
  [Injectable(), __metadata("design:paramtypes", [ParentServiceRepo])],
  ParentServiceService
);
const _ParentServiceService = ParentServiceService;
export { _ParentServiceService as ParentServiceService };
