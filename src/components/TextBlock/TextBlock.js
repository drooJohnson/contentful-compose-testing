import React from 'react';
import styled from 'styled-components';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { graphql } from 'gatsby'

const TextBlockElement = styled.div`
    grid-column: span ${props => props.width || 1};
    padding: 1rem;
`

const TextBlock = ({ data }) => {
    return (
        <TextBlockElement width={data.width}>
            {renderRichText(data.text)}
        </TextBlockElement>
    )
}

export default TextBlock;

export const query = graphql`
    fragment TextBlockData on ContentfulTextBlock {
        __typename
        identifier
        text {
            raw
        }
        width
    }
`;