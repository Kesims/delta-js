import { useState } from 'react'
import {App as SendbirdApp} from "sendbird-uikit";
import reactLogo from './assets/react.svg'
import './App.css'
import "sendbird-uikit/dist/index.css";

function App() {
    const [count, setCount] = useState(0)

    const APP_ID = 'E5225E4F-8898-4B26-AE4D-AADD82F8A353';

    return (
    <div className="App">
        <SendbirdApp appId={APP_ID} userId="user-1"></SendbirdApp>
    </div>
    )
}

export default App
