import { ProposalStatusEnum } from "../enums/proposal-status.enum";
import { Bids } from "./bids.schema";
import * as mongoose from 'mongoose';
import { Allotment } from "./allotment.schema";
import { User } from "./user.schema";
import { ValueForAllotmentInterface } from "../interfaces/value-for-allotment.interface";
export declare class Proposal {
    total_value: string;
    association_accept: boolean;
    supplier_accept: boolean;
    reviewer_accept: boolean;
    status: ProposalStatusEnum;
    deleted: boolean;
    item_list: string[];
    bid: Bids;
    allotment: Allotment[];
    file: string;
    proposalWin: boolean;
    refusedBecaused: string;
    refusedBy: User;
    proposedBy: User;
    acceptedRevisor: User;
    acceptedFornecedor: User;
    acceptedFornecedorAt: Date;
    acceptedRevisorAt: Date;
    refusedAt: Date;
    freight: number;
    totalValueForAllotment: ValueForAllotmentInterface[];
}
export declare const ProposaltSchema: mongoose.Schema<Proposal, mongoose.Model<Proposal, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Proposal>;
