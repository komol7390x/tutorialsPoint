import {db,connectDB} from '../database/server.db.js'
import {ObjectId} from 'mongodb'
await connectDB()
const writeDB=async(item)=>{
    try {
        const result=await db.collection('user').insertOne(item)
        const endResult=await db.collection('user').findOne({_id:result.insertedId})
        return endResult
    } catch (error) {
        return `problem in helper file| problem with mongodb => ${error.message}`
    }
}
// ---------------------------------------------------------------------------------------------------------------

const readDB=async()=>{
    try {
        const result=await db.collection('user').find().toArray()
        return result
    } catch (error) {
        return `problem in helper file| problem with mongodb => ${error.message}`
    }
}
// ---------------------------------------------------------------------------------------------------------------

const getById=async(id)=>{
    try {        
        const endResult=await db.collection('user').findOne({_id:new ObjectId(id)})        
        return endResult
    } catch (error) {
        return `problem in helper file| problem with mongodb => ${error.message}`
    }
}
// ---------------------------------------------------------------------------------------------------------------
const updateByid=async(id,item)=>{
    try {        
        const endResult=await db.collection('user').updateOne({_id:new ObjectId(id)},{$set:{...item}})      
        const result=await db.collection('user').findOne({_id:new ObjectId(id)})
        return {
            message:endResult.matchedCount,
            data:result
        }
    } catch (error) {
        return `problem in helper file| problem with mongodb => ${error.message}`
    }
}
// ---------------------------------------------------------------------------------------------------------------

const deleteById=async(id)=>{
    try {        
        const endResult=await db.collection('user').deleteOne({_id:new ObjectId(id)})        
        return endResult.deletedCount
    } catch (error) {
        return `problem in helper file| problem with mongodb => ${error.message}`
    }
}
// ---------------------------------------------------------------------------------------------------------------

export{
    writeDB,readDB,getById,updateByid,deleteById
}
