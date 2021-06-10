import { Module } from "@nestjs/common";
import { RequestOfferService } from "./request-offer.service";
import { RequestOfferResolver } from "./request-offer.resolver";
import { RequestOfferSchema } from "./repo/request-offer.schema";
import { ModelsNames } from "../../core/database/models-names";
import { injectMongoose } from "../../core/database/imports/inject-mongoose";
import { RequestOfferRepo } from "./repo/request-offer.repo";
import { __decorate } from "../../helpers/decorate";

let RequestOfferModule = class RequestOfferModule {};
RequestOfferModule = __decorate(
  [
    Module({
      imports: [
        injectMongoose(ModelsNames.requestOffer, RequestOfferSchema, {
          disable: { i18n: true },
        }),
      ],
      providers: [RequestOfferRepo, RequestOfferService, RequestOfferResolver],
      exports: [RequestOfferService],
    }),
  ],
  RequestOfferModule
);
const _RequestOfferModule = RequestOfferModule;
export { _RequestOfferModule as RequestOfferModule };
