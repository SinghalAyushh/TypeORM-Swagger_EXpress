import { Body, Controller, Delete, Get, Post, Put, Query, Route, Tags } from 'tsoa';
import {createUser,loginUser}  from './user.service';

@Tags('User Permission')
@Route('/api/user')
export class UserPermissionController extends Controller {

 
  @Post('/create/')
  public async createUser(@Body() body: {username: string,  password : string,  role: string,  }) {
    return createUser({ username: body.username, role: body.role,password:body.password });
  }

  @Post('/login')
  public async loginUser(@Body() body: {username: string,  password : string  }) {
    return  loginUser({ username: body.username,password:body.password });
  }

}
