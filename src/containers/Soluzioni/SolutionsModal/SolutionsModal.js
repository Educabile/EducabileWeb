import React from 'react'
import PropTypes from 'prop-types'
import { Container, Modal } from 'react-materialize'
import cx from 'class-names'
import Picture from '@cloudpower97/react-progressive-picture'
import Styles from './Soluzioni.module.css'
import { logoTestoPng } from 'assets/img'

const SolutionsModal = ({ id, header, children }) => {
  return (
    <Modal id={id} header={header} className={cx(Styles.Modal, 'rounded')}>
      <Container>
        <Picture className={Styles.Watermark} src={logoTestoPng} />

        {children}
      </Container>
    </Modal>
  )
}

SolutionsModal.propTypes = {
  id: PropTypes.string,
  header: PropTypes.string,
  children: PropTypes.node,
}

export default SolutionsModal
