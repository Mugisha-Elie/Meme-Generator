import {useState, useEffect} from "react"


function Track(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    function watchWidth(){
        console.log("resized")
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', watchWidth)
        return () => {
            window.removeEventListener('resize', watchWidth)
        }
    }, [])

    // useEffect(() => {
    //     window.addEventListener('resize', () => {
    //         console.log("Resized")
    //         setWindowWidth(window.innerWidth)
    //     })
    // }, [])

    return (
        <h1>Window Width: {windowWidth}</h1>
    )
}


export default function WindowTracker(){
    
    const [show, setShow] = useState(true)
    
    function toggle() {
        setShow(prevShow => !prevShow)
    }

    return (
        <main className="container">
            <button 
            onClick={toggle}>
                Toggle WindowTracker
            </button>
            {show && <Track />}
        </main>
    )
}