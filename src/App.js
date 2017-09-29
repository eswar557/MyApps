import React, { Component } from 'react';
import { Provider } from "react-redux";
import './App.css';
import Layout from './Layout';
import store from './store';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
    
    render() {
        return (
            <Provider store={store}>
                    <Layout />
            </Provider>
        );
    }
}

export default App;
