import React, { Component } from 'react'
import classNames from 'class-names'
import PropTypes from 'prop-types'
import Scrollspy from 'react-scrollspy'
import { Icon } from '@mdi/react'
import { mdiMenu } from '@mdi/js'
class Navbar extends Component {
  componentDidMount() {
    window.M.Sidenav.init(this._sidenav, {})
  }

  render() {
    const {
      children,
      logo,
      centerLogo,
      alignLinks,
      className,
      extendedWith,
      fixed,
      style,
    } = this.props

    const navCSS = classNames({
      'nav-extended': extendedWith,
    })

    const navWrapperCSS = classNames('nav-wrapper', className)

    const logoCSS = classNames('brand-logo', 'show-on-medium-and-down', 'hide-on-med-and-up', {
      center: centerLogo,
    })

    const navMobileCSS = classNames('hide-on-med-and-down', [alignLinks])

    const links = children.map((link, index) => <li key={index}>{link}</li>)

    let navbar = (
      <nav className={navCSS} style={style}>
        <div className={navWrapperCSS}>
          {logo && (
            <a href="#!" className={logoCSS}>
              {logo}
            </a>
          )}
          <a
            href="#!"
            data-target="mobile-nav"
            className="sidenav-trigger show-on-medium-and-down hide-on-med-and-up"
            style={{ top: '15%' }}>
            <Icon path={mdiMenu} size="2.5rem" color="white" />
          </a>
          <ul className={navMobileCSS}>
            <Scrollspy
              items={['azienda', 'destinatari', 'in-evidenza', 'contatti']}
              currentClassName="active"
              offset={-64}>
              {links}
            </Scrollspy>
          </ul>
        </div>
        {extendedWith && (
          <div className="nav-content">
            {extendedWith.map((elem, index) => (
              <div key={index}>{elem}</div>
            ))}
          </div>
        )}
      </nav>
    )

    if (fixed) {
      navbar = <div className="navbar-fixed">{navbar}</div>
    }

    return (
      <React.Fragment>
        {navbar}

        <ul
          id="mobile-nav"
          className="sidenav"
          ref={ul => {
            this._sidenav = ul
          }}>
          <Scrollspy
            items={['azienda', 'destinatari', 'in-evidenza', 'contatti']}
            currentClassName="active">
            {links}
          </Scrollspy>
        </ul>
      </React.Fragment>
    )
  }
}

Navbar.propTypes = {
  logo: PropTypes.string,
  alignLinks: PropTypes.oneOf(['left', 'right']),
  centerLogo: PropTypes.bool,
  fixed: PropTypes.bool,
  children: PropTypes.node.isRequired,
  extendedWith: PropTypes.arrayOf(PropTypes.node),
  className: PropTypes.string,
  style: PropTypes.object,
}

Navbar.defaultProps = {
  alignLinks: 'right',
}

export default Navbar
