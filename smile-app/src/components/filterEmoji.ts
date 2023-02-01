import emojiList from "../assets/emojiList.json";
import {EmojiType} from "./EmojiType";

const MAX_RESULTS = 30;


export const filterEmoji = (searchText: string): EmojiType[] => {
    return emojiList.filter((emoji) => {
        if(emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
        if(emoji.keywords.includes(searchText)) return true;
        return false;
    }).slice(0, MAX_RESULTS)
}