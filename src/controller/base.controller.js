import { isValidObjectId } from "mongoose";
import { successRes } from '../utils/success-response.js'
import {AppError} from '../error/AppError.js'
export class BaseController {
    constructor(model) {
        this.model = model
    }
    // -------------------------------------------------------------------
    // CREATE
    create = async (req, res, next) => {
        try {
            const data = await this.model.create(req.body)
            successRes(res, data, 201)
        } catch (error) {
            next(error)
        }
    }
    // -------------------------------------------------------------------
    // GET_ALL
    getAll = async (_, res, next) => {
        try {
            const data = await this.model.find()
            successRes(res, data)
        } catch (error) {
           next(error)
        }
    }
    // -------------------------------------------------------------------
    // GET_BY_ID
    getByID = async (req, res, next) => {
        try {
            const id = req.params.id
            const checkUser = await this.checkByID(id, res);
           successRes(res,checkUser)
        } catch (error) {
           next(error)
        }
    }
    // -------------------------------------------------------------------
    // UPDATE
    update = async (req, res, next) => {
        try {
            const id = req.params.id
            await this.checkByID(id, res);
            const updateUser = await this.model.findByIdAndUpdate(id, req.body, { new: true })
            successRes(res,updateUser)
        } catch (error) {
           next(error)
        }
    }
    // -------------------------------------------------------------------
    // DELETE
    delete = async (req, res, next) => {
        try {
            const id = req.params.id
            await this.checkByID(id);
            await this.model.findByIdAndDelete(id)
            successRes(res,{})
        } catch (error) {
           next(error)
        }
    }
    // -------------------------------------------------------------------
    // CHECK_BY_ID
    checkByID = async (id) => {
        if (!isValidObjectId(id)) {
            throw new AppError('Invalid ObjectId',400);
        }
        const data = await this.model?.findById(id);
        if (!data) {
            throw new AppError(`${this.model.modelName} not found`,404);
        }
        return data;
    }
}