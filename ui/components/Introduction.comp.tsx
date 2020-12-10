import Link from 'next/link'

const Introduction = () => {
  return (
    <>
      <div className='container introduction-container'>
        <h2>
          I'm a web developer, with emphasis on various JavaScript{' '}
          <Link href='/tech'>
            <a className='link'>technologies</a>
          </Link>
          . Please check my{' '}
          <Link href='/projects'>
            <a className='link'>projects</a>
          </Link>
          {', '}
          to see the cool stuff I have published.
          <br />
          <br />
          Feel free to{' '}
          <Link href='/contact'>
            <a className='link'>contact</a>
          </Link>{' '}
          me.
        </h2>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .introduction-container {
          text-align: left;
          max-width: 1000px;
        }

        h2 {
          letter-spacing: 6px;
          line-height: 4vw;
          font-weight: 400;
          font-size: 2.3vw;
        }

        a.link {
          color: cadetblue;
          text-decoration: underline;
          font-weight: 400;
        }
      `}</style>
    </>
  )
}

export default Introduction
