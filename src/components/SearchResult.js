import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getIdFromURL, capitalize } from "../utils";

const SearchResult = ({ item: { name, url } }) => (
  <Link
    key={name}
    to={`/detail/${getIdFromURL(url)}`}
    className="list-group-item list-group-item-action"
  >
    {capitalize(name)}
  </Link>
);

SearchResult.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.shape.isRequired
  }).isRequired
};

export default SearchResult;
