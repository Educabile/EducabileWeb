import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, object } from '@storybook/addon-knobs'

import ServiceCard from './ServiceCard'
import { mdiPencil } from '@mdi/js'

const CenterDecorator = storyFn => (
  <div className="container center">
    <div className="row">{storyFn()}</div>
  </div>
)

storiesOf('Service Card', module)
  .addDecorator(CenterDecorator)
  .addDecorator(withKnobs)
  .add('default', () => (
    <ServiceCard
      icon={mdiPencil}
      title={object('title', 'Didattica Digitale')}
      content={object(
        'content',
        'Dalla Scuola 2.0 ad un approccio su “strategie didattiche e metodologie” versola fruizione collettiva e individuale del web e di contenuti, per l’interazione di aggregazioni diverse in gruppi di apprendimento'
      )}
      service={object('service', 'DidatticaDigitale')}
    />
  ))
