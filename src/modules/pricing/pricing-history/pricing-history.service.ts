import { Injectable } from "@nestjs/common";
import { PricingHistoryRepo } from "./repo/pricing-history.repo";
import { PricingServiceService } from "../pricing-services/pricing-service.service";
import { Role } from "../../../services/auth/types/role.enum";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let PricingHistoryService = class PricingHistoryService {
  private _pricingHistoryRepo: any;
  private _pricingServiceService: any;
  constructor(_pricingHistoryRepo: any, _pricingServiceService: any) {
    this._pricingHistoryRepo = _pricingHistoryRepo;
    this._pricingServiceService = _pricingServiceService;
  }
  async findManyPaginated(filter: any, projection: any, options: any) {
    this._filterOwnForNonAdmin(filter, options);
    return await this._pricingHistoryRepo.findManyPaginated(
      filter,
      projection,
      options
    );
  }
  async findAll(filter: any, projection: any, options: any) {
    this._filterOwnForNonAdmin(filter, options);
    return await this._pricingHistoryRepo.findAll(filter, projection, options);
  }
  async findOne(filter: any, projection: any, options: any) {
    this._filterOwnForNonAdmin(filter, options);
    return await this._pricingHistoryRepo.findOne(filter, projection, options);
  }
  async create(entity: { pricingServices: any; user: any }, options: any) {
    const pricingServices = await this._pricingServiceService.findAll(
      {
        id: { $in: entity.pricingServices },
      },
      null,
      Object.assign({ custom: true }, options)
    );
    const totalPrice = pricingServices.reduce(
      (
        p: number,
        c: {
          devRate: number;
          devTime: number;
          setupRate: number;
          setupTime: number;
          price: any;
        }
      ) => {
        if (c.devRate && c.devTime) {
          p += c.devRate * c.devTime;
        }
        if (c.setupRate && c.setupTime) {
          p += c.setupRate * c.setupTime;
        }
        if (c.price) {
          p += c.price;
        }
        return p;
      },
      0
    );
    return await this._pricingHistoryRepo.create(
      {
        user: entity.user,
        pricingServices,
        totalPrice,
      },
      options
    );
  }
  async findOneAndRemove(filter: any, options: any) {
    this._filterOwnForNonAdmin(filter, options);
    return await this._pricingHistoryRepo.findOneAndRemove(filter, options);
  }
  _filterOwnForNonAdmin(
    filter: { user: { email?: any } },
    options: { user: { roles: any; email: any } }
  ) {
    let _a;
    if (
      !((_a = options.user.roles) === null || _a === void 0
        ? void 0
        : _a.includes(Role.admin))
    ) {
      if (!filter.user) {
        filter.user = {};
      }
      filter.user.email = options.user.email;
    }
  }
};
PricingHistoryService = __decorate(
  [
    Injectable(),
    __metadata("design:paramtypes", [
      PricingHistoryRepo,
      PricingServiceService,
    ]),
  ],
  PricingHistoryService
);
const _PricingHistoryService = PricingHistoryService;
export { _PricingHistoryService as PricingHistoryService };
