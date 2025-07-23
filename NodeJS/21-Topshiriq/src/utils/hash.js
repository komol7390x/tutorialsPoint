import bcrypt from 'bcrypt'

class HashPassword{
    encrypt=async (data)=>{
        const hashPassword=bcrypt.hash(data,7)
        return hashPassword
    }

    decrypt=async (data,password)=>{
        return await bcrypt.compare(data,password)
    }
}

export default new HashPassword();