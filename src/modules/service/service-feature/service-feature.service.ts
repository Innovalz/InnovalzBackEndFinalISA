import { Injectable } from "@nestjs/common";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";
import { ServiceFeatureRepo } from "./repo/service-feature.repo";

let ServiceFeatureService = class ServiceFeatureService {
  private _serviceFeatureRepo: any;
  constructor(_serviceFeatureRepo: any) {
    this._serviceFeatureRepo = _serviceFeatureRepo;
  }
  async findManyPaginated(filter: any, projection: any, options: any) {
    return this._serviceFeatureRepo.findManyPaginated(
      filter,
      projection,
      options
    );
  }
  async findAll(filter: any, projection: any, options: any) {
    return await this._serviceFeatureRepo.findAll(filter, projection, options);
  }
  async findOne(filter: any, projection: any, options: any) {
    return await this._serviceFeatureRepo.findOne(filter, projection, options);
  }
  async create(entity: any, options: any) {
    return await this._serviceFeatureRepo.create(entity, options);
  }
  async findOneAndUpdate(filter: any, update: any, options: any) {
    return await this._serviceFeatureRepo.findOneAndUpdate(
      filter,
      update,
      options
    );
  }
  async findOneAndRemove(filter: any, options: any) {
    return await this._serviceFeatureRepo.findOneAndRemove(filter, options);
  }
};
ServiceFeatureService = __decorate(
  [Injectable(), __metadata("design:paramtypes", [ServiceFeatureRepo])],
  ServiceFeatureService
);
const _ServiceFeatureService = ServiceFeatureService;
export { _ServiceFeatureService as ServiceFeatureService };
