import React from 'react';
import { Content } from '../components/layout/Content';
import Card from '../components/layout/card';
import { FaRegFilePdf } from "react-icons/fa6";
import { PdfCard } from '../components/pdfCards';

function NetworkAndSecurity() {
    return (
        <Content>
            <div className='flex flex-wrap gap-8 p-8'>
                <PdfCard href="/LAB01.pdf">Rapport 1</PdfCard>
                <PdfCard href="/Lab2_Rapport.pdfg">Rapport 1</PdfCard>
                <PdfCard href="/Lab3_Rapport.pdf">Rapport 1</PdfCard>
                <PdfCard href="/Lab_4_Dynamisk_ruting.pdf">Rapport 1</PdfCard>
            </div>
            <div className="relative min-h-screen p-4 flex justify-center items-center">
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
                    <Card className="w-full md:w-1/2 p-8">
                        <h1 className="text-2xl mb-4 font-bold font-raleway italic text-center">
                            Fredrik Villo
                        </h1>
                        <h2 className="text-xl mb-4 font-raleway italic text-left leading-relaxed">
                            NETTVERK!
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
            <div className="flex flex-col items-center gap-4 justify-center p-4">
                <h3 className="text-center text-4xl">
                    Mine verv
                </h3>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
                    <img
                        src="/VOLTCircle2.png"
                        alt="Image 1"
                        className="w-32 h-32"
                    />
                    <img
                        src="/nito.png"
                        alt="Image 2"
                        className="w-auto h-24"
                    />
                </div>
            </div>
        </Content>

    );
}

export default NetworkAndSecurity;
