const glob = require('glob')
const sharp = require('sharp')
const { getFilePath, getFileName, getFileExtension, getImageSizesFromConfig } = require('../utils')

glob(process.argv[2] || 'src/assets/img/**/*.{jpg,jpeg,png}', {}, (err, img) => {
  img.forEach(img => {
    const resize = size =>
      sharp(img)
        .resize(size[0], size[1])
        .toFile(
          `${getFilePath(img)}/${getFileName(img)}-${size[0]}-${size[1]}.${getFileExtension(img)}`
        )

    return Promise.all(getImageSizesFromConfig().map(resize))
  })
})
