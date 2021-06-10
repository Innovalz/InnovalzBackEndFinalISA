import { Injectable } from "@nestjs/common";
import { __decorate } from "../../helpers/decorate";
import { __metadata } from "../../helpers/metadata";
import { RequestOfferRepo } from "./repo/request-offer.repo";

let RequestOfferService = class RequestOfferService {
  private _requestOfferRepo: any;
  constructor(_requestOfferRepo: any) {
    this._requestOfferRepo = _requestOfferRepo;
  }
  async findManyPaginated(filter: any, projection: any, options: any) {
    return await this._requestOfferRepo.findManyPaginated(
      filter,
      projection,
      options
    );
  }
  async findAll(filter: any, projection: any, options: any) {
    return await this._requestOfferRepo.findAll(filter, projection, options);
  }
  async findOne(filter: any, projection: any, options: any) {
    return await this._requestOfferRepo.findOne(filter, projection, options);
  }
  async create(entity: any, options: any) {
    return await this._requestOfferRepo.create(entity, options);
  }
  async findOneAndUpdate(filter: any, update: any, options: any) {
    return await this._requestOfferRepo.findOneAndUpdate(
      filter,
      update,
      options
    );
  }
  async findOneAndRemove(filter: any, options: any) {
    return await this._requestOfferRepo.findOneAndRemove(filter, options);
  }
};
RequestOfferService = __decorate(
  [Injectable(), __metadata("design:paramtypes", [RequestOfferRepo])],
  RequestOfferService
);
const _RequestOfferService = RequestOfferService;
export { _RequestOfferService as RequestOfferService };
