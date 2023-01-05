import {useEffect, useRef, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import click1 from "./assets/click1.wav"
import click2 from "./assets/click2.wav"


const clickAudio1 = new Audio(click1);
const clickAudio2 = new Audio(click2);



function App() {

    const [bpm, setBpm] = useState(60);
    const [playing, setPlaying] = useState<boolean>(false);


    //const timer = useRef<number | null>(null);

    useEffect(() => {

        let timer: number | null | undefined = null;

        let counter: number = 3;

        function playAudio() {
            counter++;
            if (counter == 4) {
                clickAudio2.play();
                counter = 0;
            }
            else {
                clickAudio1.play();
            }

        }

        if(playing) {
            timer = setInterval(() => playAudio(), (60/bpm)*1000)
        } else {
            // @ts-ignore
            clearInterval(timer)
        }

        return () => {
            // @ts-ignore
            clearInterval(timer);
        }
    }, [playing, bpm])


    const playHandler = () => {
        setPlaying(!playing);
    }

    // @ts-ignore
    return (
    <div className="metronome">
        <div className="bpm-slider">
            <div>{bpm} bpm</div>
            <input type="range" min="60" max="240" value={bpm} onChange={event => setBpm(parseInt(event.target.value, 10))}/>
        </div>

        <button onClick={playHandler}>{playing ? "Stop":"Play"}</button>
    </div>
  )
}

export default App
