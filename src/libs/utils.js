const getFileInfo = path => path.split('/').pop()

const getFilePath = path =>
  path
    .split('/')
    .slice(0, -1)
    .join('/')

const getFileName = path => getFileInfo(path).split('.')[0]

const getFileExtension = path => getFileInfo(path).split('.')[1]

const getImageSizesFromConfig = imageSizes => {
  return imageSizes
    .split(',')
    .map(sizes => sizes.split('x'))
    .map(sizes => [parseInt(sizes[0]), parseInt(sizes[1])])
}

const scrollTo = (element = null, offset = 0, behavior = 'smooth') => {
  if (element) {
    window.scrollTo({
      top: element.getBoundingClientRect().top - document.body.getBoundingClientRect().top - offset,
      behavior: behavior,
    })
  } else {
    window.scrollTo({
      top: document.body.getBoundingClientRect().top - offset,
      behavior: behavior,
    })
  }
}

const setCookie = (name, value, days) => {
  var expires = ''
  if (days) {
    var date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = '; expires=' + date.toUTCString()
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/'
}

const getCookie = name => {
  var nameEQ = name + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

const eraseCookie = name => {
  document.cookie = name + '=; Max-Age=-99999999;'
}

module.exports = {
  getFilePath,
  getFileName,
  getFileExtension,
  getImageSizesFromConfig,
  scrollTo,
  setCookie,
  getCookie,
  eraseCookie,
}
