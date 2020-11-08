import Head from 'next/head'
import Navbar from '@components/Navbar.comp'

const MainLayout = ({ children }) => {
  return (
    <div className='layout main-layout'>
      <Head>
        <title>Joakim Liukkonen | My Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      {children}
    </div>
  )
}

export default MainLayout
