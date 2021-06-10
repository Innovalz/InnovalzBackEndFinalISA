import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { BaseRepo } from "../../../core/database/base/repo/base.repo";
import { ModelsNames } from "../../../core/database/models-names";
import { Model } from "mongoose";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";
import { __param } from "../../../helpers/param";

let JobRepo = class JobRepo extends BaseRepo {
  constructor(repo: any) {
    super(repo);
  }
};
JobRepo = __decorate(
  [
    Injectable(),
    __param(0, InjectModel(ModelsNames.job)),
    __metadata("design:paramtypes", [Model]),
  ],
  JobRepo
);
const _JobRepo = JobRepo;
export { _JobRepo as JobRepo };
