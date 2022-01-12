import {Instance, types} from 'mobx-state-tree'
import {UserModel} from './User';
import {TodoModel} from './Todo';
import {values} from 'mobx';


export const RootModel = types.model('RootModel', {
    users: types.map(UserModel),
    todos: types.map(TodoModel),
})
    .views(self => ({
        get pendingCount(): number {
          return values(self.todos).filter((todo: any) => !todo.done).length
        },
        get completedCount(): number {
            return values(self.todos).filter((todo: any) => todo.done).length
        },
        getTodosWhereDoneIs(done: boolean) {
            return values(self.todos).filter((todo: any) => todo.done === done)
        },
    }))
    .actions(self => ({
        addTodo(id: string, name: string): void {
            self.todos.set(id, TodoModel.create({id, name}))
        }
    }))

export type RootInstance = Instance<typeof RootModel>;