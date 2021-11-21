import React from 'react';
import styled from 'styled-components';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Link, graphql } from 'gatsby'

const ColorBlockElement = styled.div`
    background-color: ${props => props.color};
    grid-column: span ${props => props.width || 1};
    min-height: ${props => `${props.heightInPixels}px` || 'auto'};
    padding: 1rem;
`

const ColorBlock = ({ data }) => {
    return (
        <ColorBlockElement {...data}/>
    )
}

export default ColorBlock;

export const query = graphql`
    fragment ColorBlockData on ContentfulColorBlock {
        __typename
        identifier
        color
        width
        heightInPixels
    }
`;