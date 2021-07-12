import React from "react";
import linkedInLogo from "../images/linkedin.svg";
import mailLogo from "../images/mail.svg";

import styled from "styled-components";

const WebzzzContact = () => {
  const Section = styled.section`
    margin-top: 75px;
  `;

  const ContentBox = styled.div`
    padding: 20px 0px;
  `;

  const IntroTitle = styled.h1`
    margin: 0px;
    font-size: 50px;
    font-weight: 400;
    padding-bottom: 13px;
  `;

  const IntroTitleBorder = styled.div`
    width: 160px;
    height: 5px;
    background-color: #d93d04;
  `;

  const ContactContent = styled.div`
    margin-top: 100px;
    display: flex;
  `;

  const Form = styled.form.attrs(() => ({
    action: "#",
  }))`
    flex: 3;
  `;

  const InputGroup = styled.div`
    display: flex;
    gap: 75px;
    margin-bottom: 30px;
  `;

  const Input = styled.input.attrs((props) => ({
    type: props.type,
    placeholder: props.placeholder,
  }))`
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  `;

  const TextAreaGroup = styled.div``;

  const TextArea = styled.textarea.attrs((props) => ({
    id: props.id,
    cols: props.cols,
    rows: props.rows,
  }))`
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
  `;

  const Button = styled.button`
    display: block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    background-color: #f2cd13;
    border: 1px solid #545871;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    float: right;
    margin-top: 20px;
  `;

  const SeperationLine = styled.div`
    flex: 1;

    div {
      width: 1px;
      height: 100%;
      margin: auto;
      background-color: #707070;
    }
  `;

  const Credentials = styled.div`
    flex: 2;
  `;

  const UserCredential = styled.div`
    margin-bottom: 35px;

    .name {
      font-family: Helvetica, Arial, sans-serif;
      font-size: 20px;
      color: #868e96;
      margin: 0px 0px 10px 0px;
    }

    .linkItem {
      display: flex;
      align-items: center;
      margin: 5px 0px;

      a {
        margin-left: 16px;
      }
    }
  `;

  return (
    <Section>
      <ContentBox>
        <IntroTitle>Contacteer ons</IntroTitle>
        <IntroTitleBorder></IntroTitleBorder>

        <ContactContent>
          <Form>
            <InputGroup>
              <Input type="text" placeholder="Voornaam"></Input>
              <Input type="text" placeholder="Achternaam"></Input>
            </InputGroup>

            <InputGroup>
              <Input type="email" placeholder="E-mail"></Input>
              <Input type="text" placeholder="Telefoon"></Input>
            </InputGroup>

            <TextAreaGroup>
              <TextArea
                id="textArea"
                cols={10}
                rows={5}
                placeholder="Bericht"
              ></TextArea>
            </TextAreaGroup>

            <Button>Verzenden</Button>
          </Form>

          <SeperationLine>
            <div></div>
          </SeperationLine>

          <Credentials>
            <UserCredential>
              <p className="name">Thibaut Joukes</p>
              <p className="linkItem">
                <img src={linkedInLogo} alt="linkedIn" />
                <a href="https://www.linkedin.com/in/thibaut-joukes/">
                  Thibaut Joukes
                </a>
              </p>
              <p className="linkItem">
                <img src={mailLogo} alt="e-mail" />
                <a href="mailto: thibautjoukes@gmail.com">Stuur email</a>
              </p>
            </UserCredential>
            <UserCredential>
              <p className="name">Kjelle Gyesbreghs</p>
              <p className="linkItem">
                <img src={linkedInLogo} alt="linkedIn" />
                <a href="https://www.linkedin.com/in/kjelle-gyesbreghs/">
                  Kjelle Gyesbreghs
                </a>
              </p>
              <p className="linkItem">
                <img src={mailLogo} alt="e-mail" />
                <a href="mailto: gyesbreghskjelle@hotmail.com">Stuur email</a>
              </p>
            </UserCredential>
          </Credentials>
        </ContactContent>
      </ContentBox>
    </Section>
  );
};

export default WebzzzContact;
