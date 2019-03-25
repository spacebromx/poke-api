import React from 'react'
import { connect } from 'react-redux'
import { fetchAllPokemons } from '../actions'
import { Link } from 'react-router-dom'
import { getIdFromURL } from '../utils'

class SearchResults extends React.Component {
  componentDidMount () {
    this.props.fetchAllPokemons()
  }

  render () {
    return (
      <div>
        {this.props.data.searchResults.length &&
         this.props.data.searchResults.map(item => {
           return <div className={item.name} key={item.name}>
                    {item.name}
                    <p>
                      <Link to={`/detail/${getIdFromURL(item.url)}`}> See more
                      </Link>
                    </p>
                  </div>
         })}
      </div>
    )
  }
}

const mapStateToProps = ({ searchResults }) => ({
  data: searchResults
})

const mapDispatchToProps = dispatch => ({
  fetchAllPokemons: () => dispatch(fetchAllPokemons())
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
