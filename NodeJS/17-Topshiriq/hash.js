import bcrypt from 'bcrypt'

class HashPassword{
    encrypt=async (data)=>{
        const salt=await bcrypt.genSalt(7)
        const hashPassword=bcrypt.hash(data,salt)
        return hashPassword
    }

    decrypt=async (data,password)=>{
        return await bcrypt.compare(data,password)
    }
}

export default new HashPassword();