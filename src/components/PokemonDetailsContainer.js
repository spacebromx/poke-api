import React from "react";
import { connect } from "react-redux";
import { fetchPokemonDetails } from "../actions";
import PropTypes from "prop-types";
import PokemonDetails from "./PokemonDetails";

class PokemonDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPokemonDetails(this.props.match.params.id);
  }

  render() {
    return (
      <PokemonDetails pokemonDetails={this.props.details.pokemonDetails} />
    );
  }
}

PokemonDetailsContainer.propTypes = {
  fetchPokemonDetails: PropTypes.func.isRequired,
  details: PropTypes.object.isRequired
};

const mapStateToProps = ({ pokemonDetails }) => ({
  details: pokemonDetails
});

const mapDispatchToProps = dispatch => ({
  fetchPokemonDetails: id => dispatch(fetchPokemonDetails(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetailsContainer);
