import Head from 'next/head'
import Header from '@components/Header.comp'
import Navbar from '@components/Navbar.comp'

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontname Lastname | My Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <Header />
    </>
  )
}
