import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Project from '../templates/Project';
import Browser from '../components/Browser';
import Content from '../components/Content';

import mastImage from '../images/projects/ron/mast.png';
// import mastVideo from '../images/projects/ron/mast.mp4';

function RONPage({ data, path }) {
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
    title="RON"
    image={mastImage}
      pathname={path}
    >
      <Content header="Reduced-Order Modeling of Deep Neural Networks">
        <p>
        We introduce a new method for speeding up the inference of deep neural networks. 
It is somewhat inspired by the reduced-order modeling techniques for dynamical systems.
The cornerstone of the proposed method is the maximum volume algorithm.
We demonstrate efficiency on neural networks pre-trained on different datasets. 
We show that in many practical cases it is possible to replace convolutional layers with much smaller fully-connected layers with a relatively small drop in accuracy.
Check out <a href="https://arxiv.org/abs/1910.06995" target="_blank" rel="noopener noreferrer">Paper</a> and 
        <a href="https://github.com/Daulbaev/ReducedOrderNet" target="_blank" rel="noopener noreferrer"> Code</a>.

        </p>
      </Content>

    </Project>
  );
}

RONPage.propTypes = {
  data: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
};

export default RONPage;

export const projectQuery = graphql`
  query RONQuery {
    allFile(filter: {
        extension: { regex: "/(jpg)/" }
        relativeDirectory: {eq: "projects/ron"}
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
