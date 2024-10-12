export const BackgroundImage = ({className}) => {
    return (
        <img src="/test.jpg" className={`absolute h-full w-full object-cover opacity-100 ${className}`} alt="" />
    )
}