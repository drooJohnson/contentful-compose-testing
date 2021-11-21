const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const productPage = path.resolve('./src/templates/page.js');

  const result = await graphql(`
    {
      allContentfulComposePage {
        nodes {
          title
          slug
        }
      }
    }
  `)

  const pages = result.data.allContentfulComposePage.nodes



  // Define a template for blog post
  // const blogPost = path.resolve('./src/templates/blog-post.js')

  // const result = await graphql(
  //   `
  //     {
  //       allContentfulBlogPost {
  //         nodes {
  //           title
  //           slug
  //         }
  //       }
  //     }
  //   `
  // )

  // if (result.errors) {
  //   reporter.panicOnBuild(
  //     `There was an error loading your Contentful posts`,
  //     result.errors
  //   )
  //   return
  // }

  // const posts = result.data.allContentfulBlogPost.nodes

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (pages.length > 0) {
    pages.forEach((post, index) => {
      //const previouspageslug = index === 0 ? null : pages[index - 1].slug
      //const nextpageslug =
        index === pages.length - 1 ? null : pages[index + 1].slug

      createPage({
        path: `/${post.slug}/`,
        component: productPage,
        context: {
          slug: post.slug,
//          previouspageslug,
//          nextPostSlug,
        },
      })
    })
  }
}
