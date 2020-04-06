import React from 'react';
import Instagram from '../Instagram';

import './index.scss';

function Contact() {
  return (
    <section className="talk">
      <div className="talk__left">
        <Instagram />
      </div>
      <div className="talk__right section-padding bg-lightgrey">
        <p className="talk__text">Please get in touch at <a className="talk__link" href="mailto:evgenii.ponomarev@skoltech.ru">evgenii.ponomarev@skoltech.ru</a> for professional opportunities.</p>
      </div>
    </section>
  );
}

export default Contact;
