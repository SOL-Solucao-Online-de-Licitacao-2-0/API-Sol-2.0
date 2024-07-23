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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndPointsRepository = void 0;
const common_1 = require("@nestjs/common");
const endpoints_schema_1 = require("../schemas/endpoints.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let EndPointsRepository = class EndPointsRepository {
    constructor(_model) {
        this._model = _model;
    }
    async register(dto) {
        const data = await new this._model(dto);
        return data.save();
    }
    async list() {
        return await this._model.find();
    }
    async getById(_id) {
        return await this._model.findOne({ _id });
    }
    async update(_id, dto) {
        return await this._model.findOneAndUpdate({ _id }, {
            $set: dto,
        }, { new: true });
    }
    async deleteById(_id) {
        return await this._model.findOneAndDelete({ _id });
    }
    async getByEndpointType(endpointType) {
        return await this._model.findOne({ endpointType });
    }
};
EndPointsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(endpoints_schema_1.EndPoints.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EndPointsRepository);
exports.EndPointsRepository = EndPointsRepository;
//# sourceMappingURL=endpoints.repository.js.map