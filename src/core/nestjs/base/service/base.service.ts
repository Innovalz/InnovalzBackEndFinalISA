import { Injectable } from "@nestjs/common";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let BaseService = class BaseService {
  private _repo: any;
  constructor(_repo: any) {
    this._repo = _repo;
  }
};
BaseService = __decorate(
  [Injectable(), __metadata("design:paramtypes", [Object])],
  BaseService
);
const _BaseService = BaseService;
export { _BaseService as BaseService };
