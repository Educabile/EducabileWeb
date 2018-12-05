import React from 'react'
import Slide from 'components/Slide/Slide'
import Caption from 'components/Capiton/Caption'
import { Button, Slider } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiArrowRight } from '@mdi/js'
import PropTypes from 'prop-types'
import {
  slide0Jpg,
  slide0WebP,
  ctaJpg,
  ctaWebP,
  consulezaDtJpg,
  consulenzaDtWebP,
  piattaformeAmbientiJpg,
  piattaformeAmbientiWebP,
} from 'assets/img'
import { withNamespaces } from 'react-i18next'
import Style from './FeaturesSlider.module.css'
import Picture from '@cloudpower97/react-progressive-picture'

const FirstSlide = (
  <Picture
    sources={[
      {
        srcSet: slide0WebP,
        type: 'image/webp',
      },
      {
        srcSet: slide0Jpg,
        type: 'image/jpg',
      },
    ]}
    alt=""
  />
)

const SecondSlide = (
  <Picture
    sources={[
      {
        srcSet: ctaWebP,
        type: 'image/webp',
      },
      {
        srcSet: ctaJpg,
        type: 'image/jpg',
      },
    ]}
    alt=""
  />
)

const ThirdSlide = (
  <Picture
    sources={[
      {
        srcSet: consulenzaDtWebP,
        type: 'image/webp',
      },
      {
        srcSet: consulezaDtJpg,
        type: 'image/jpg',
      },
    ]}
    alt=""
  />
)

const FourthSlide = (
  <Picture
    className="ciaone"
    style={{ color: 'red' }}
    sources={[
      {
        srcSet: piattaformeAmbientiWebP,
        type: 'image/webp',
      },
      {
        srcSet: piattaformeAmbientiJpg,
        type: 'image/jpg',
      },
    ]}
    alt=""
  />
)

// TODO: Check if we are going to fetch slides from a BE; In such case we need a way to translate them server side
const FeaturesSlider = ({ options, t }) => (
  <Slider className="white" options={options}>
    <Slide image={FirstSlide}>
      <Caption placement="left" className={Style.Caption}>
        <h4>Piattaforme Innovative</h4>
        <h5 className="light grey-text text-lighten-3">
          Sviluppo di piattaforme e infrastrutture in ambienti di Data Science
        </h5>
        <Button className="greenGradient hoverable move-icon-forward" large>
          {t('common:leggiDiPiu')}
          <Icon path={mdiArrowRight} size={1} />
        </Button>
      </Caption>
    </Slide>
    <Slide image={SecondSlide}>
      <Caption placement="left" className={Style.Caption}>
        <h4>Formazione</h4>
        <h5 className="light grey-text text-lighten-3">
          Corsi di tipo laboratoriale con l&apos;ausilio di specifiche figure terze (mentori)
        </h5>
        <Button className="orangeGradient hoverable move-icon-forward" large>
          {t('common:leggiDiPiu')}
          <Icon path={mdiArrowRight} size={1} />
        </Button>
      </Caption>
    </Slide>
    <Slide image={ThirdSlide}>
      <Caption placement="left" className={Style.Caption}>
        <h4>Servizi di Consulenza Strategica</h4>
        <h5 className="light grey-text text-lighten-3">
          Progetti di ricerca e di consulenza tecnico scientifica
        </h5>
        <Button className="greenGradient hoverable move-icon-forward" large>
          {t('common:leggiDiPiu')}
          <Icon path={mdiArrowRight} size={1} />
        </Button>
      </Caption>
    </Slide>
    <Slide image={FourthSlide}>
      <Caption placement="left" className={Style.Caption}>
        <h4>Piattaforme ed ambienti per la didattica</h4>
        <h5 className="light grey-text text-lighten-3">
          sperimentare dotazioni d&apos;aula alternative privilegiandone la semplicit&aacute;
          d&apos;utilizzo
        </h5>
        <Button className="orangeGradient hoverable move-icon-forward" large>
          {t('common:leggiDiPiu')}
          <Icon path={mdiArrowRight} size={1} />
        </Button>
      </Caption>
    </Slide>
  </Slider>
)

FeaturesSlider.propTypes = {
  options: PropTypes.object,
  t: PropTypes.func.isRequired,
}

FeaturesSlider.defaultProps = {
  options: {
    height: 380,
  },
}

export default withNamespaces()(FeaturesSlider)
