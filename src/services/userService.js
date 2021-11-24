import * as userRepository from "../repositories/userRepository.js";
import bcrypt from "bcrypt";

async function createUser ({ name, email, password }) {

    const existingUserWithGivenEmail = await userRepository.selectUser({ email });
  
    if (existingUserWithGivenEmail.rows[0]) {
        return 'already exists';
    }
  
    const hashedPassword = bcrypt.hashSync(password, 12);
  
    await userRepository.createUser({ name, email, password: hashedPassword });

    return true;
}

export {
    createUser,
}