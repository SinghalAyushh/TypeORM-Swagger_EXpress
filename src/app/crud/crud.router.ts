import { Body, Controller, Delete, Get, Path, Post, Put, Query, Route, Tags } from 'tsoa';
import { ITodo, createTodo, readTodo, updateTodo, deleteTodo } from './crud.service';

@Tags('Todo')
@Route('/api/todo')
export class TodoController extends Controller {

  // CREATE CONTROLLER
  @Post('/create')
  public async createTodo(@Body() todo: ITodo) {
    return createTodo(todo)
  }

  // READ CONTROLLER
  @Get('/read')
  public async readTodo() {
    return readTodo()
  }

  @Get('/read/{todoId}')
  public async readTodoWithId(@Path('todoId') todoId: number) {
    return readTodo(todoId)
  }

  // UPDATE CONTROLLER
  @Put('/update')
  public async updateTodo(@Body() todo: { id: number } & ITodo) {
    return updateTodo(todo)
  }

  // DELETE CONTROLLER
  @Delete('/delete/{todoId}')
  public async deleteTodo(@Path('todoId') todoId: number) {
    return deleteTodo(todoId)
  }

}