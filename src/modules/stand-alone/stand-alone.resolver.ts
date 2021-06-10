import { Query, Mutation, Args, Resolver } from "@nestjs/graphql";
import { StandAloneService } from "./stand-alone.service";
import { SetAboutInput } from "./dtos/set-about.input";
import { AboutEntity } from "./entities/get-about.entity";
import { StandAloneKeys } from "./types/stand-alone-key.enum";
import { MissionEntity } from "./entities/get-mission.entity";
import { SetMissionInput } from "./dtos/set-mission.input";
import { VisionEntity } from "./entities/get-vision.entity";
import { SetVisionInput } from "./dtos/set-vision.input";
import { Auth } from "../../services/auth/decorators/auth.decorator";
import { authRoles } from "../../services/auth/constants/auth.roles";
import { CustomOptions } from "../../core/class-validator/decorators/custom-options.decorator";
import { __decorate } from "../../helpers/decorate";
import { __metadata } from "../../helpers/metadata";
import { __param } from "../../helpers/param";

let StandAloneResolver = class StandAloneResolver {
  private standAloneService: any;
  constructor(standAloneService: any) {
    this.standAloneService = standAloneService;
  }
  async getAboutKey(customOptions: any) {
    return this.standAloneService.getStandAloneKey(
      StandAloneKeys.about,
      customOptions
    );
  }
  async getMissionKey(customOptions: any) {
    return this.standAloneService.getStandAloneKey(
      StandAloneKeys.mission,
      customOptions
    );
  }
  async getVisionKey(customOptions: any) {
    return this.standAloneService.getStandAloneKey(
      StandAloneKeys.vision,
      customOptions
    );
  }
  async setAboutKey(data: any, customOptions: any) {
    return this.standAloneService.setStandAloneKey(
      StandAloneKeys.about,
      data,
      customOptions
    );
  }
  async setMissionKey(data: any, customOptions: any) {
    return this.standAloneService.setStandAloneKey(
      StandAloneKeys.mission,
      data,
      customOptions
    );
  }
  async setVisionKey(data: any, customOptions: any) {
    return this.standAloneService.setStandAloneKey(
      StandAloneKeys.vision,
      data,
      customOptions
    );
  }
};
__decorate(
  [
    Auth(authRoles.standAlone.getAbout),
    Query(() => AboutEntity, { nullable: true }),
    __param(0, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise),
  ],
  StandAloneResolver.prototype,
  "getAboutKey",
  null
);
__decorate(
  [
    Auth(authRoles.standAlone.getMission),
    Query(() => MissionEntity, { nullable: true }),
    __param(0, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise),
  ],
  StandAloneResolver.prototype,
  "getMissionKey",
  null
);
__decorate(
  [
    Auth(authRoles.standAlone.getVision),
    Query(() => VisionEntity, { nullable: true }),
    __param(0, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise),
  ],
  StandAloneResolver.prototype,
  "getVisionKey",
  null
);
__decorate(
  [
    Auth(authRoles.standAlone.setAbout),
    Mutation(() => AboutEntity),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SetAboutInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  StandAloneResolver.prototype,
  "setAboutKey",
  null
);
__decorate(
  [
    Auth(authRoles.standAlone.setMission),
    Mutation(() => MissionEntity),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SetMissionInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  StandAloneResolver.prototype,
  "setMissionKey",
  null
);
__decorate(
  [
    Auth(authRoles.standAlone.setVision),
    Mutation(() => VisionEntity),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SetVisionInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  StandAloneResolver.prototype,
  "setVisionKey",
  null
);
StandAloneResolver = __decorate(
  [Resolver(), __metadata("design:paramtypes", [StandAloneService])],
  StandAloneResolver
);
const _StandAloneResolver = StandAloneResolver;
export { _StandAloneResolver as StandAloneResolver };
