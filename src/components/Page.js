import React from 'react'
import PropTypes from 'prop-types'
import './Page.css'

export class Page extends React.Component {
  onYearButton = event => {
    this.props.setYear(+event.target.textContent)
  }
  render() {
    const { photos, year } = this.props
    return (
      <div className="ib page">
        <p>
          {[2014, 2015, 2016, 2017, 2018].map(year => (
            <button key={year} className="btn" onClick={this.onYearButton}>
              {year}
            </button>
          ))}
        </p>
        <h3 className="h3">{year} год</h3>
        <p>У тебя {photos.length} фото</p>
      </div>
    )
  }
}

Page.propTypes = {
  photos: PropTypes.array.isRequired,
  year: PropTypes.number.isRequired,
  setYear: PropTypes.func.isRequired,
}
