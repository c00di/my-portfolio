import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <div className='navbar'>

        <div className="site-name">
          <Link href='/'><a><h1>Joakim Liukkonen</h1></a></Link>
        </div>

        <div className="nav-links">
          <div className='link-element'>
            <Link href='/'>
              <a className='link'>Home</a>
            </Link>
          </div>
          {/* {'|'} */}
          <div className='link-element'>
            <Link href='/tech'>
              <a className='link'>Tech</a>
            </Link>
          </div>
          {/* {'|'} */}
          <div className='link-element'>
            <Link href='/projects'>
              <a className='link'>Projects</a>
            </Link>
          </div>
          {/* {'|'} */}
          <div className='link-element'>
            <Link href='/contact'>
              <a className='link'>Contact</a>
            </Link>
          </div>
        </div>

      </div>

      {/* STYLES */}
      <style jsx>{`
        .navbar {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 0;
          margin: 0.5rem 0 0 1rem;
        }

        .site-name > a > h1 {
          font-size: 1.5rem;
          margin: 0;
          padding: 0.3rem 0.5rem;
          border: 0.5px solid #f2f2f2
        }

        .nav-links {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-end;
          padding: 0;
        }

        a.link {
          color: #f2f2f2;
          font-size: 1.2rem;
          font-weight: 300;
          padding-bottom: 0.2rem;
          margin: 0 1.2rem;
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
      `}</style>
    </>
  )
}

export default Navbar
