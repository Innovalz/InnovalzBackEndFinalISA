import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { BaseRepo } from "../../../core/database/base/repo/base.repo";
import { ModelsNames } from "../../../core/database/models-names";
import { Model } from "mongoose";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";
import { __param } from "../../../helpers/param";

let StandAloneRepo = class StandAloneRepo extends BaseRepo {
  constructor(standAloneEntity: any) {
    super(standAloneEntity);
  }
};
StandAloneRepo = __decorate(
  [
    Injectable(),
    __param(0, InjectModel(ModelsNames.standAlone)),
    __metadata("design:paramtypes", [Model]),
  ],
  StandAloneRepo
);
const _StandAloneRepo = StandAloneRepo;
export { _StandAloneRepo as StandAloneRepo };
