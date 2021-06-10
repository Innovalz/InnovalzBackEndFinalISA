import { Injectable } from "@nestjs/common";
import { __decorate } from "../../helpers/decorate";
import { __metadata } from "../../helpers/metadata";
import { ProductRepo } from "./repo/product.repo";

let ProductService = class ProductService {
  private _productRepo: any;
  constructor(_productRepo: any) {
    this._productRepo = _productRepo;
  }
  async findManyPaginated(filter: any, projection: any, options: any) {
    return await this._productRepo.findManyPaginated(
      filter,
      projection,
      options
    );
  }
  async findAll(filter: any, projection: any, options: any) {
    return await this._productRepo.findAll(filter, projection, options);
  }
  async findOne(filter: any, projection: any, options: any) {
    return await this._productRepo.findOne(filter, projection, options);
  }
  async create(entity: any, options: any) {
    return await this._productRepo.create(entity, options);
  }
  async findOneAndUpdate(filter: any, update: any, options: any) {
    return await this._productRepo.findOneAndUpdate(filter, update, options);
  }
  async findOneAndRemove(filter: any, options: any) {
    return await this._productRepo.findOneAndRemove(filter, options);
  }
};
ProductService = __decorate(
  [Injectable(), __metadata("design:paramtypes", [ProductRepo])],
  ProductService
);
const _ProductService = ProductService;
export { _ProductService as ProductService };
