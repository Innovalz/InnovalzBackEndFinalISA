import { Injectable } from "@nestjs/common";
import { __decorate } from "../../helpers/decorate";
import { __metadata } from "../../helpers/metadata";
import { ContactUsRepo } from "./repo/contact-us.repo";

let ContactUsService = class ContactUsService {
  _contactUsRepo: any;
  constructor(_contactUsRepo: any) {
    this._contactUsRepo = _contactUsRepo;
  }
  async findManyPaginated(filter: any, projection: any, options: any) {
    return await this._contactUsRepo.findManyPaginated(
      filter,
      projection,
      options
    );
  }
  async findAll(filter: any, projection: any, options: any) {
    return await this._contactUsRepo.findAll(filter, projection, options);
  }
  async findOne(filter: any, projection: any, options: any) {
    return await this._contactUsRepo.findOne(filter, projection, options);
  }
  async create(entity: any, options: any) {
    return await this._contactUsRepo.create(entity, options);
  }
  async findOneAndUpdate(filter: any, update: any, options: any) {
    return await this._contactUsRepo.findOneAndUpdate(filter, update, options);
  }
  async findOneAndRemove(filter: any, options: any) {
    return await this._contactUsRepo.findOneAndRemove(filter, options);
  }
};
ContactUsService = __decorate(
  [Injectable(), __metadata("design:paramtypes", [ContactUsRepo])],
  ContactUsService
);
const _ContactUsService = ContactUsService;
export { _ContactUsService as ContactUsService };
