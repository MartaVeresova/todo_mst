import React, {ChangeEvent, FC} from 'react';
import {observer} from 'mobx-react-lite';
import {TodoModelType} from './App';

type PropsType = {
    todo: TodoModelType
}

export const TodoView: FC<PropsType> = observer(({todo}) => {
    console.log('TodoView')

    const onInputCheckboxChange = () => {
        todo.toggle()
    }

    const onInputTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        todo.setName(e.target.value)
    }

    return (
        <div>
            <input type="checkbox" checked={todo.done} onChange={onInputCheckboxChange}/>
            <input type="text" value={todo.name} onChange={onInputTextChange}/>
        </div>
    )
})