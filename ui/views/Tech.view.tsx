import { TagCloud } from 'react-tagcloud'

const Tech = () => {
    const data = [
        // BASICS
        { value: 'HTML', count: 25 },
        { value: 'CSS', count: 25 },
        { value: 'JavaScript', count: 25 },
        { value: 'TypeScript', count: 25 },

        // REACT
        { value: 'React', count: 40 },
        { value: 'React Native', count: 40 },
        { value: 'NextJS', count: 40 },
        { value: 'Redux', count: 40 },

        // NODE
        { value: 'NodeJS', count: 30 },
        { value: 'ExpressJS', count: 30 },

        // DB
        { value: 'MongoDB', count: 20 },
        { value: 'PostgreSQL', count: 20 },

        // TOOLS
        { value: 'Git', count: 18 },
        { value: 'VSCode', count: 18 },
        { value: 'Github', count: 18 },
        { value: 'Gitlab', count: 18 },
    ]

    return (
        <>
            <div className='container tech-container'>
                <h1 className='title'>Technologies</h1>
                <p>These are the (main) technologies I have used in my professional and hobby projects.</p>

                <div className="tag-cloud">
                    <TagCloud
                        minSize={18}
                        maxSize={45}
                        tags={data}
                        onClick={tag => console.log(`'${tag.value}' was clicked!`)}
                    />
                </div>
            </div>

            {/* STYLES */}
            <style jsx>{`
                h1.title {
                    text-align: left !important;
                    display: inline !important
                }

                .tag-cloud {
                    max-width: 700px;
                    padding: 1rem 1rem 1.5rem;
                    margin-top: 2rem;
                    text-align: center
                }
            `}</style>
        </>
    )
}

export default Tech