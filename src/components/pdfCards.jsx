import { FaRegFilePdf } from "react-icons/fa6";
// import Card from "./layout/card";
import Card_2 from "./layout/Card_2";

export const PdfCard = ({ href, children, className }) => {
    return (
        <Card_2 className="">
            <div className={`${className}`}>
                <a href={href} target="_blank" className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                    <FaRegFilePdf className={`w-12 h-12`} />
                    <p>{children}</p>
                </a>
            </div>
        </Card_2>
    )
}