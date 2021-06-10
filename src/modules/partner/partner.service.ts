import { Injectable } from "@nestjs/common";
import { __decorate } from "../../helpers/decorate";
import { __metadata } from "../../helpers/metadata";
import { PartnerRepo } from "./repo/partner.repo";

let PartnerService = class PartnerService {
  private _partnerRepo: any;
  constructor(_partnerRepo: any) {
    this._partnerRepo = _partnerRepo;
  }
  async findManyPaginated(filter: any, projection: any, options: any) {
    return await this._partnerRepo.findManyPaginated(
      filter,
      projection,
      options
    );
  }
  async findAll(filter: any, projection: any, options: any) {
    return await this._partnerRepo.findAll(filter, projection, options);
  }
  async findOne(filter: any, projection: any, options: any) {
    return await this._partnerRepo.findOne(filter, projection, options);
  }
  async findOneAndUpdate(filter: any, update: any, options: any) {
    return await this._partnerRepo.findOneAndUpdate(filter, update, options);
  }
  async create(entity: any, options: any) {
    return await this._partnerRepo.create(entity, options);
  }
  async findOneAndRemove(filter: any, options: any) {
    return await this._partnerRepo.findOneAndRemove(filter, options);
  }
};
PartnerService = __decorate(
  [Injectable(), __metadata("design:paramtypes", [PartnerRepo])],
  PartnerService
);
const _PartnerService = PartnerService;
export { _PartnerService as PartnerService };
