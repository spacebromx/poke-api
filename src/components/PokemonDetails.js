import React from "react";
import { Link } from "react-router-dom";
import get from "lodash.get";
import { arrayToList, capitalize } from "../utils";
import PropTypes from "prop-types";

const PokemonDetails = ({
  pokemonDetails: { name, weight, height, abilities, sprites, moves, types }
}) => (
  <React.Fragment>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <img src={get(sprites, "front_shiny")} />
      <h2 className="display-5">Name: {capitalize(name)}</h2> Type(s):
      {arrayToList(types, "type.name")}
      <br /> Height: {height}
      <br /> Weight: {weight}
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
        {" "}
        ← Go back
      </Link>
    </div>
  </React.Fragment>
);

PokemonDetails.propTypes = {
  pokemonDetails: PropTypes.any.isRequired
};

export default PokemonDetails;
