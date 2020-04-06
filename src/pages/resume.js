import React, { Fragment, Component } from 'react';
import { Document, Page } from 'react-pdf';
import Pdf from '../../static/resume.pdf';
import Content from '../components/Content';

function show_pdf({})
{
  return (
    <Fragment>
      <Content>
        <h2><a href = {Pdf}>Download Resume</a></h2>
        {/* {<Document
          file="/resume.pdf"
        >
          <Page pageNumber={1} />
        </Document> } */}
        
      </Content>
    </Fragment>
  );
}

export default show_pdf;

