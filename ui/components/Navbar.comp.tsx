const Navbar = () => {
  return (
    <>
      <div className='container'>
        <div className='link-container'>
          <a className='link'>Home</a>
        </div>
        {'|'}
        <div className='link-container'>
          <a className='link'>Projects</a>
        </div>
        {'|'}
        <div className='link-container'>
          <a className='link'>Contact</a>
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
          margin: 0 0 2rem;
        }

        a.link {
          font-weight: 300;
          padding: 0.5rem 2rem;
          margin: 0 1rem;
          text-transform: uppercase;
          border-bottom: none;
          transition-duration: 0.2s;
        }

        a.link:hover {
          color: cadetblue;
          transition-duration: 0.2s;
        }
      `}</style>
    </>
  )
}

export default Navbar
