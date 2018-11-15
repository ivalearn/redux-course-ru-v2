import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getPhotos } from '../actions/PageActions'
import './Page.css'

export class Page extends React.Component {
  onYearButton = event => {
    this.props.setYear(+event.target.textContent)
  }
  render() {
    console.log('**RENDER PAGE**')
    const { photos, year, isFetching } = this.props
    return (
      <div className="ib page">
        <p>
          {[2014, 2015, 2016, 2017, 2018].map(year => (
            <button key={year} className="btn" onClick={this.onYearButton}>
              {year}
            </button>
          ))}
        </p>
        <h3 className="h3">
          {year} год{' '}
          {isFetching && <span className="spinner">(загружаю...)</span>}
        </h3>
        <p>У тебя {photos.length} фото</p>
      </div>
    )
  }
}

Page.propTypes = {
  photos: PropTypes.array.isRequired,
  year: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
  setYear: PropTypes.func.isRequired,
}

const mapStateToProps = store => ({
  photos: store.page.photos,
  year: store.page.year,
  isFetching: store.page.isFetching,
})

const mapDispatchToProps = dispatch => ({
  setYear: year => dispatch(getPhotos(year)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
