import { Injectable } from "@nestjs/common";
import { __decorate } from "../../helpers/decorate";
import { __metadata } from "../../helpers/metadata";
import { UserRepo } from "./repo/user.repo";

let UserService = class UserService {
  private _userRepo: any;
  constructor(_userRepo: any) {
    this._userRepo = _userRepo;
  }
  async findManyPaginated(filter: any, projection: any, options: any) {
    return await this._userRepo.findManyPaginated(filter, projection, options);
  }
  async findAll(filter: any, projection: any, options: any) {
    return await this._userRepo.findAll(filter, projection, options);
  }
  async findOne(filter: any, projection: any, options: any) {
    return await this._userRepo.findOne(filter, projection, options);
  }
  async create(entity: any, options: any) {
    return await this._userRepo.create(entity, options);
  }
  async findOneAndUpdate(filter: any, update: any, options: any) {
    return await this._userRepo.findOneAndUpdate(filter, update, options);
  }
  async findOneAndRemove(filter: any, options: any) {
    return await this._userRepo.findOneAndRemove(filter, options);
  }
};
UserService = __decorate(
  [Injectable(), __metadata("design:paramtypes", [UserRepo])],
  UserService
);
const _UserService = UserService;
export { _UserService as UserService };
