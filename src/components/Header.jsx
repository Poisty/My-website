import { BackgroundImage } from "./bgImage"

function Header() {
    return (
        <header className="relative">
            <div className="z-10 p-4">
                {/* <img src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1390700/9cce28c68413ff27e4f722167cd1ed38d41b913c.gif" /> */}
                <video src="/P.mp4" autoPlay muted loop className="w-[100px] h-[100px] rounded-full"/>

                {/* <h1 className="text-rose-200">My Computer Engineering Journey</h1> */}
            </div>
            <BackgroundImage className="" />
        </header>
    )
}

export default Header