import Image from 'next/image'

const Header = () => {
  return (
    <>
      <div className='container'>
        <div className='image-container'>
          <Image
            src='/static/profile.png'
            alt='my-picture'
            width={180}
            height={180}
          />
        </div>

        <div className='info-container'>
          <h1 className='info name'>Joakim Liukkonen</h1>
          <h2 className='info title'>Software Developer</h2>
          <h2 className='info location'>Bangkok / Helsinki</h2>
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-container {
          padding-right: 2rem;
        }

        .info {
          font-size: 1.2rem;
          padding: 0;
          margin: 0;
        }

        .title,
        .location {
          font-weight: 400;
        }

        .info.name {
          font-size: 2.5rem;
          font-weight: 500;
          padding-bottom: 0.5rem;
        }

        .info.title {
          padding-bottom: 0.5rem;
        }
      `}</style>
    </>
  )
}

export default Header
