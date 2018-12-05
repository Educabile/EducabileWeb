import React from 'react'
import PropTypes from 'prop-types'
import { Divider } from 'react-materialize'
import Carousel from 'components/Carousel/Carousel'
import Style from './PartnerSlider.module.css'
import Picture from '@cloudpower97/react-progressive-picture'

import {
  banatUniversityPng,
  banatUniversityWebP,
  geofotogrammetricaPng,
  geofotogrammetricaWebP,
  qequipePng,
  qequipeWebP,
  ictConsultingPng,
  ictConsultingWebP,
} from 'assets/img/partners-logos'

import Base from 'components/Base/Base'

const PartnerSlider = ({ id, className, title, button }) => (
  <Base id={id} className={className} title={title} showTitleOnLarge button={button}>
    <>
      <Divider />
      <Carousel
        options={{
          fullWidth: false,
          noWrap: false,
          padding: 325,
          indicators: true,
        }}
        className={Style.Slider}
        centerImages>
        <Picture
          sources={[
            {
              srcSet: banatUniversityWebP,
              type: 'image/webp',
            },
            {
              srcSet: banatUniversityPng,
              type: 'image/png',
            },
          ]}
          alt="Banat’s University of Agricultural Sciences and Veterinary Medicine “King Michael I of Romania”"
        />
        <Picture
          sources={[
            {
              srcSet: geofotogrammetricaWebP,
              type: 'image/webp',
            },
            {
              srcSet: geofotogrammetricaPng,
              type: 'image/png',
            },
          ]}
          alt="Geofotogrammetrica Srl "
        />
        <Picture
          sources={[
            {
              srcSet: qequipeWebP,
              type: 'image/webp',
            },
            {
              srcSet: qequipePng,
              type: 'image/png',
            },
          ]}
          alt="Q-EQUIPE"
        />
        <Picture
          sources={[
            {
              srcSet: ictConsultingWebP,
              type: 'image/webp',
            },
            {
              srcSet: ictConsultingPng,
              type: 'image/png',
            },
          ]}
          alt="ICT Consulting"
        />
      </Carousel>
      <Divider />
    </>
  </Base>
)

PartnerSlider.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  button: PropTypes.node,
}

PartnerSlider.defaultProps = {
  id: 'partners',
}

export default PartnerSlider
