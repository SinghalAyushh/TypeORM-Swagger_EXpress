
import { User } from '@entity/user';
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import { validate } from "class-validator";
import config from "../config/config";
import bcrypt from'bcryptjs'


export const createUser = async ({ username, role,password }: {username: string,  password : string,  role: string,  }) => {
 
  try {
    const _newUser = new User();
    _newUser['username'] = username;
    _newUser['role']= role;
    _newUser['password']=  bcrypt.hashSync(password, 8);;
    // _newUser.roles = newRoles;
    return await _newUser.save()
  } catch (e) {
    console.error(e);
  }
}

export const loginUser = async ({ username, password }: {username: string,  password : string }) => {
  
  try{
    const userRepository = getRepository(User);
    const user = await userRepository.findOneOrFail({where:{username}})
    try{
if(user) {
  if(bcrypt.compareSync(password, user.password)){
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      config.jwtSecret,
      { expiresIn: "1h" }
    );
    return{
      token : token
    }
  }
  
}
    }
    catch(e){
      console.log(e)
    }
  }catch(e){
    console.log(e)
    return e;
  }
}