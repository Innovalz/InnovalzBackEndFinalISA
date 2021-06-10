import { Injectable } from "@nestjs/common";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";
import { PricingTeamMemberRepo } from "./repo/pricing-team-member.repo";

let PricingTeamMemberService = class PricingTeamMemberService {
  private _pricingTeamMemberRepo: any;
  constructor(_pricingTeamMemberRepo: any) {
    this._pricingTeamMemberRepo = _pricingTeamMemberRepo;
  }
  async findManyPaginated(filter: any, projection: any, options: any) {
    return await this._pricingTeamMemberRepo.findManyPaginated(
      filter,
      projection,
      options
    );
  }
  async findAll(filter: any, projection: any, options: any) {
    return await this._pricingTeamMemberRepo.findAll(
      filter,
      projection,
      options
    );
  }
  async findOne(filter: any, projection: any, options: any) {
    return await this._pricingTeamMemberRepo.findOne(
      filter,
      projection,
      options
    );
  }
  async create(entity: any, options: any) {
    return await this._pricingTeamMemberRepo.create(entity, options);
  }
  async findOneAndUpdate(filter: any, update: any, options: any) {
    return await this._pricingTeamMemberRepo.findOneAndUpdate(
      filter,
      update,
      options
    );
  }
  async findOneAndRemove(filter: any, options: any) {
    return await this._pricingTeamMemberRepo.findOneAndRemove(filter, options);
  }
};
PricingTeamMemberService = __decorate(
  [Injectable(), __metadata("design:paramtypes", [PricingTeamMemberRepo])],
  PricingTeamMemberService
);
const _PricingTeamMemberService = PricingTeamMemberService;
export { _PricingTeamMemberService as PricingTeamMemberService };
