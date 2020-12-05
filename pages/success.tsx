const Success = () => {
  return (
    <>
      <div className='success-container'>
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 16 16'
          height='2.4em'
          width='2.4em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z'
          ></path>
        </svg>
        <h1 className='title'>Contact submission was successful!</h1>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .success-container {
          display: flex;

          margin-top: 4rem;
          color: #00e200;
        }

        .title {
          margin: 0 0 0 1rem;
          padding: 0;
        }
      `}</style>
    </>
  )
}

export default Success
