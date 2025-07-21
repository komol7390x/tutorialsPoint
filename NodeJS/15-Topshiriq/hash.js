import bcrypt from 'bcrypt'

class HashPassword{
    encrypt=(data)=>{
        const salt=bcrypt.genSalt()
        const hashPassword=bcrypt.hash(data,salt)
        return hashPassword
    }

    decrypt=(data,password)=>{
        return bcrypt.compare(data,password)
    }
}

export default new HashPassword();