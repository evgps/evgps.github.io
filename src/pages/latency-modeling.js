import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Project from '../templates/Project';
import Browser from '../components/Browser';
import Content from '../components/Content';

import mastImage from '../images/projects/latency-modeling/mast.png';
// import mastVideo from '../images/projects/latency-modeling/mast.mp4';

function LatencyPage({ data, path }) {
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
    title="Latency Modeling"
    image={mastImage}
      // video={mastVideo}
      pathname={path}
    >
      <Content header="Uncompleted">
        <p>
          Predict how fast neural network will be on target mobile cell (eq. Kirin 970)
        </p>
        <p>
          Currently NasBench-101 transfer to Keras done: <a href="https://github.com/evgps/nasbench_keras" target="_blank" rel="noopener noreferrer">Code</a>
       
        </p>
      </Content>

    </Project>
  );
}

LatencyPage.propTypes = {
  data: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
};

export default LatencyPage;

export const projectQuery = graphql`
  query LatencyQuery {
    allFile(filter: {
        extension: { regex: "/(jpg)/" }
        relativeDirectory: {eq: "projects/latency-modeling"}
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
