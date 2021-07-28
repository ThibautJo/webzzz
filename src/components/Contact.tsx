import React from 'react';
import linkedInLogo from '../images/linkedin.svg';
import mailLogo from '../images/mail.svg';

const WebzzzContact = () => {
  return (
    <section className='mt-16'>
      <div className='py-5 px-0'>
        <h1 className='m-0 text-5xl font-normal pb-1'>Contacteer ons</h1>
        <div className='h-1.5	w-40 bg-red'></div>

        <div className='mt-24 flex'>
          <form action='#' className='flex-auto'>
            <div className='flex gap-2 mb-7'>
              <input type='text' placeholder='Voornaam' />
              <input type='text' placeholder='Achternaam' />
            </div>

            <div className='flex gap-2 mb-7'>
              <input type='email' placeholder='E-mail' />
              <input type='text' placeholder='Telefoon' />
            </div>

            <div>
              <textarea id='textArea' cols={10} rows={5} placeholder='Bericht'></textarea>
            </div>

            <button className='sendButton float-right mt-7'>Verzenden</button>
          </form>

          <div className='flex-1'>
            <div className='w-px h-full m-auto bg-darkGrey'></div>
          </div>

          <div className='flex-1'>
            <div className='mb-9'>
              <p className='text-base text-lightGrey m-0 mb-2.5'>Thibaut Joukes</p>
              <p className='flex items-center	mx-0 my-1.5'>
                <img src={linkedInLogo} alt='linkedIn' />
                <a href='https://www.linkedin.com/in/thibaut-joukes/' className='ml-4'>
                  Thibaut Joukes
                </a>
              </p>
              <p className='flex items-center	mx-0 my-1.5'>
                <img src={mailLogo} alt='e-mail' />
                <a href='mailto: thibautjoukes@gmail.com' className='ml-4'>
                  Stuur email
                </a>
              </p>
            </div>

            <div className='mb-9'>
              <p className='text-base text-lightGrey m-0 mb-2.5'>Kjelle Gyesbreghs</p>
              <p className='flex items-center	mx-0 my-1.5'>
                <img src={linkedInLogo} alt='linkedIn' />
                <a href='https://www.linkedin.com/in/kjelle-gyesbreghs/' className='ml-4'>
                  Kjelle Gyesbreghs
                </a>
              </p>
              <p className='flex items-center	mx-0 my-1.5'>
                <img src={mailLogo} alt='e-mail' />
                <a href='mailto: gyesbreghskjelle@hotmail.com' className='ml-4'>
                  Stuur email
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebzzzContact;
