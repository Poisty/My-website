import React from 'react';
import { Content } from './layout/Content';
import Card from './layout/card';

function AboutMe() {
  return (
    <Content>
    <div className="relative min-h-screen p-4 flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6"> 
        <Card className="w-full md:w-1/2">
          <h1 className="text-2xl mb-4 font-bold font-raleway italic text-center">
            Fredrik Villo
          </h1>
          <h2 className="text-xl mb-4 font-raleway italic text-left leading-relaxed">
            Jeg studerer for tiden til å bli dataingeniør, og er nå i mitt tredje semester. Teknologi og problemløsning er noe jeg brenner for, og jeg finner stor glede i å skape og utvikle nye løsninger. Når jeg ikke er opptatt med studier, tilbringer jeg tid med barna mine og hunden, som gir meg både glede og energi.
          </h2>
        </Card>
        <img 
          src="/meg.jpg" 
          alt="Fredrik Villo"
          className="w-60 h-60 rounded-[150px] object-cover" 
        /> 
      </div>
    </div>
  
    {/* Images below the card */}
    <div className="flex flex-col items-center justify-center p-4 mt-8">
      <h3 className="text-center font-raleway text-xl font-bold mb-4">
        Mine verv
      </h3>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
        <img 
          src="/VOLTCircle2.png" 
          alt="Image 1"
          className="w-32 h-32 rounded-[100%] object-cover" 
        />
        <div className="relative">
          <img 
            src="/nito.png" 
            alt="Image 2"
            className="w-50 h-48 object-cover relative transform translate-y-[-35px]" 
          />
        </div>
      </div>
    </div>
  
  
  </Content>
  
  );
}

export default AboutMe;
