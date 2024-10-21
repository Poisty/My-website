import React from 'react';
import { Content } from './layout/Content';
import Card from './layout/card';



function AboutMe() {
  return (
    <Content>
      <Card>
      <h1 className="text-3xl font-bold mb-4 text-center">Animated borders</h1>
      <p className="text-lg leading-relaxed font-light text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      </Card>
    </Content>
  );
}

export default AboutMe;
