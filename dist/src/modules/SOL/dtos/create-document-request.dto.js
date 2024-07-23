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
exports.CreateDocumentRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const modelContract_classification_enum_1 = require("../enums/modelContract-classification.enum");
class CreateDocumentRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, required: true, description: 'Nome do documento' }),
    __metadata("design:type", String)
], CreateDocumentRequestDto.prototype, "language", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, enum: modelContract_classification_enum_1.ModelContractClassificationEnum, required: true }),
    __metadata("design:type", String)
], CreateDocumentRequestDto.prototype, "type", void 0);
exports.CreateDocumentRequestDto = CreateDocumentRequestDto;
//# sourceMappingURL=create-document-request.dto.js.map