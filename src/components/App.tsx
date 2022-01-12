import React, {FC} from 'react';
import './App.css';
import {observer} from 'mobx-react-lite';
import {values} from 'mobx';
import {TodoView} from './TodoView';
import {randomId} from '../index';
import {TodoCounterView} from './TodoCounterView';

export type TodoModelType = {
    id: string
    name: string
    done: boolean
    setName: (name: string) => void
    toggle: () => void
}

type PropsType = {
    store: any
    //     {
    //     users: {}
    //     todos: {
    //         id: TodoModelType
    //     }
    //     addTodo: (id: string, name: string) => void
    // }
}


export const App: FC<PropsType> = observer(({store}) => {
    console.log('App')

    const onButtonClick = () => {
        store.addTodo(randomId(), 'New Task')
    }

    return (
        <div>
            <button onClick={onButtonClick}>Add Task</button>
            {values(store.todos).map((todo: TodoModelType) => (
                <TodoView key={todo.id} todo={todo}/>
            ))}
            <TodoCounterView store={store} />
        </div>
    );
})
