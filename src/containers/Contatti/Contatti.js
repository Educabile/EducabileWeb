import React from 'react'
import PropTypes from 'prop-types'
import Base from 'components/Base'
import Contatti from 'components/Contatti'
import { contattiJpg } from 'assets/img'

const ContattiPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url('${contattiJpg}')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: 'calc(100vh - 101px)',
      }}>
      <Base
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}>
        <Contatti />
      </Base>
    </div>
  )
}

ContattiPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default ContattiPage
