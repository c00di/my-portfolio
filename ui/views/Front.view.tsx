import Header from '@components/Header.comp'

export const Front = () => {
  return (
    <>
      <div className='home-container'>
        <Header />
      </div>

      {/* STYLES */}
      <style jsx>{`
        .home-container {
          margin-bottom: 9vh;
        }
      `}</style>
    </>
  )
}

export default Front
