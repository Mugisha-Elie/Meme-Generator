import trollFace from "../assets/trollface.png"

export default function Header() {
    return (
        <header className="flex justify-center items-center">
            <div 
            className="flex justify-start items-center bg-linear-to-r from-[#672280] to-[#A626D3] w-full text-white text-2xl font-medium px-5 py-2 gap-3"
            >
                <img 
                src={trollFace} 
                className="h-10"
                />
                <h1>Meme Generator</h1>
            </div>
        </header>
    )
}

