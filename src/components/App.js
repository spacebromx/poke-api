import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "../reducers";
import thunk from "redux-thunk";
import { BrowserRouter, Route } from "react-router-dom";
import SearchResultsContainer from "./SearchResultsContainer";
import PokemonDetailsContainer from "./PokemonDetailsContainer";
import Header from "./Header";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <div id="app" className="container">
        <BrowserRouter>
          <Header />
          <React.Fragment>
            <Route path="/master" exact component={SearchResultsContainer} />
            <Route path="/detail/:id" component={PokemonDetailsContainer} />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
