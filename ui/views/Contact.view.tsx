const Contact = () => {
  return (
    <>
      <div className='container contact-container'>
        <div className="form">
          <h1 className='title'>Contact me</h1>

          <form
            name='contact'
            method='POST'
            action='/success'
            data-netlify='true'
          >
            <input type="hidden" name="form-name" value="contact" />

            <p>
              <label className='label' htmlFor='email'>Email</label>
              <input
                className='email'
                type='email'
                name='email'
                id='email'
                placeholder='Email'
              />
            </p>

            <p>
              <label className='label' htmlFor='text'>Text</label>
              <textarea
                className='text'
                rows={8}
                name='text'
                id='text'
                placeholder='Message'
              ></textarea>
            </p>

            <p>
              <button className='button' type='submit'>Submit</button>
            </p>
          </form>
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .form {
          width: 100%;
          padding: 1rem 10rem;
          max-width: 1200px
        }

        form {
          width: 100%;
        }

        .title {
          text-align: left
        }

        .email,
        .text {
          width: 100%;
          padding: 1rem 1.25rem;
          margin: 0;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .label {
          display: none;
        }

         {
          /* BUTTON */
        }
        .button {
          width: 100%;
          background-color: cadetblue;
          color: #f2f2f2;
          padding: 1rem 1.25rem;
          margin: 0.5rem 0;
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
