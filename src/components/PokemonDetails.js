import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import get from "lodash.get";
import { fetchPokemonDetails } from "../actions";
import { arrayToList, capitalize } from "../utils";

class PokemonDetails extends React.Component {
  componentDidMount() {
    this.props.fetchPokemonDetails(this.props.match.params.id);
  }

  render() {
    const {
      name,
      weight,
      height,
      abilities,
      sprites,
      moves,
      types
    } = this.props.details.pokemonDetails;
    const image = get(sprites, "front_shiny");
    return (
      <React.Fragment>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <img src={image} />
          <h2 className="display-5">Name: {capitalize(name)}</h2>
          Type(s): {arrayToList(types, "type.name")}
          <br />
          Height: {height}
          <br />
          Weight: {weight}
          <hr />
        </div>
        <div className="content">
          <h4>Abilities</h4>
          <p>{arrayToList(abilities, "ability.name")}</p>
          <h4>Moves</h4>
          <p>{arrayToList(moves, "move.name")}</p>
        </div>
        <div className="text-center">
          <Link className="btn btn-primary" to="/master">
            &larr; Go back
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ pokemonDetails }) => ({
  details: pokemonDetails
});

const mapDispatchToProps = dispatch => ({
  fetchPokemonDetails: id => dispatch(fetchPokemonDetails(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetails);
