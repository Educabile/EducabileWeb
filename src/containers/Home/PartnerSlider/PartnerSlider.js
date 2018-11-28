import React from 'react'
import PropTypes from 'prop-types'
import { Divider } from 'react-materialize'
import Carousel from 'components/Carousel/Carousel'
import Style from './PartnerSlider.module.css'
import Picture from 'components/Picture/Picture'
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

const PartnerSlider = ({ title }) => (
  <Base id="partner" title={title} showTitleOnLarge={true}>
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
  title: PropTypes.string.isRequired,
}

export default PartnerSlider