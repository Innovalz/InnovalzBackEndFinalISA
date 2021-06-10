import { Injectable } from "@nestjs/common";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";
import { PricingServiceRepo } from "./repo/pricing-service.repo";

let PricingServiceService = class PricingServiceService {
  private _pricingServiceRepo: any;
  constructor(_pricingServiceRepo: any) {
    this._pricingServiceRepo = _pricingServiceRepo;
  }
  async findManyPaginated(filter: any, projection: any, options: any) {
    return await this._pricingServiceRepo.findManyPaginated(
      filter,
      projection,
      options
    );
  }
  async findAll(filter: any, projection: any, options: any) {
    return await this._pricingServiceRepo.findAll(filter, projection, options);
  }
  async findOne(filter: any, projection: any, options: any) {
    return await this._pricingServiceRepo.findOne(filter, projection, options);
  }
  async create(entity: any, options: any) {
    return await this._pricingServiceRepo.create(entity, options);
  }
  async findOneAndUpdate(filter: any, update: any, options: any) {
    return await this._pricingServiceRepo.findOneAndUpdate(
      filter,
      update,
      options
    );
  }
  async findOneAndRemove(filter: any, options: any) {
    return await this._pricingServiceRepo.findOneAndRemove(filter, options);
  }
};
PricingServiceService = __decorate(
  [Injectable(), __metadata("design:paramtypes", [PricingServiceRepo])],
  PricingServiceService
);
const _PricingServiceService = PricingServiceService;
export { _PricingServiceService as PricingServiceService };
