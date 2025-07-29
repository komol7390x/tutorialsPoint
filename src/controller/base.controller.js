import { isValidObjectId } from "mongoose";

export class BaseController {
    constructor(model) {
        this.model = model
    }
    // -------------------------------------------------------------------
    // CREATE
    create = async (req, res) => {
        try {
            console.log(">> ", req.body)
            const data =await this.model.create(req.body)
            return res.status(201).json({
                statusCode: 201,
                message: 'success',
                data
            })
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: error.message || 'Invalid server error'
            })
        }
    }
    // -------------------------------------------------------------------
    // GET_ALL
    getAll = async (_, res) => {
        try {
            const data = await this.model.find()
            return res.status(200).json({
                statusCode: 200,
                message: 'success',
                data
            })
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: error.message || 'Invalid server error'
            })
        }
    }
    // -------------------------------------------------------------------
    // GET_BY_ID
    getByID = async (req, res) => {
        try {
            const id = req.params.id
            const checkUser = await this.checkByID(id, res);
            return res.status(200).json({
                statusCode: 200,
                message: 'success',
                data: checkUser
            })
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: error.message || 'Invalid server error'
            })
        }
    }
    // -------------------------------------------------------------------
    // UPDATE
    update = async (req, res) => {
        try {
            const id = req.params.id
            await this.checkByID(id, res);
            const updateUser = await this.model.findByIdAndUpdate(id, req.body, { new: true })
            return res.status(200).json({
                statusCode: 200,
                message: 'success',
                data: updateUser
            })
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: error.message || 'Invalid server error'
            })
        }
    }
    // -------------------------------------------------------------------
    // DELETE
    delete = async (req, res) => {
        try {
            const id = req.params.id
            await this.checkByID(id, res);
            const updateUser = await this.model.findByIdAndDelete(id, req.params)
            return res.status(200).json({
                statusCode: 200,
                message: 'success',
                data: {}
            })
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: error.message || 'Invalid server error'
            })
        }
    }
    // -------------------------------------------------------------------
    // CHECK_BY_ID
    checkByID = async (id) => {
    if (!isValidObjectId(id)) {
        throw new Error('Invalid ObjectId');
    }
    const data = await this.model?.findById(id);
    if (!data) {
        throw new Error(`${this.model.modelName} not found`);
    }
    return data;
}
}