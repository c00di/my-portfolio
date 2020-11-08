import Header from '@components/Header.comp'

export const Front = () => {
  return (
    <>
      <div className='front-container'>
        <Header />
      </div>

      {/* STYLES */}
      <style jsx>{`
        .front-container {
          margin-bottom: 9vh;
        }
      `}</style>
    </>
  )
}

export default Front
