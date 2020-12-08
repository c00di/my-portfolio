import Link from 'next/link';

const Introduction = () => {
    return (
        <>
            <div className="container introduction-container">
                <h2>
                    I am a web developer with emphasis on various JavaScript <Link href='/tech'><a className='link'>technologies</a></Link>. 

                    Please check my <Link href='/projects'><a className='link'>projects</a></Link> to see the cool stuff I have built. 

                    {/* <br /><br />In 2020, after five years of living in Bangkok 🇹🇭, I moved to the capital city of my home country, Helsinki 🇫🇮. */}


                    <br /><br />Feel free to <Link href='/contact'><a className='link'>contact</a></Link> me.
                </h2>
            </div>

            {/* STYLES */}
            <style jsx>{`
                .introduction-container {
                    text-align: center;
                    max-width: 1000px
                }

                h2 {
                    letter-spacing: 8px;
                    line-height: 4rem;
                    font-weight: 300;
                    font-size: 2.5rem;
                }

                a.link {
                    color: red;
                    text-decoration: underline;
                    font-weight: 400;
                }
            `}</style>
        </>
    );
}

export default Introduction;