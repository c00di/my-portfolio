import Head from 'next/head'
import Navbar from '@components/Navbar.comp'

const MainLayout = ({ children }) => {
  return (
    <div className='layout main-layout'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='Description'
          content='Joakim Liukkonen developer portfolio.'
        />
        <title>Joakim Liukkonen | My Portfolio</title>
      </Head>

      <Navbar />

      {children}
    </div>
  )
}

export default MainLayout
