import { Injectable } from "@nestjs/common";
import { ChildServiceRepo } from "./repo/child-service.repo";
import { ParentServiceService } from "../parent-service/parent-service.service";
import { GraphQLError } from "graphql";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let ChildServiceService = class ChildServiceService {
  private _childServiceRepo: any;
  private _parentServiceService: any;
  constructor(_childServiceRepo: any, _parentServiceService: any) {
    this._childServiceRepo = _childServiceRepo;
    this._parentServiceService = _parentServiceService;
  }
  async findManyPaginated(filter: any, projection: any, options: any) {
    return await this._childServiceRepo.findManyPaginated(
      filter,
      projection,
      options
    );
  }
  async findAll(filter: any, projection: any, options: any) {
    return await this._childServiceRepo.findAll(filter, projection, options);
  }
  async findOne(filter: any, projection: any, options: any) {
    return await this._childServiceRepo.findOne(filter, projection, options);
  }
  async create(entity: { parentService: any }, options: any) {
    const parentEntity = await this._parentServiceService.findOne(
      {
        id: entity.parentService,
      },
      null,
      options
    );
    if (!parentEntity) {
      throw new GraphQLError("Parent not exists");
    }
    return await this._childServiceRepo.create(entity, options);
  }
  async findOneAndUpdate(filter: any, update: any, options: any) {
    return await this._childServiceRepo.findOneAndUpdate(
      filter,
      update,
      options
    );
  }
  async findOneAndRemove(filter: any, options: any) {
    return await this._childServiceRepo.findOneAndRemove(filter, options);
  }
};
ChildServiceService = __decorate(
  [
    Injectable(),
    __metadata("design:paramtypes", [ChildServiceRepo, ParentServiceService]),
  ],
  ChildServiceService
);
const _ChildServiceService = ChildServiceService;
export { _ChildServiceService as ChildServiceService };
