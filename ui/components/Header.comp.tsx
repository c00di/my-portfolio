import Image from 'next/image'
import Link from 'next/link'

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

          <div className='some-container'>
            <div className='icon github'>
              <Link href='https://github.com/c00di'>
                <a>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    stroke-width='0'
                    viewBox='0 0 24 24'
                    height='1.6rem'
                    width='1.6rem'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clip-path='url(#clip0)'>
                      <path d='M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3.163 21.783h-.093a.513.513 0 0 1-.382-.14.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.692 3.692 0 0 0-.151-1.028 1.832 1.832 0 0 0-.542-.875 8.014 8.014 0 0 0 2.038-.471 4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.77 6.77 0 0 0 .3-2.13 4.138 4.138 0 0 0-.26-1.476 3.892 3.892 0 0 0-.795-1.284 2.81 2.81 0 0 0 .162-.582c.033-.2.05-.402.05-.604 0-.26-.03-.52-.09-.773a5.309 5.309 0 0 0-.221-.763.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.15 5.15 0 0 0-.703.26 6.503 6.503 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0 13.507 13.507 0 0 0-.572-.362 6.023 6.023 0 0 0-.672-.342 4.516 4.516 0 0 0-.705-.261 2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02 5.845 5.845 0 0 0-.23.763c-.054.254-.08.513-.081.773 0 .202.017.404.051.604.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476 6.871 6.871 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633 2.99 2.99 0 0 0-.2.744 2.754 2.754 0 0 1-1.175.27 1.788 1.788 0 0 1-1.065-.3 2.904 2.904 0 0 1-.752-.824 3.098 3.098 0 0 0-.292-.382 2.692 2.692 0 0 0-.372-.343 1.842 1.842 0 0 0-.432-.24 1.201 1.201 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.649.649 0 0 0-.162.02.408.408 0 0 0-.13.06.115.115 0 0 0-.06.1.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333.112.098.213.209.3.33.09.119.168.246.231.381.073.134.15.288.231.463.188.474.522.875.954 1.145.453.243.961.364 1.476.351.174 0 .349-.01.522-.03.172-.028.343-.057.515-.091v1.743a.501.501 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005z'></path>
                    </g>
                    <defs>
                      <clipPath id='clip0'>
                        <path d='M0 0h24v24H0V0z'></path>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </Link>
            </div>

            <div className='icon linkedin'>
              <Link href='https://www.linkedin.com/in/joakim-liukkonen/'>
                <a>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    stroke-width='0'
                    viewBox='0 0 24 24'
                    height='1.6em'
                    width='1.6em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M22.0367422,22 L17.8848745,22 L17.8848745,15.5036305 C17.8848745,13.9543347 17.85863,11.9615082 15.7275829,11.9615082 C13.5676669,11.9615082 13.237862,13.6498994 13.237862,15.3925291 L13.237862,22 L9.0903683,22 L9.0903683,8.64071385 L13.0707725,8.64071385 L13.0707725,10.4673257 L13.1276354,10.4673257 C13.6813927,9.41667396 15.0356049,8.3091593 17.0555507,8.3091593 C21.2599073,8.3091593 22.0367422,11.0753215 22.0367422,14.6734319 L22.0367422,22 Z M4.40923804,6.81585163 C3.07514653,6.81585163 2,5.73720584 2,4.40748841 C2,3.07864579 3.07514653,2 4.40923804,2 C5.73720584,2 6.81585163,3.07864579 6.81585163,4.40748841 C6.81585163,5.73720584 5.73720584,6.81585163 4.40923804,6.81585163 L4.40923804,6.81585163 Z M6.48604672,22 L2.32980492,22 L2.32980492,8.64071385 L6.48604672,8.64071385 L6.48604672,22 Z'
                    ></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
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
          font-weight: 300;
        }

        .info.name {
          font-size: 2.5rem;
          font-weight: 400;
          padding-bottom: 0.2rem;
        }

        .info.title {
          padding-bottom: 0.3rem;
        }

         {
          /* SOME */
        }
        .some-container {
          display: flex;
          margin-top: 0.7rem;
        }

        .icon {
          margin-right: 1rem;
        }

        .github svg:hover {
          color: #999;
        }

        .linkedin svg:hover {
          color: #577eff;
        }
      `}</style>
    </>
  )
}

export default Header
