const Projects = () => {
    return (
        <>
            <div>
                <h1>My Projects</h1>

                <p>Coming soon(ish)...</p>

                <div>
                <ul className="cloud">
                    <li>performance testing</li>
                    <li>stress testing</li>
                    <li>conformance testing</li>
                    <li>acceptane testing</li>
                    <li>smoke testing</li>
                </ul>
                </div>
            </div>

            {/* STYLES */}
            <style jsx>{`
                .cloud {
                    display: inline;
                    list-style-type: none;
                    width: 400px;
                }

                .cloud li {
                    list-style: none;
                    display: inline;
                }

                .cloud li:nth-of-type(3n + 1) {
                    font-size: 1.25em;
                }
                .cloud li:nth-of-type(4n + 3) {
                    font-size: 1.5em;
                }
                .cloud li:nth-of-type(5n - 3) {
                    font-size: 1em;
                }

            `}</style>
        </>
    )
}

export default Projects