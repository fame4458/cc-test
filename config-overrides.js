const { useBabelRc, override, addPostcssPlugins } = require('customize-cra')
const { addReactRefresh } = require('customize-cra-react-refresh')

const postcssPlugins = [require('autoprefixer')]

if (process.env.NODE_ENV === 'production') {
  postcssPlugins.push(
    require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.jsx'],
      css: ['./src/style/App.css'],
      whitelist: ['body'],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    })
  )
}

// eslint-disable-next-line react-hooks/rules-of-hooks
module.exports = override(addPostcssPlugins(postcssPlugins), addReactRefresh(), useBabelRc())
