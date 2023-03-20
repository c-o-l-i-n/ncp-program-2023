import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ReactElement } from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@/styles/globals.scss'
import { Montserrat } from 'next/font/google'

config.autoAddCss = false

const font = Montserrat({
  subsets: ['latin'],
  variable: '--app-font'
})

export default function App ({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <style jsx global>{`
        :root {
          --app-font: ${font.style.fontFamily};
        }
      `}
      </style>

      <Head>
        <title>The Great NCP Program Riddle</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
