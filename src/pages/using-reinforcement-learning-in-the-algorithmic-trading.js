import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Project from '../templates/Project';
import Browser from '../components/Browser';
import Content from '../components/Content';

import mastImage from '../images/projects/using-reinforcement-learning-in-the-algorithmic-trading/mast.jpg';
import mastVideo from '../images/projects/using-reinforcement-learning-in-the-algorithmic-trading/mast.mp4';

function RLTradePage({ data, path }) {
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
      title="Using Reinforcement Learning in the Algorithmic Trading"
      image={mastImage}
      video={mastVideo}
      pathname={path}
    >
      <Content header="Trading with recurrent actor-critic reinforcement learning.">
        <p>
              <a href="https://arxiv.org/abs/2002.11523" target="_blank" rel="noopener noreferrer">Paper</a> and <a href="https://github.com/evgps/a3c_trading" target="_blank"
          rel="noopener noreferrer">Code</a>.
          Details will be on that page soon.
        </p>
      </Content>

    </Project>
  );
}

RLTradePage.propTypes = {
  data: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
};

export default RLTradePage;

export const projectQuery = graphql`
  query RLTradeQuery {
    allFile(filter: {
        extension: { regex: "/(jpg)/" }
        relativeDirectory: {eq: "projects/using-reinforcement-learning-in-the-algorithmic-trading"}
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
