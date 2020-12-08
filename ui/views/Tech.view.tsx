import { TagCloud } from 'react-tagcloud'

const Tech = () => {
    const data = [
        // BASICS
        { value: 'HTML', count: 20 },
        { value: 'CSS', count: 20 },
        { value: 'JavaScript', count: 20 },
        { value: 'TypeScript', count: 20 },

        // REACT
        { value: 'React', count: 30 },
        { value: 'React Native', count: 30 },
        { value: 'NextJS', count: 30 },
        { value: 'Redux', count: 30 },

        // NODE
        { value: 'NodeJS', count: 25 },
        { value: 'ExpressJS', count: 25 },

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
                <h1>Tech I Have Used</h1>
                <p>These are the (main) technologies I have used in my professional and hobby projects.</p>

                <div className="tag-cloud">
                    <TagCloud
                        minSize={12}
                        maxSize={35}
                        tags={data}
                        onClick={tag => console.log(`'${tag.value}' was clicked!`)}
                    />
                </div>
            </div>

            {/* STYLES */}
            <style jsx>{`
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