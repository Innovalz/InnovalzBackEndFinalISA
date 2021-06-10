import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { BaseRepo } from "../../../../core/database/base/repo/base.repo";
import { ModelsNames } from "../../../../core/database/models-names";
import { Model } from "mongoose";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";
import { __param } from "../../../../helpers/param";

let ParentServiceRepo = class ParentServiceRepo extends BaseRepo {
  constructor(repo: any) {
    super(repo);
  }
};
ParentServiceRepo = __decorate(
  [
    Injectable(),
    __param(0, InjectModel(ModelsNames.parentService)),
    __metadata("design:paramtypes", [Model]),
  ],
  ParentServiceRepo
);
const _ParentServiceRepo = ParentServiceRepo;
export { _ParentServiceRepo as ParentServiceRepo };
