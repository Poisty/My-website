import { FaRegFilePdf } from "react-icons/fa6";
import Card from "./layout/card";

export const PdfCard = ({ href, children, className }) => {
    return (
        <Card>
            <div className={`${className}`}>
                <a href={href} target="_blank">
                    <FaRegFilePdf className={`w-12 h-12`} />
                    <p>{children}</p>
                </a>
            </div>
        </Card>
    )
}