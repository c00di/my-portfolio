import Head from 'next/head'
import Navbar from '@components/Navbar.comp'

const MainLayout = ({ children }) => {
  return (
    <div className='layout main-layout'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='Description'
          content="Hi! I'm a Finnish full-stack web developer. This is my portfolio."
        />
        <title>Liukkonen.dev | My Portfolio</title>
      </Head>

      <Navbar />

      {children}
    </div>
  )
}

export default MainLayout
