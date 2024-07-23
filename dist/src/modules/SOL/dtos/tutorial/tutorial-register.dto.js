"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorialCreateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const tutorial_location_enum_1 = require("../../enums/tutorial-location.enum");
const tutorial_type_enum_1 = require("../../enums/tutorial-type.enum");
class TutorialCreateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TutorialCreateDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: tutorial_location_enum_1.TutorialLocationEnum }),
    __metadata("design:type", String)
], TutorialCreateDto.prototype, "screenLocation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: tutorial_type_enum_1.TutorialTypeEnum }),
    __metadata("design:type", String)
], TutorialCreateDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], TutorialCreateDto.prototype, "question", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: [String] }),
    __metadata("design:type", Array)
], TutorialCreateDto.prototype, "alternatives", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], TutorialCreateDto.prototype, "correctAnswer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], TutorialCreateDto.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], TutorialCreateDto.prototype, "videoLink", void 0);
exports.TutorialCreateDto = TutorialCreateDto;
//# sourceMappingURL=tutorial-register.dto.js.map