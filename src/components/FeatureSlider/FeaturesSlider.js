import React from 'react'
import { Slider, Slide, Caption } from 'react-materialize'
import PropTypes from 'prop-types'
import {
  slide0Jpg,
  slide0WebP,
  slide0Svg,
  ctaJpg,
  ctaWebP,
  ctaSvg,
  consulezaDtJpg,
  consulenzaDtWebP,
  consulenzaDtSvg,
  piattaformeAmbientiJpg,
  piattaformeAmbientiWebP,
  piattaformeAmbientiSvg,
} from 'assets/img'
import { withNamespaces } from 'react-i18next'
import Style from './FeaturesSlider.module.css'
import Picture from '@cloudpower97/react-progressive-picture'
import cx from 'class-names'

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
    placeholder={slide0Svg}
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
    placeholder={ctaSvg}
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
    placeholder={consulenzaDtSvg}
  />
)

const FourthSlide = (
  <Picture
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
    placeholder={piattaformeAmbientiSvg}
  />
)

// TODO: Check if we are going to fetch slides from a BE; In such case we need a way to translate them server side
const FeaturesSlider = ({ className, options, t }) => (
  <Slider className={cx(className, 'feature-slider')} options={options}>
    <Slide image={FirstSlide}>
      <Caption placement="left" className={Style.Caption}>
        <h4>Piattaforme Innovative</h4>
        <h5 className="light grey-text text-lighten-3">
          Sviluppo di piattaforme e infrastrutture in ambienti di Data Science
        </h5>
        {/* <Button className="greenGradient hoverable move-icon-forward" large>
          {t('common:leggiDiPiu')}
          <Icon path={mdiArrowRight} size={1} />
        </Button> */}
      </Caption>
    </Slide>
    <Slide image={SecondSlide}>
      <Caption placement="left" className={Style.Caption}>
        <h4>Formazione</h4>
        <h5 className="light grey-text text-lighten-3">
          Corsi di tipo laboratoriale con l&apos;ausilio di specifiche figure terze (mentori)
        </h5>
        {/* <Button className="orangeGradient hoverable move-icon-forward" large>
          {t('common:leggiDiPiu')}
          <Icon path={mdiArrowRight} size={1} />
        </Button> */}
      </Caption>
    </Slide>
    <Slide image={ThirdSlide}>
      <Caption placement="left" className={Style.Caption}>
        <h4>Servizi di Consulenza Strategica</h4>
        <h5 className="light grey-text text-lighten-3">
          Progetti di ricerca e di consulenza tecnico scientifica
        </h5>
        {/* <Button className="greenGradient hoverable move-icon-forward" large>
          {t('common:leggiDiPiu')}
          <Icon path={mdiArrowRight} size={1} />
        </Button> */}
      </Caption>
    </Slide>
    <Slide image={FourthSlide}>
      <Caption placement="left" className={Style.Caption}>
        <h4>Piattaforme ed ambienti per la didattica</h4>
        <h5 className="light grey-text text-lighten-3">
          sperimentare dotazioni d&apos;aula alternative privilegiandone la semplicit&aacute;
          d&apos;utilizzo
        </h5>
        {/* <Button className="orangeGradient hoverable move-icon-forward" large>
          {t('common:leggiDiPiu')}
          <Icon path={mdiArrowRight} size={1} />
        </Button> */}
      </Caption>
    </Slide>
  </Slider>
)

FeaturesSlider.propTypes = {
  className: PropTypes.string,
  options: PropTypes.object,
  t: PropTypes.func.isRequired,
}

FeaturesSlider.defaultProps = {
  options: {
    height: 370,
  },
}

export default withNamespaces()(FeaturesSlider)
