import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <div className='container'>
        <div className='link-container'>
          <Link href='/'>
            <a className='link'>Home</a>
          </Link>
        </div>
        {'|'}
        <div className='link-container'>
          <Link href='/tech'>
            <a className='link'>Tech</a>
          </Link>
        </div>
        {'|'}
        <div className='link-container'>
          <Link href='/projects'>
            <a className='link'>Projects</a>
          </Link>
        </div>
        {'|'}
        <div className='link-container'>
          <Link href='/contact'>
            <a className='link'>Contact</a>
          </Link>
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 0;
          margin: 0 0 2.3rem;
        }

        a.link {
          color: #f2f2f2;
          font-weight: 300;
          padding: 0.5rem 2rem;
          margin: 0 1rem;
          text-transform: uppercase;
          border-bottom: none;
          transition-duration: 0.2s;
        }

        a.link:hover {
          color: cadetblue !important;
          transition-duration: 0.2s;
        }

        a.link:visited {
          color: #f2f2f2;
        }
      `}</style>
    </>
  )
}

export default Navbar
