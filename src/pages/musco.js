import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Project from '../templates/Project';
import Browser from '../components/Browser';
import Content from '../components/Content';

import mastImage from '../images/projects/musco/mast.png';
// import mastVideo from '../images/projects/musco/mast.mp4';

function MUSCOPage({ data, path }) {
  let blog, home, shop, shopSingleOne, shopSingleTwo, favicon;

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
      case 'favicon':
        favicon = node.childImageSharp.fluid;
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
      title="MUSCO"
      image={mastImage}
      // video={mastVideo}
      pathname={path}
    >
      <Content header="MUSCO: MUlti-Stage COmpression of neural networks">
        <p>
        It demonstrates how a neural network with convolutional and fully connected layers can be compressed using iterative tensor decomposition of weight tensors.
        Check out <a href="http://openaccess.thecvf.com/content_ICCVW_2019/html/LPCV/Gusak_Automated_Multi-Stage_Compression_of_Neural_Networks_ICCVW_2019_paper.html" target="_blank" rel="noopener noreferrer">Paper on ICCV 2019 workshop</a> and 
        <a href="https://github.com/musco-ai/musco-pytorch" target="_blank" rel="noopener noreferrer"> Code</a>.
        </p>
    
      </Content>

    </Project>
  );
}

MUSCOPage.propTypes = {
  data: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
};

export default MUSCOPage;

export const projectQuery = graphql`
  query MUSCOQuery {
    allFile(filter: {
        extension: { regex: "/(jpg)/" }
        relativeDirectory: {eq: "projects/musco/"}
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
