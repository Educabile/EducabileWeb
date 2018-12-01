import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, object } from '@storybook/addon-knobs'

import Base from './Base'
import { Button } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiArrowRight, mdiBookOpenPageVariant } from '@mdi/js'
import { checkA11y } from '@storybook/addon-a11y'
import { withViewport } from '@storybook/addon-viewport'

const icon = <Icon path={mdiBookOpenPageVariant} size={2.5} color="var(--blue)" />
const button = (
  <Button
    className="hoverable move-icon-forward blueGradient"
    large
    style={{
      display: 'inline-flex',
      alignItems: 'center',
    }}>
    Lorem ipsum sit
    <Icon path={mdiArrowRight} size="1.3rem" />
  </Button>
)

storiesOf('Base container', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withViewport())
  .add('default', () => {
    return (
      <Base
        title={object('title', 'This is just a test')}
        content={object(
          'content',
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ducimus inventore earum explicabo numquam repellat exercitationem amet in, minus delectus.'
        )}
      />
    )
  })
  .add('showing the title on large screen', () => (
    <Base
      title={object('title', 'This is just a test')}
      showTitleOnLarge={object('showTitleOnLarge', true)}
      content={object(
        'content',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ducimus inventore earum explicabo numquam repellat exercitationem amet in, minus delectus.'
      )}
    />
  ))
  .add('with an icon', () => (
    <Base
      title={object('title', 'This is just a test')}
      content={object(
        'content',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ducimus inventore earum explicabo numquam repellat exercitationem amet in, minus delectus.'
      )}
      icon={<Icon path={mdiBookOpenPageVariant} size={2.5} color="var(--blue)" />}
    />
  ))
  .add('with an icon and a title showing on large screen', () => (
    <Base
      title="This is just a test"
      showTitleOnLarge
      content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ducimus inventore earum explicabo numquam repellat exercitationem amet in, minus delectus."
      icon={<Icon path={mdiBookOpenPageVariant} size={2.5} color="var(--blue)" />}
    />
  ))
  .add('with a button', () => (
    <Base
      title="This is just a test"
      content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ducimus inventore earum explicabo numquam repellat exercitationem amet in, minus delectus."
      button={button}
    />
  ))
  .add('with an icon, a title showing on large screen and a button', () => (
    <Base
      title="This is just a test"
      showTitleOnLarge
      content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ducimus inventore earum explicabo numquam repellat exercitationem amet in, minus delectus."
      icon={icon}
      button={button}
    />
  ))
