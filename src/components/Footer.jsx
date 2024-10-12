import { BackgroundImage } from "./bgImage"

function Footer() {
    return (
        <footer className="min-h-[50vh] flex justify-end relative items-center flex-col">
            <div className="z-10 p-4 bg-gray-500 bg-opacity-50 rounded-t-3xl">
                <p>&copy; 2024 My Computer Engineering Journey. All rights reserved.</p>
                <p>Created by Fredrik Villo</p>
            </div>
            <BackgroundImage className=""/>
        </footer>
    )
}

export default Footer