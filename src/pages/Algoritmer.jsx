import React from 'react';
import { Content } from '../components/layout/Content';
import Glass from '../components/layout/Glass';




function Algoritmer() {
    return (
        <div className="content-background">
            <Content>

                <Glass className="w-[400px] h-[600px] rounded-[32px]">
                    <Glass className="rounded-lg mb-4">
                    <h1 className="font-bold">
                            Denne siden holder på å bli designet
                        </h1>
                        <p className='text-xs'>
                            Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore
                        </p>
                    </Glass>
                    <Glass className="rounded-lg">
                        <h1 className="font-bold">
                            Så dette er kun tekstfyll
                        </h1>
                        <p className='text-xs'>
                            Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore
                        </p>
                    </Glass>
                  

                </Glass>
            </Content>
            </div>
    );
}

export default Algoritmer;
