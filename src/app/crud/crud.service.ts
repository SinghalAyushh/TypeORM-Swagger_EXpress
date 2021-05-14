import { Todo } from '@entity/crud';

export interface ITodo {
  task: string,
  createdDate: Date,
  priority: 'high' | 'medium' | 'low',
  done: boolean
}

// CREATE SERVICE
export const createTodo = async (todo: ITodo) => {
  try {
    const _newTodo = new Todo();
    _newTodo['task'] = todo['task'];
    _newTodo['createdDate'] = todo['createdDate'];
    _newTodo['priority'] = todo['priority'];
    _newTodo['done'] = todo['done'];
    return await _newTodo.save();
  } catch (e) {
    console.error(e);
  }
}

// READ SERVICE
export const readTodo = async (todoId?: number) => {
  try {
    if (todoId) {   // get specific todo
      return await Todo.findOne({
        where: { id: todoId },
      });
    } else {        // get all todos
      return await Todo.find();
    }
  } catch (e) {
    console.error(e);
  }
}

// UPDATE SERVICE
export const updateTodo = async (todo: { id: number } & ITodo) => {
  try {
    const _foundTodo = await Todo.findOne({ where: { id: todo['id'] } });
    if (!_foundTodo) return { message: "Todo is not found!" };
    if (todo['task']) _foundTodo['task'] = todo['task'];
    if (todo['createdDate']) _foundTodo['createdDate'] = todo['createdDate'];
    if (todo['priority']) _foundTodo['priority'] = todo['priority'];
    if (todo['done']) _foundTodo['done'] = todo['done'];
    return await _foundTodo.save();
  } catch (e) {
    console.error(e);
  }
}

// DELETE SERVICE
export const deleteTodo = async (todoId: number) => {
  try {
    const _foundTodo = await Todo.findOne({ where: { id: todoId } });
    if (!_foundTodo) return { message: "Todo is not found!" };
    return await _foundTodo.remove();
  } catch (e) {
    console.error(e);
  }
}