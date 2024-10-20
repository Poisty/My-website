import { HeroSection } from "./HeroSection"
import { Content } from './layout/Content';

function Main() {

    return (
        <Content>
      <HeroSection/>

            <section className="p-8 flex flex-col justify-content items-center w-full">
                {/* <h2>Welcome to My Learning Journey</h2> */}
                {/* <p>Here, I document my experiences and learnings as a computer engineering student. Explore my courses, projects, and more!</p> */}

                {/* <h3>Recent Projects</h3> */}
                {/* <img
                    className="w-[150px]"
                    src="/gif_tegning.gif" alt="Project 4" /> */}
                <div className="flex justify-center flex-wrap w-full">
                    {/* <img className="w-1/4" src="https://images.unsplash.com/photo-1550206574-42cfa61e2a9d?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 1" />
                    <img className="w-1/4" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 2" />
                    <img className="w-1/4" src="https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?q=80&w=2114&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 3" />
                    <img className="w-1/4" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 4" /> */}
                </div>
            </section>

        </Content>
    )
}

export default Main