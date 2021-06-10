import { Injectable } from "@nestjs/common";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";
import { PricingStepRepo } from "./repo/pricing-step.repo";

let PricingStepService = class PricingStepService {
  private _pricingStepRepo: any;
  constructor(_pricingStepRepo: any) {
    this._pricingStepRepo = _pricingStepRepo;
  }
  async findManyPaginated(filter: any, projection: any, options: any) {
    return await this._pricingStepRepo.findManyPaginated(
      filter,
      projection,
      options
    );
  }
  async findAll(filter: any, projection: any, options: any) {
    return await this._pricingStepRepo.findAll(filter, projection, options);
  }
  async findOne(filter: any, projection: any, options: any) {
    return await this._pricingStepRepo.findOne(filter, projection, options);
  }
  async create(entity: any, options: any) {
    return await this._pricingStepRepo.create(entity, options);
  }
  async findOneAndUpdate(filter: any, update: any, options: any) {
    return await this._pricingStepRepo.findOneAndUpdate(
      filter,
      update,
      options
    );
  }
  async findOneAndRemove(filter: any, options: any) {
    return await this._pricingStepRepo.findOneAndRemove(filter, options);
  }
};
PricingStepService = __decorate(
  [Injectable(), __metadata("design:paramtypes", [PricingStepRepo])],
  PricingStepService
);
const _PricingStepService = PricingStepService;
export { _PricingStepService as PricingStepService };
