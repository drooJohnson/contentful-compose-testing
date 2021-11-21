import React from 'react';
import styled from 'styled-components';
import ProductPage from './product-page';
import { Link, graphql } from 'gatsby'

const page = ({data}) => {
    let {contentfulComposePage} = data;
    let {name, content} = contentfulComposePage;
    console.log(contentfulComposePage);

    if (content.__typename === 'ContentfulProductPage') {
        return <ProductPage data={content}/>
    }
}
export default page;

export const pageQuery = graphql`
    query PageBySlug(
        $slug: String!
    ) {
        contentfulComposePage(slug: { eq: $slug }) {
            __typename
            slug
            title
            content {
                ... on ContentfulProductPage {
                    __typename
                    ...ProductPageData
                }
            }
            seo {
                createdAt
                description
                id
                name
                no_follow
                no_index
                title
                updatedAt
            }
        }
    }
`
