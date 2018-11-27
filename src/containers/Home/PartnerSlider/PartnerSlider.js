import React from 'react'
import PropTypes from 'prop-types'
import { Section, Divider } from 'react-materialize'
import Container from '../../../components/Container/Container'
import Carousel from '../../../components/Carousel/Carousel'
import Style from './PartnerSlider.module.css'
import Picture from '../../../components/Picture/Picture'
import {
  banatUniversityPng,
  banatUniversityWebP,
  geofotogrammetricaPng,
  geofotogrammetricaWebP,
  qequipePng,
  qequipeWebP,
  ictConsultingPng,
  ictConsultingWebP,
} from '../../../assets/img/partners-logos'
const PartnerSlider = ({ title }) => (
  <Section id="partner" className="white">
    {title && <h2 className="center">{title} </h2>}

    <Container>
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
        />
      </Carousel>

      <Divider />
    </Container>
  </Section>
)

PartnerSlider.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PartnerSlider
