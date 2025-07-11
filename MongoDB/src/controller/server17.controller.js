import { writeDB, readDB, getById, updateByid, deleteById } from '../helper/server17.helper.js'

const createUser = async (req, res) => {
    try {
        const result = await writeDB(req.body)
        return res.status(201).json({
            statusCode: 201,
                message: 'success',
                data:result
        })
        
    } catch (error) {
        return res.status(500).json({
            statusCode: 500,
            message: error.message || 'Internal server error'
        });
    }
}
// ---------------------------------------------------------------------------------------------------------------

const getAllUsers = async (req, res) => {
    try {
        const result = await readDB()
        if (result.length == 0) {
            return res.status(404).json({
                statusCode: 404,
                message: 'empty',
                data: []
            })
        }
        return res.status(200).json({
            statusCode: 200,
            message: 'success',
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            statusCode: 500,
            message: error.message || 'Internal server error'
        });
    }
}
// ---------------------------------------------------------------------------------------------------------------

const getUserbyId = async (req, res) => {
    try {
        const result = await getById(req.params.id)        
        if (!result) {
            return res.status(404).json({
                statusCode: 404,
                message: 'Not found user :(',
                data: []
            })
        }
        return res.status(200).json({
            statusCode: 200,
            message: 'success2',
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            statusCode: 500,
            message: error.message || 'Internal server error'
        });
    }
}
// ---------------------------------------------------------------------------------------------------------------

const updateUser = async (req, res) => {
 try {    
        const result = await updateByid(req.params.id)    
        if (result.message==0) {
            return res.status(404).json({
                statusCode: 404,
                message: 'Not found user :(',
                data: []
            })
        }
        return res.status(200).json({
            statusCode: 200,
            message: 'success',
            data: result.data
        })
    } catch (error) {
        return res.status(500).json({
            statusCode: 500,
            message: error.message || 'Internal server error'
        });
    }
}
// ---------------------------------------------------------------------------------------------------------------

const deleteUser = async (req, res) => {
    try {    
        const result = await deleteById(req.params.id)    
        if (result==0) {
            return res.status(404).json({
                statusCode: 404,
                message: 'Not found user :(',
            })
        }
        return res.status(200).json({
            statusCode: 200,
            message: 'success',
            data: {}
        })
    } catch (error) {
        return res.status(500).json({
            statusCode: 500,
            message: error.message || 'Internal server error'
        });
    }
}
// ---------------------------------------------------------------------------------------------------------------

export {
    createUser, getAllUsers, getUserbyId, updateUser, deleteUser
}