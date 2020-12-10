import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { BsToggleOn, BsToggleOff } from 'react-icons/bs'

const Navbar = () => {
  const router = useRouter()

  // COLOR MODE TOGGLE
  const [bgDark, setBgDark] = useState(true)
  const handleColorModeToggle = () => {
    if (document.body.className.includes('alt-color-mode')) {
      document.body.classList.remove('alt-color-mode')
      document
        .querySelector('#navbar')
        .classList.remove('alt-color-mode-navbar')
      setBgDark(true)
    } else {
      document.body.className = 'alt-color-mode'
      document.querySelector('#navbar').classList.add('alt-color-mode-navbar')
      setBgDark(false)
    }
  }

  return (
    <>
      <div id='navbar'>
        <div className='site-name'>
          <Link href='/'>
            <a>
              <h1>Joakim Liukkonen</h1>
            </a>
          </Link>
        </div>

        <div className='nav-links'>
          <div className={router.route === '/' && 'current'}>
            <Link href='/'>
              <a className='link'>Home</a>
            </Link>
          </div>

          <div className={router.route === '/tech' && 'current'}>
            <Link href='/tech'>
              <a className='link'>Tech</a>
            </Link>
          </div>

          <div className={router.route === '/projects' && 'current'}>
            <Link href='/projects'>
              <a className='link'>Projects</a>
            </Link>
          </div>

          <div className={router.route === '/contact' && 'current'}>
            <Link href='/contact'>
              <a className='link'>Contact</a>
            </Link>
          </div>

          <div className='color-mode-toggle'>
            {bgDark ? (
              <BsToggleOn onClick={handleColorModeToggle} size='1.3rem' />
            ) : (
              <BsToggleOff onClick={handleColorModeToggle} size='1.3rem' />
            )}
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        #navbar {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 0;
          margin: 0.5rem 0 0 1rem;
        }

        .site-name > a > h1 {
          font-size: 1.2rem;
          font-weight: 400;
          margin: 0;
          padding: 0.3rem 0.5rem;
          border: 0.5px solid #f2f2f2;
        }

         {
          /* LINKS */
        }
        .nav-links {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-end;
          margin-bottom: 0.15rem;

          padding: 0;
        }

        .current > a {
          color: cadetblue !important;
        }

        .current > a:hover {
          color: cadetblue !important;
          border-bottom: none;
        }

        a.link {
          color: #f2f2f2;
          font-size: 0.9rem;
          font-weight: 400;
          margin: 0 1.1rem;
          border-bottom: none;
          transition-duration: 0.2s;
        }

        a.link:hover {
          color: cadetblue !important;
          transition-duration: 0.2s;
          border-bottom: 1px solid cadetblue;
        }

        a.link:visited {
          color: #f2f2f2;
        }

         {
          /* TOGGLE */
        }
        .color-mode-toggle {
          padding-top: 0.35rem;
          margin: 0 0 0 1.1rem;
          transition-duration: 0.2s;
        }
        .color-mode-toggle:hover {
          color: cadetblue !important;
          transition-duration: 0.2s;
        }
      `}</style>
    </>
  )
}

export default Navbar
