import {Instance, types} from 'mobx-state-tree';

export type TodoType = {
    id: string
    name: string
    done: boolean
}

export const TodoModel = types.model(
    'Todo', {
        id: types.identifier,
        name: types.optional(types.string, ''),
        done: types.optional(types.boolean, false),
    }
)
    .actions(self => ({
        setName(name: string): void {
            self.name = name
        },
        toggle(): void {
            self.done = !self.done
        },
    }))

export type Todo = Instance<typeof TodoModel>;