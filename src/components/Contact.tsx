import React from 'react';
import linkedInLogo from '../images/linkedin.svg';
import mailLogo from '../images/mail.svg';

import './contact.scss';

const WebzzzContact = (props: any) => {
  const sectionMarge = {
    marginTop: '75px',
  };
  return (
    <section style={sectionMarge}>
      <div className="contentBox">
        <h1 className="introTitle">Contacteer ons</h1>
        <div className="introTitleBorder"></div>

        <div className="contactContent">
          <form action="#" className="form">
            <div className="inputGroup">
              <input type="text" placeholder="Voornaam" />
              <input type="text" placeholder="Achternaam" />
            </div>
            <div className="inputGroup">
              <input type="email" placeholder="E-mail" />
              <input type="text" placeholder="Telefoon" />
            </div>
            <div className="textAreaGroup">
              <label htmlFor="textArea">Informatie</label>
              <textarea id="textArea" cols={10} rows={5}></textarea>
            </div>
            <button>Verzenden</button>
          </form>
          <div className="line">
            <div></div>
          </div>
          <div className="credentials">
            <div className="userCredential">
              <p className="name">Thibaut Joukes</p>
              <p className="linkItem">
                <img src={linkedInLogo} alt="linkedIn" />
                <a href="https://www.linkedin.com/in/thibaut-joukes/">Thibaut Joukes</a>
              </p>
              <p className="linkItem">
                <img src={mailLogo} alt="e-mail" />
                <a href="mailto: thibautjoukes@gmail.com">Stuur email.</a>
              </p>
            </div>

            <div className="userCredential">
              <p className="name">Kjelle Geysbrechts</p>
              <p className="linkItem">
                <img src={linkedInLogo} alt="linkedIn" />
                <a href="https://www.linkedin.com/in/thibaut-joukes/">Kjelle Geysbrechts</a>
              </p>
              <p className="linkItem">
                <img src={mailLogo} alt="e-mail" />
                <a href="mailto: thibautjoukes@gmail.com">Stuur email.</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebzzzContact;
