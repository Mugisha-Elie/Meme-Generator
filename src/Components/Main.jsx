import {useState, useEffect} from "react";


export default function Main() {

    const [meme, setMeme] = useState({
        topBox: "One does not simply",
        bottomBox: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    const [memes, setMemes] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(respData => setMemes(respData.data.memes))
    }, [])


    function handleChange(event){

        const {value, name} = event.currentTarget;
        console.log(value, name)
        
        setMeme(prevValue => ({
            ...prevValue,
            [name]: value
        }))

    }

    function randomMeme(){
        const randomIndex = Math.floor(Math.random() * memes.length);
        const randomMeme = memes[randomIndex].url;

        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: randomMeme
        }))
    }
    return (
        <main className="px-[20%] flex justify-center items-center flex-col">
            <div className="flex flex-col items-center space-y-7 py-5">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col items-start gap-1 px-2">
                        <label htmlFor="topBox" className="text-xl font-normal">Top Text</label>
                        <input
                            id="topBox"
                            type="text"
                            placeholder="One does not simply"
                            name="topBox"
                            value = {meme.topBox}
                            onChange={handleChange}
                            className="border border-gray-400 rounded-lg px-3 py-1 focus:outline-0"
                        />
                    </div>

                    <div className="flex flex-col items-start gap-1 px-2">
                        <label htmlFor="bottomBox" className="text-xl font-normal">Bottom Text</label>
                        <input
                            id="bottomBox"
                            type="text"
                            placeholder="Walk into Mordor"
                            name="bottomBox"
                            value={meme.bottomBox}
                            onChange={handleChange}
                            className="border border-gray-400 rounded-lg px-3 py-1 focus:outline-0"
                        />
                    </div>

                </div>

                <button
                    onClick={randomMeme}
                    className="bg-linear-to-r from-[#672280] to-[#A626D3] text-white text-2xl font-medium px-5 py-2 rounded-lg justify-self-stretch w-full hover:cursor-pointer"
                    >Get a new meme image 🖼
                </button>

                <div className="relative inline-block overflow-hidden font-['Impact',_sans-serif] uppercase tracking-wide select-none">
                    
                    <img 
                        src={meme.imageUrl} 
                        alt="One does not simply"
                        className="block w-full h-auto"
                    />

                    <span className="absolute top-2 left-1/2 -translate-x-1/2 w-full text-center text-white text-4xl md:text-5xl">
                        {meme.topBox}
                    </span>

                    
                    <span className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full text-center text-white text-4xl md:text-5xl">
                        {meme.bottomBox}
                    </span>
                    </div>
            </div>
        </main>
    )
}