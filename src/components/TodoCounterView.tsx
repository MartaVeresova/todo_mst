import React, {FC} from 'react';
import {observer} from 'mobx-react-lite';

type PropsType = {
    store: any
}

export const TodoCounterView: FC<PropsType> = observer(({store}) => {
    console.log('TodoCounterView')


    return (
        <div>
            {store.pendingCount} pending, {store.completedCount} completedCount
        </div>
    )
})