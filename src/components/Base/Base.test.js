/**
 * @jest-environment jsdom
 */
import React from 'react'
import { shallow } from 'enzyme'

import Base from './Base'

it('renders without crashing', () => {
  shallow(<Base />)
})
