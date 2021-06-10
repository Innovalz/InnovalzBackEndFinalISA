import { Injectable } from "@nestjs/common";
import { __decorate } from "../../helpers/decorate";
import { __metadata } from "../../helpers/metadata";
import { SmallParagraphRepo } from "./repo/small-paragraph.repo";

let SmallParagraphService = class SmallParagraphService {
  private _smallParagraphRepo: any;
  constructor(_smallParagraphRepo: any) {
    this._smallParagraphRepo = _smallParagraphRepo;
  }
  async findManyPaginated(filter: any, projection: any, options: any) {
    return await this._smallParagraphRepo.findManyPaginated(
      filter,
      projection,
      options
    );
  }
  async findAll(filter: any, projection: any, options: any) {
    return await this._smallParagraphRepo.findAll(filter, projection, options);
  }
  async findOne(filter: any, projection: any, options: any) {
    return await this._smallParagraphRepo.findOne(filter, projection, options);
  }
  async create(entity: any, options: any) {
    return await this._smallParagraphRepo.create(entity, options);
  }
  async findOneAndUpdate(filter: any, update: any, options: any) {
    return await this._smallParagraphRepo.findOneAndUpdate(
      filter,
      update,
      options
    );
  }
  async findOneAndRemove(filter: any, options: any) {
    return await this._smallParagraphRepo.findOneAndRemove(filter, options);
  }
};
SmallParagraphService = __decorate(
  [Injectable(), __metadata("design:paramtypes", [SmallParagraphRepo])],
  SmallParagraphService
);
const _SmallParagraphService = SmallParagraphService;
export { _SmallParagraphService as SmallParagraphService };
