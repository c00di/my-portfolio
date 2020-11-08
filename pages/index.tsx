import Front from '@views/Front.view'
import Head from 'next/head'
import Navbar from '@components/Navbar.comp'

export default function Home() {
  return (
    <>
      <div className='global-container'>
        <Head>
          <title>Frontname Lastname | My Portfolio</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <Navbar />

        <Front />
      </div>
    </>
  )
}
