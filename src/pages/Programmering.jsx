import { Content } from "../components/layout/Content"


function Programmering() {

    return (
        <Content>
      {/* <HeroSection/> */}

            <section className="p-8 flex flex-col justify-content items-center w-full">
            <h3>Recent Projects</h3>
                <img
                    className="w-[150px]"
                    src="/gif_tegning.gif" alt="Project 4" />
                <div className="flex justify-center flex-wrap w-full">
                </div>
                <h1>Link til github repository</h1>
                <h2><a href="https://github.com/Poisty/Delte_filer" target="_blank" rel="noopener noreferrer">
                https://github.com/Poisty/Delte_filer
                    </a></h2>
                <p></p>

                
            </section>

        </Content>
    )
}

export default Programmering