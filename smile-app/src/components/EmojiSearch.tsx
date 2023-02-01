import {Dispatch, FormEvent, SetStateAction, useState} from "react";
import emojis from "../assets/emojiList.json";
import {EmojiType} from "./EmojiType";
import {filterEmoji} from "./filterEmoji";

interface EmojiSearchProps {
    setFilteredEmoji: Dispatch<SetStateAction<EmojiType[]>>;
}

export function EmojiSearch({setFilteredEmoji}: EmojiSearchProps) {

    const changeHandler = (event: FormEvent<HTMLInputElement>) => {
        setFilteredEmoji(filterEmoji(event.currentTarget.value))
    }

    return(
           <div className="EmojiSearch">
               <input className="searchInput" onChange={changeHandler}/>
           </div>
    );
}