import { Injectable } from "@nestjs/common";
import { __decorate } from "../../helpers/decorate";
import { __metadata } from "../../helpers/metadata";
import { StandAloneRepo } from "./repo/stand-alone.repo";

let StandAloneService = class StandAloneService {
  private _standAloneRepo: any;
  constructor(_standAloneRepo: any) {
    this._standAloneRepo = _standAloneRepo;
  }
  async setStandAloneKey(key: any, update: any, options: any) {
    const doc = await this._standAloneRepo.findOneAndUpdate(
      { key },
      { value: update },
      Object.assign({ upsert: true }, options)
    );
    return doc === null || doc === void 0 ? void 0 : doc.value;
  }
  async getStandAloneKey(key: any, options: any) {
    const doc = await this._standAloneRepo.findOne({ key }, null, options);
    return doc === null || doc === void 0 ? void 0 : doc.value;
  }
};
StandAloneService = __decorate(
  [Injectable(), __metadata("design:paramtypes", [StandAloneRepo])],
  StandAloneService
);
const _StandAloneService = StandAloneService;
export { _StandAloneService as StandAloneService };
