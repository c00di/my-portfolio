const Navbar = () => {
  return (
    <>
      <div className='container'>
        {'{'}
        <p className='nav-link'>Home</p>
        <p className='nav-link'>Projects</p>
        <p className='nav-link'>Contact</p>
        {'}'}
      </div>

      {/* STYLES */}
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }

        .nav-link {
          padding: 1rem 2rem;
          text-transform: uppercase;
        }
      `}</style>
    </>
  )
}

export default Navbar
