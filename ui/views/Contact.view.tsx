const Contact = () => {
  return (
    <>
      <div className='contact-container'>
        <h1>Contact me</h1>

        <form className='form'>
          <input
            className='email'
            type='email'
            name='email'
            placeholder='Email'
          />
          <textarea
            className='text'
            rows='4'
            name='text'
            placeholder='Message'
          ></textarea>

          <input className='button' type='submit' value='Submit' />
        </form>
      </div>

      {/* STYLES */}
      <style jsx>{`
        h1 {
          font-weight: 300;
        }

        .form {
          display: flex;
          flex-direction: column;
        }

        .email,
        .text {
          width: 100%;
          padding: 12px 20px;
          margin: 1rem 0;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }

         {
          /* BUTTON */
        }
        .button {
          width: 100%;
          background-color: cadetblue;
          color: white;
          padding: 14px 20px;
          margin: 8px 0;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .button:hover {
          background-color: #568d8f;
        }
      `}</style>
    </>
  )
}

export default Contact