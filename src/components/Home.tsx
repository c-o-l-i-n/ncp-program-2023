import { ReactElement } from 'react';
import Image from 'next/image';
import Footer from './Footer';
import ncpColorLogo from 'images/ncp-color.svg';

export default function Home(): ReactElement {
  return (
    <>
      <main className='has-text-centered'>
        <Image
          src={ncpColorLogo}
          alt='North Canton Playhouse Logo'
          width={192}
          height={192}
          priority
          className='mt-5 no-border-radius'
        />

        <h1 className='has-text-weight-bold'>Playhouse Pursuit</h1>
        <p>Embark on an exhilarating journey through the heart of the NCP!</p>
        <h3>Scan the QR code in the program to get started!</h3>
      </main>
      <Footer />
    </>
  );
}
