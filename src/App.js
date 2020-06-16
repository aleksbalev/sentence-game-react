import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import InitialView from "./components/InitialView";

import reducers from "./reducers/index";

import "./App.css";

const store = createStore(reducers);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <InitialView />
            </Provider>
        );
    }
}

export default App;
