import pugPlugin from '@11ty/eleventy-plugin-pug'
import { minify as minifyHtml } from 'html-minifier'
import { minify as minifyJs } from 'uglify-js'
import postcss from 'postcss'
import postcssImport from 'postcss-import'
import cssnano from 'cssnano'
import path from 'path'

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(pugPlugin)

  // Add PostCSS transform for CSS files
  eleventyConfig.addTransform('postcss', async (content, outputPath) => {
    if (outputPath.endsWith('.css')) {
      console.log('transforming CSS', outputPath)
      try {
        const result = await postcss([
          postcssImport({
            root: path.join(process.cwd(), 'css'),
            path: ['css'],
          }),
          cssnano({
            preset: [
              'default',
              {
                discardComments: {
                  removeAll: true,
                },
              },
            ],
          }),
        ]).process(content, {
          from: path.join(process.cwd(), 'css/styles.css'),
        })
        return result.css
      } catch (error) {
        console.error('PostCSS Error:', error)
        return content
      }
    }
    return content
  })

  // minify the html output
  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      console.log('transforming HTML', outputPath)
      let minified = minifyHtml(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      })
      return minified
    }
    return content
  })

  // compress and combine js files
  eleventyConfig.addTransform('jsmin', (content, outputPath) => {
    if (outputPath.endsWith('.js')) {
      console.log('transforming JS', outputPath)
      let minified = minifyJs(content)
      if (minified.error) {
        console.log('UglifyJS error: ', minified.error)
        return content
      }
      return minified.code
    }
    return content
  })

  eleventyConfig.addPassthroughCopy('img')
  eleventyConfig.addPassthroughCopy({ static: '/' })

  return {
    dir: {
      input: 'pages',
      output: 'dist',
    },
  }
}
