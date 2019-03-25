import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "../reducers";
import thunk from "redux-thunk";
import { BrowserRouter, Route } from "react-router-dom";
import SearchResults from "./SearchResults";
import PokemonDetails from "./PokemonDetails";
import Header from "./Header";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <div id="app" className="container">
        <BrowserRouter>
          <Header />
          <React.Fragment>
            <Route path="/master" exact component={SearchResults} />
            <Route path="/detail/:id" component={PokemonDetails} />
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
