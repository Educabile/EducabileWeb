import React from 'react'
import Slider from '../../components/Slider/Slider'
import Slide from '../../components/Slide/Slide'
import Caption from '../../components/Capiton/Caption'
import { Button } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiArrowRight } from '@mdi/js'

const FeaturesSlider = ({ options }) => {
  return (
    <Slider className="white" options={{ height: 380 }}>
      <Slide image="http://www.educabile.it/img/slide0-1920.jpg">
        <Caption align="left">
          <h3>Piattaforme Innovative</h3>
          <h5 className="light grey-text text-lighten-3">
            Sviluppo di piattaforme e infrastrutture in ambienti di Data Science
          </h5>
          <Button className="green hoverable" large>
            Leggi di piu' <Icon path={mdiArrowRight} size={1} />
          </Button>
        </Caption>
      </Slide>
      <Slide image="http://www.educabile.it/img/cta-1920.jpeg">
        <Caption align="left">
          <h3>Formazione</h3>
          <h5 className="light grey-text text-lighten-3">
            Corsi di tipo laboratoriale con l'ausilio di specifiche figure terze (mentori)
          </h5>
          <Button className="orange" large>
            Leggi di piu'
            <Icon path={mdiArrowRight} size={1} />
          </Button>
        </Caption>
      </Slide>
      <Slide image="http://www.educabile.it/img/consulenza-dt-1920.jpeg">
        <Caption align="left">
          <h3>Servizi di Consulenza Strategica</h3>
          <h5 className="light grey-text text-lighten-3">
            Progetti di ricerca e di consulenza tecnico scientifica
          </h5>
          <Button className="green" large>
            Leggi di piu'
            <Icon path={mdiArrowRight} size={1} />
          </Button>
        </Caption>
      </Slide>
      <Slide image="http://www.educabile.it/img/piattaforme-ambienti-1920.jpeg">
        <Caption align="left">
          <h3>Piattaforme ed ambienti per la didattica</h3>
          <h5 className="light grey-text text-lighten-3">
            sperimentare dotazioni d'aula alternative privilegiandone la semplicita' d'utilizzo
          </h5>
          <Button className="orange" large>
            Leggi di piu'
            <Icon path={mdiArrowRight} size={1} />
          </Button>
        </Caption>
      </Slide>
    </Slider>
  )
}

export default FeaturesSlider
