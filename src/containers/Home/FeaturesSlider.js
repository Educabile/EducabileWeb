import React from 'react'
import Slider from '../../components/Slider/Slider'
import Slide from '../../components/Slide/Slide'
import Caption from '../../components/Capiton/Caption'
import { Button } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiArrowRight } from '@mdi/js'
import PropTypes from 'prop-types'
import {
  slide0Jpg as FirstSlide,
  ctaJpg as SecondSlide,
  consulezaDtJpg as ThirdSlide,
  piattaformeAmbientiJpg as FourthSlide,
} from '../../assets/img'

const FeaturesSlider = ({ options }) => {
  return (
    <Slider className="white" options={options}>
      <Slide image={FirstSlide}>
        <Caption align="left">
          <h3>Piattaforme Innovative</h3>
          <h5 className="light grey-text text-lighten-3">
            Sviluppo di piattaforme e infrastrutture in ambienti di Data Science
          </h5>
          <Button className="green hoverable" large>
            Leggi di pi&uacute; <Icon path={mdiArrowRight} size={1} />
          </Button>
        </Caption>
      </Slide>
      <Slide image={SecondSlide}>
        <Caption align="left">
          <h3>Formazione</h3>
          <h5 className="light grey-text text-lighten-3">
            Corsi di tipo laboratoriale con l&apos;ausilio di specifiche figure terze (mentori)
          </h5>
          <Button className="orange" large>
            Leggi di pi&acute;
            <Icon path={mdiArrowRight} size={1} />
          </Button>
        </Caption>
      </Slide>
      <Slide image={ThirdSlide}>
        <Caption align="left">
          <h3>Servizi di Consulenza Strategica</h3>
          <h5 className="light grey-text text-lighten-3">
            Progetti di ricerca e di consulenza tecnico scientifica
          </h5>
          <Button className="green" large>
            Leggi di pi&acute;
            <Icon path={mdiArrowRight} size={1} />
          </Button>
        </Caption>
      </Slide>
      <Slide image={FourthSlide}>
        <Caption align="left">
          <h3>Piattaforme ed ambienti per la didattica</h3>
          <h5 className="light grey-text text-lighten-3">
            sperimentare dotazioni d&apos;aula alternative privilegiandone la semplicit&aacute;
            d&apos;utilizzo
          </h5>
          <Button className="orange" large>
            Leggi di pi&uacute;
            <Icon path={mdiArrowRight} size={1} />
          </Button>
        </Caption>
      </Slide>
    </Slider>
  )
}

FeaturesSlider.propTypes = {
  options: PropTypes.object,
}

FeaturesSlider.defaultProps = {
  options: {
    height: 380,
  },
}

export default FeaturesSlider
