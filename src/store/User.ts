import {Instance, types} from 'mobx-state-tree';


export const UserModel = types.model(
    'User', {
        name: types.optional(types.string, '')
    }
)

export type User = Instance<typeof UserModel>;