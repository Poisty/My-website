import React from 'react';
import { Content } from '../components/layout/Content';
import Card from '../components/layout/card';
import { FaRegFilePdf } from "react-icons/fa6";
import { PdfCard } from '../components/pdfCards';

function NetworkAndSecurity() {
    return (
        <Content>
            <div className='flex flex-wrap gap-8 p-8'>
                <PdfCard href="/LAB01.pdf">HTTP/SMTP </PdfCard>
                <PdfCard href="/Lab2_Rapport.pdf">DNS</PdfCard>
                <PdfCard href="/Lab3_Rapport.pdf">TCP/UDP/ICMP</PdfCard>
                <PdfCard href="/Lab_4_Dynamisk_ruting.pdf">Dynamisk ruting</PdfCard>
            </div>
            <div className="relative min-h-screen p-4 flex justify-center items-center">
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
             
                    <img
                        src="/Network.png"
                        alt="Fredrik Villo"
                        className="w-60 h-60 object-cover"
                    />
                </div>
            </div>

            {/* Images below the card */}
            <div className="flex flex-col items-center gap-4 justify-center p-4">
                <h3 className="text-center text-4xl">
                    
                </h3>
            </div>
        </Content>

    );
}

export default NetworkAndSecurity;
