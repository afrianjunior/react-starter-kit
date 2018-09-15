import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getPlanets } from '../../actions/planetsActions'

class Home extends Component {
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
        {this.handleRenderPlanets()}
      </div>
    )
  }
}

const mapStateToProps = ({ planetsReducer }) => ({
  planet: planetsReducer.planet,
  status: planetsReducer.status,
  error: planetsReducer.error
})

const mapDispatchToProps = { getPlanets }

Home.propTypes = {
  planet: PropTypes.object,
  status: PropTypes.string,
  error: PropTypes.string,
  getPlanets: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
