import { TagCloud } from 'react-tagcloud'

const Projects = () => {
    const data = [
        { value: 'HTML5', count: 33 },
        { value: 'CSS3', count: 20 },
        { value: 'JavaScript', count: 38 },
        { value: 'TypeScript', count: 38 },
        { value: 'React', count: 30 },
        { value: 'React Native', count: 30 },
        { value: 'NextJS', count: 30 },
        { value: 'Nodejs', count: 28 },
        { value: 'Express.js', count: 25 },
        { value: 'MongoDB', count: 18 },
        { value: 'PostgreSQL', count: 18 },
    ]

    return (
        <>
            <div>
                <h1>My Projects</h1>

                <p>Coming soon(ish)...</p>

                <div className="tag-cloud">
                    <TagCloud
                        minSize={12}
                        maxSize={35}
                        tags={data}
                        onClick={tag => console.log(`'${tag.value}' was selected!`)}
                    />
                </div>
            </div>

            {/* STYLES */}
            <style jsx>{`
                .tag-cloud {
                    max-width: 700px
                }
            `}</style>
        </>
    )
}

export default Projects