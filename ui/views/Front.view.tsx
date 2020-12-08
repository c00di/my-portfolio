import Header from '@components/Header.comp'
import Introduction from '@components/Introduction.comp'

export const Front = () => {
  return (
    <>
      <div className='container front-container'>
        {/* <Header /> */}

        <Introduction />
      </div>

      {/* STYLES */}
      <style jsx>{`
      
      `}</style>
    </>
  )
}

export default Front
