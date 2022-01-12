import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './components/App';
import {RootInstance, RootModel} from './store';

export const randomId = () => Math.floor(Math.random() * 1000).toString(36);

const store = RootModel.create({
    users: {},
    todos: {
        '1': {
            id: randomId(),
            name: 'Eat a cake',
            done: true
        }
    }
})

export const StoreContext = createContext<RootInstance>(store as RootInstance)

ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root'));
