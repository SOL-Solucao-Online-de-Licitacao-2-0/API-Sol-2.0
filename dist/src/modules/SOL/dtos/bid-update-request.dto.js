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
exports.BidUpdateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const allotment_request_dto_1 = require("./allotment-request.dto");
const bid_status_enum_1 = require("../enums/bid-status.enum");
const supplier_schema_1 = require("../schemas/supplier.schema");
class BidUpdateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], BidUpdateDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], BidUpdateDto.prototype, "agreementId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], BidUpdateDto.prototype, "classification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], BidUpdateDto.prototype, "start_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], BidUpdateDto.prototype, "end_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], BidUpdateDto.prototype, "bid_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], BidUpdateDto.prototype, "days_to_delivery", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], BidUpdateDto.prototype, "days_to_tiebreaker", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], BidUpdateDto.prototype, "local_to_delivery", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, enum: bid_status_enum_1.BidStatusEnum }),
    __metadata("design:type", String)
], BidUpdateDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], BidUpdateDto.prototype, "aditional_site", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [allotment_request_dto_1.AllotmentRequestDto] }),
    __metadata("design:type", Array)
], BidUpdateDto.prototype, "add_allotment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: supplier_schema_1.Supplier }),
    __metadata("design:type", Array)
], BidUpdateDto.prototype, "invited_suppliers", void 0);
exports.BidUpdateDto = BidUpdateDto;
//# sourceMappingURL=bid-update-request.dto.js.map