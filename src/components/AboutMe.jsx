import React from 'react';
import { Content } from './layout/Content';
import Card from './layout/card';

function AboutMe() {
  return (
    <Content>
      <div className="relative min-h-screen p-4 flex justify-center items-center">
        <div className="flex items-center space-x-6"> {/* Flex container for card and image */}
          <Card className="w-1/2"> {/* The card takes half the space */}
            <h1 className="text-2xl mb-4 font-bold font-raleway italic text-center">
              Fredrik Villo
            </h1>
            <h2 className="text-xl mb-4 font-raleway italic text-left leading-relaxed">
              Jeg studerer for tiden til å bli dataingeniør, og er nå i mitt tredje semester. Teknologi og problemløsning er noe jeg brenner for, og jeg finner stor glede i å skape og utvikle nye løsninger. Når jeg ikke er opptatt med studier, tilbringer jeg tid med barna mine og hunden, som gir meg både glede og energi.
            </h2>
          </Card>
          {/* Add an image next to the card */}
          <img 
            src="/meg.jpg" 
            alt="Fredrik Villo"
            className="w-60 h-60 rounded-[150px] object-cover" /> 
        </div>
      </div>

      {/* Images below the card */}
      <div className="flex justify-center space-x-6 p-4 mt-1 mr-40">
        <img 
          src="/VOLTCircle2.png" 
          alt="Image 1"
          className="w-32 h-32 rounded-lg object-cover shadow-lg transform translate-y-[-250px]" 
        />
        <img 
          src="/nito.png" 
          alt="Image 2"
          className="w-50 h-48 object-cover shadow-lg transform translate-y-[-280px]" 
        />
      </div>

      <div className="relative min-h-screen p-4 flex justify-center items-center">
        <div className="absolute" style={{ top: '-20%', left: '3000%', transform: 'translate(-50%, -50%)' }}>
          <Card>
            <h2 className="text-xl mb-4 font-serif italic text-left">
              "Tell me and I forget, teach me and I may remember, involve me and I learn."
            </h2>
            <p className="text-lg leading-relaxed font-serif text-left">Benjamin Franklin</p>
          </Card>
        </div>
      </div>
    </Content>
  );
}

export default AboutMe;
