import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {AppHeader} from "./components/AppHeader";
import {EmojiSearch} from "./components/EmojiSearch";
import {EmojiList} from "./components/EmojiList";
import { EmojiType } from './components/EmojiType';
import { filterEmoji } from './components/filterEmoji';

function App() {
    const [filteredEmoji, setFilteredEmoji] = useState<EmojiType[]>(filterEmoji(""));

    return (
            <div className="App">
                <AppHeader />
                <EmojiSearch setFilteredEmoji={setFilteredEmoji}/>
                <EmojiList emojiList={filteredEmoji}/>
            </div>
    );

}

export default App;
