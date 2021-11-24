import * as userRepository from "../repositories/userRepository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function createUser ({ name, email, password }) {

    const existingUserWithGivenEmail = await userRepository.selectUser({ email });
  
    if (existingUserWithGivenEmail) {
        return 'already exists';
    }
  
    const hashedPassword = bcrypt.hashSync(password, 12);
  
    await userRepository.createUser({ name, email, password: hashedPassword });

    return true;
}

async function createUserSession ({ email, password }) {

      const user = await userRepository.selectUser({ email });
  
      if (!user || !bcrypt.compareSync(password, user.password)) {
        return null;
      }
  
      const token = jwt.sign({
        id: user.id
      }, process.env.JWT_SECRET);

      return token;
}

export {
    createUser,
    createUserSession,
}