import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getPlanets } from '../actions/planetActions'
class App extends React.Component {
  componentDidMount () {
    const { getPlanets } = this.props
    getPlanets()
  }
  handleRenderPlanets () {
    const { planet, status } = this.props
    switch (status) {
      case 'fetching':
        return (
          <span>Fethcing planets...</span>
        )
      case 'fetched':
        return (
          <ul>
            {planet.items.map((planet, key) => (
              <li key={key}>{planet.name}</li>
            ))}
          </ul>
        )
      case 'error':
        return (
          <span>Something wrong...</span>
        )
      default:
        return ('')
    }
  }
  render () {
    return (
      <div>
        <h1>The Planets of stars wars</h1>
        {this.handleRenderPlanets()}
      </div>
    )
  }
}

const mapStateToProps = ({ planetReducer }) => ({
  planet: planetReducer.planet,
  status: planetReducer.status,
  error: planetReducer.error
})

const mapDispatchToProps = { getPlanets }

App.propTypes = {
  planet: PropTypes.object,
  status: PropTypes.string,
  error: PropTypes.string,
  getPlanets: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
