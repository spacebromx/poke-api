import React from "react";
import { connect } from "react-redux";
import { fetchAllPokemons, resetSearchResults } from "../actions";
import { Link } from "react-router-dom";
import { getIdFromURL, capitalize } from "../utils";

class SearchResults extends React.Component {
  componentDidMount() {
    this.props.fetchAllPokemons();
  }

  componentWillUnmount() {
    this.props.resetSearchResults();
  }

  render() {
    return (
      <React.Fragment>
        <p>Click on any Pokemon name to see its details</p>
        <div className="list-group">
          {this.props.data.searchResults.length &&
            this.props.data.searchResults.map(item => {
              return (
                <Link
                  key={item.name}
                  to={`/detail/${getIdFromURL(item.url)}`}
                  className="list-group-item list-group-item-action"
                >
                  {capitalize(item.name)}
                </Link>
              );
            })}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ searchResults }) => ({
  data: searchResults
});

const mapDispatchToProps = dispatch => ({
  fetchAllPokemons: () => dispatch(fetchAllPokemons()),
  resetSearchResults: () => dispatch(resetSearchResults())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
