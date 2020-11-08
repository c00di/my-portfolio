import '../styles/globals.css'

import MainLayout from '@styles/layouts/Main.layout'
import React from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
