import WPAPI from 'wpapi'
const { REACT_APP_WORDPRESS_URL } = process.env

const wp = new WPAPI({ endpoint: REACT_APP_WORDPRESS_URL })

wp.setHeaders('Accept', 'application/json')

wp.soluzioni = wp.registerRoute('wp/v2', '/soluzioni/(?P<id>)')
wp.servizi = wp.registerRoute('wp/v2', '/servizi/(?P<id>)')
wp.menus = wp.registerRoute('menus/v1', '/menus/(?P<id>)')
wp.contactEmail = wp.registerRoute('email/v1', '/contacts')

export default wp
