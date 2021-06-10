import { Injectable } from "@nestjs/common";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";
import { PricingCategoryRepo } from "./repo/pricing-category.repo";

let PricingCategoryService = class PricingCategoryService {
  private _pricingCategoryRepo: any;
  constructor(_pricingCategoryRepo: any) {
    this._pricingCategoryRepo = _pricingCategoryRepo;
  }
  async findManyPaginated(filter: any, projection: any, options: any) {
    return await this._pricingCategoryRepo.findManyPaginated(
      filter,
      projection,
      options
    );
  }
  async findAll(filter: any, projection: any, options: any) {
    return await this._pricingCategoryRepo.findAll(filter, projection, options);
  }
  async findOne(filter: any, projection: any, options: any) {
    return await this._pricingCategoryRepo.findOne(filter, projection, options);
  }
  async create(entity: any, options: any) {
    return await this._pricingCategoryRepo.create(entity, options);
  }
  async findOneAndUpdate(filter: any, update: any, options: any) {
    return await this._pricingCategoryRepo.findOneAndUpdate(
      filter,
      update,
      options
    );
  }
  async findOneAndRemove(filter: any, options: any) {
    return await this._pricingCategoryRepo.findOneAndRemove(filter, options);
  }
};
PricingCategoryService = __decorate(
  [Injectable(), __metadata("design:paramtypes", [PricingCategoryRepo])],
  PricingCategoryService
);
const _PricingCategoryService = PricingCategoryService;
export { _PricingCategoryService as PricingCategoryService };
