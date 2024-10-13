export const HeroSection = () => {
    return (
        <section className="min-h-[calc(100vh-172px)] bg-[#dac4b2] flex flex-col gap-16 justify-center items-center">
            <div className="flex">
                <img
                    className="w-[150px]"
                    src="/pcgif.gif" alt="Project 4" />
                <article className="flex justify-center items-center flex-col">
                    <h1>Siden er under utvikling den skal fungerer som bio og portfolio</h1>
                    <h2 className="text-2xl">Utvikles av Fredrik Villo</h2>
                </article>
               
            </div>
            {/* p taggen under kan fjernes om du ikke ønsker mer tekst i hero seksjonen: */}
            {/* <p>ghfdoghfuijdpshgfipuodshgofdshngoåfdhgoåfdshogfdhn</p> */}
            {/* <img 
            className="w-1/3 transform scale-[0.7] self-end rounded-t-full" 
            src="/meg_kreta.jpg" alt="Project 4" /> */}

            {/* <img class="paNqSg" crossorigin="anonymous" src="https://video-public.canva.com/VAD8zKb0Q-4/v/184ad5122f.gif" draggable="false" alt="Isometric Computer Laptop"></img>            */}
        </section>

    )
}