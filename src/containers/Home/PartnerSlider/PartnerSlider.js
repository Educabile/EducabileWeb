import React from 'react'
import PropTypes from 'prop-types'
import { Section, Divider } from 'react-materialize'
import Container from '../../../components/Container/Container'
import Carousel from '../../../components/Carousel/Carousel'

const PartnerSlider = ({ children, title }) => (
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
        centerImages>
        {children}
      </Carousel>

      <Divider />
    </Container>
  </Section>
)

PartnerSlider.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

export default PartnerSlider
