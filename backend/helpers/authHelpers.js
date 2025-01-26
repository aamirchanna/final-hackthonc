import bcrypt from 'bcrypt'

// hash the password
export const hashpassword = async (password)=>{
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltRounds);
        return hashedPassword

        
    } catch (error) {
        console.log('error in hashing the password',error)
        
    }
}

// pasword compare
export const comparePassword = async (password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword)
}