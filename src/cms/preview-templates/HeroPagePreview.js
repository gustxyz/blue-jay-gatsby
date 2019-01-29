import React from 'react'
import PropTypes from 'prop-types'
import { HeroPageTemplate } from '../../templates/hero-page'

const HeroPagePreview = ({ entry, getAsset }) => {

  return (
    <HeroPageTemplate
      image={entry.getIn(['data', 'image'])}
      body={entry.getIn(['data', 'body'])}
    />
  )
}

HeroPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HeroPagePreview
