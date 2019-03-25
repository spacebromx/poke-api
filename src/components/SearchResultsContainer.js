import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchAllPokemons, resetSearchResults } from "../modules/searchResults";
import SearchResult from "./SearchResult";

class SearchResultsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchAllPokemons();
  }

  componentWillUnmount() {
    this.props.resetSearchResults();
  }

  render() {
    const { searchResults } = this.props.data;
    return (
      <React.Fragment>
        <p>Click on any Pokemon name to see its details</p>
        <div className="list-group">
          {searchResults.length &&
            searchResults.map(item => {
              return <SearchResult key={item.name} item={item} />;
            })}
        </div>
      </React.Fragment>
    );
  }
}

SearchResultsContainer.propTypes = {
  fetchAllPokemons: PropTypes.func.isRequired,
  resetSearchResults: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

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
)(SearchResultsContainer);
