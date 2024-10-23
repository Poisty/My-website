import React from 'react';
import { Content } from '../components/layout/Content';
import Card from '../components/layout/card';
import { FaRegFilePdf } from "react-icons/fa6";
import { PdfCard } from '../components/pdfCards';
import Glass from '../components/layout/Glass';
import Textbox from '../components/layout/TextBox';
import Card_2 from '../components/layout/Card_2';

function Algoritmer() {
    return (
        <div className="content-background">
        <Content>
            <Glass>
        <Textbox>
            Dette skal vise en tekst inne i en tekstboks
        </Textbox>
        </Glass>
        </Content>
        </div>
    );
}

export default Algoritmer;
