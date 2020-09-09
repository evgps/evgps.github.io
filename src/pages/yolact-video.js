import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Project from '../templates/Project';
import Browser from '../components/Browser';
import Content from '../components/Content';

import mastImage from '../images/projects/yolact-video/mast.png';
import mastVideo from '../images/projects/yolact-video/mast.mp4';

function YolactPage({ data, path }) {
  let blog, home, shop, shopSingleOne, shopSingleTwo;

  data.allFile.edges.forEach(image => {
    const node = image.node;

    // eslint-disable-next-line default-case
    switch (node.name) {
      case 'blog':
        blog = node.childImageSharp.fluid;
        break;
      case 'home':
        home = node.childImageSharp.fluid;
        break;
      case 'shop':
        shop = node.childImageSharp.fluid;
        break;
      case 'shop-single-1':
        shopSingleOne = node.childImageSharp.fluid;
        break;
      case 'shop-single-2':
        shopSingleTwo = node.childImageSharp.fluid;
        break;
    }
  });

  return (
    <Project
    title="YOLACT Video"
    image={mastImage}
      video={mastVideo}
      pathname={path}
    >
      <Content header="Detect bounding boxes and masks in videostream">
        <p>
          Current project
        </p>
      </Content>

    </Project>
  );
}

YolactPage.propTypes = {
  data: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
};

export default YolactPage;

export const projectQuery = graphql`
  query YolactQuery {
    allFile(filter: {
        extension: { regex: "/(jpg)/" }
        relativeDirectory: {eq: "projects/yolact-video"}
    }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
