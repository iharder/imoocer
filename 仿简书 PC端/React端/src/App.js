import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './common/header';
import Home from './views/home';
import Login from './views/login';
import Writer from './views/writer';
import Detail from './views/detail/loadable';
import store from './store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/login' exact component={Login}></Route>
                        <Route path='/detail/:id' exact component={Detail}></Route>
                        <Route path='/writer' exact component={Writer}></Route>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
