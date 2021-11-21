import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby'

import ColorBlock from '../components/ColorBlock/ColorBlock';
import TextBlock from '../components/TextBlock/TextBlock';

const Layout = styled.div`
    width: 100%;
    height: 100%;
`

const BlockContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 960px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    items-align:stretch;
`

const ProductPage = ({data}) => {
    let {name, blocks} = data;

    return (
        <Layout>
            <h1>{name}</h1>
            <BlockContainer>
                {blocks.map(block => {
                    switch (block.__typename) {
                        case 'ContentfulTextBlock':
                            return <TextBlock data={block}/>
                        case 'ContentfulColorBlock':
                            return <ColorBlock data={block}/>
                        default:
                            return null;
                    }
                })}
            </BlockContainer>
        </Layout>
    )
    
}

export default ProductPage;

export const query = graphql`
    fragment ProductPageData on ContentfulProductPage {
        name
        blocks {
            ... on ContentfulColorBlock {
                ...ColorBlockData
            }
            ... on ContentfulTextBlock {
                ...TextBlockData
            }
        }
    }
`
/*
export const pageQuery = graphql`
  query PageBySlug(
    $slug: String!
  ) {
    contentfulPage(slug: { eq: $slug }) {
      slug
      title
      author {
        name
      }
      publishDate(formatString: "MMMM Do, YYYY")
      rawDate: publishDate
      heroImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
      body {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
      tags
      description {
        childMarkdownRemark {
          excerpt
        }
      }
    }
    previous: contentfulBlogPost(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulBlogPost(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`*/
