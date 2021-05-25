import React, { Fragment } from 'react';

const WebzzzContact = (props: any) => {
  const contactBox = {
    marginTop: '75px',
  };

  const contentBox = {
    padding: '20px 0px',
  };

  const introTitleBorder = {
    width: '160px',
    height: '5px',
    backgroundColor: '#D93D04',
  };

  const introTitle = {
    margin: '0px',
    fontSize: '50px',
    fontWeight: 400,
    paddingBtoom: '13px',
  };

  const contactContent = {
    marginTop: '100px',
    display: 'flex',
  };

  const form = {
    flex: '3',
  };

  const credentials = {
    flex: '2',
  };

  const line = {
    flex: '1',
  };

  const centerLine = {
    width: '1px',
    height: '100%',
    margin: 'auto',
    backgroundColor: '#707070',
  };

  const inputGroup = {
    display: 'flex',
    gap: '75px',
    marginBottom: '30px',
  };

  const textInput = {
    display: 'block',
    width: '100%',
    padding: '.375rem .75rem',
    fontSize: '1rem',
    lineHeight: '1.5',
    color: '#495057',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid #ced4da',
    borderRadius: '0.25rem',
    transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
  };

  const textAreaGroup = {};

  const textAreaLabel = {
    display: 'block',
    margin: '5px 0px',
  };

  const textArea = {
    display: 'block',
    width: '100%',
    padding: '.375rem .75rem',
    fontSize: '1rem',
    lineHeight: '1.5',
    color: '#495057',
    backgroundColor: ' #fff',
    backgroundClip: 'padding-box',
    border: '1px solid #ced4da',
    borderRadius: '.25rem',
    transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    boxSizing: 'border-box' as const,
  };

  return (
    <Fragment>
      <section style={contactBox}>
        <div style={contentBox}>
          <h1 style={introTitle}>Contacteer ons</h1>
          <div style={introTitleBorder}></div>

          <div style={contactContent}>
            <form action="#" style={form}>
              <div style={inputGroup}>
                <input type="text" placeholder="Voornaam" style={textInput} />
                <input type="text" placeholder="Achternaam" style={textInput} />
              </div>
              <div style={inputGroup}>
                <input type="email" placeholder="E-mail" style={textInput} />
                <input type="text" placeholder="Telefoon" style={textInput} />
              </div>
              <div style={textAreaGroup}>
                <label htmlFor="textArea" style={textAreaLabel}>
                  Informatie
                </label>
                <textarea id="textArea" style={textArea} cols={10} rows={3}></textarea>
              </div>
            </form>
            <div style={line}>
              <div style={centerLine}></div>
            </div>
            <div style={credentials}>thibaut</div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default WebzzzContact;
