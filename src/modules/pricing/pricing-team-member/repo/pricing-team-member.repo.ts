import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { BaseRepo } from "../../../../core/database/base/repo/base.repo";
import { ModelsNames } from "../../../../core/database/models-names";
import { Model } from "mongoose";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";
import { __param } from "../../../../helpers/param";

let PricingTeamMemberRepo = class PricingTeamMemberRepo extends BaseRepo {
  constructor(repo: any) {
    super(repo);
  }
};
PricingTeamMemberRepo = __decorate(
  [
    Injectable(),
    __param(0, InjectModel(ModelsNames.pricingTeamMember)),
    __metadata("design:paramtypes", [Model]),
  ],
  PricingTeamMemberRepo
);
const _PricingTeamMemberRepo = PricingTeamMemberRepo;
export { _PricingTeamMemberRepo as PricingTeamMemberRepo };
