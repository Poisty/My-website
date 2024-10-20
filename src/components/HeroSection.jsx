import THREESpace from "./animation/three"

export const HeroSection = () => {
    return (
        <>
            <section className="min-h-[calc(100dvh-172px)] z-10 flex flex-col gap-16 justify-center items-center">
                <div className="flex gap-8" >
                    {/* <img
                        className="w-auto h-[180px]"
                        src="/pcgif.gif" alt="Project 4" /> */}
                    <article className="flex gap-8 flex-col">
                        <h1 className="text-3xl md:text-5xl text-[#7b88ff] font-bold">Resources for Computer Engineering Students</h1>
                        <h2 className="text-xl md:text-2xl ">Reports, Assignments, and Guidance for Computer Engineering Students: Find Resources to Help You Succeed</h2>
                        <h3 className="text-lg md:text-xl">Fredrik Villo</h3>
                    </article>

                </div>
                {/* p taggen under kan fjernes om du ikke ønsker mer tekst i hero seksjonen: */}
                {/* <p>ghfdoghfuijdpshgfipuodshgofdshngoåfdhgoåfdshogfdhn</p> */}
                {/* <img 
            className="w-1/3 transform scale-[0.7] self-end rounded-t-full" 
            src="/meg_kreta.jpg" alt="Project 4" /> */}

                {/* <img class="paNqSg" crossorigin="anonymous" src="https://video-public.canva.com/VAD8zKb0Q-4/v/184ad5122f.gif" draggable="false" alt="Isometric Computer Laptop"></img>            */}
            </section>
            
            <THREESpace/>
        </>

    )
}