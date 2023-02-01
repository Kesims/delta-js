import {EmojiType} from "./EmojiType";
import {useEffect} from "react";
import Clipboard from "clipboard";


interface EmojiListProps {
    emojiList: EmojiType[];
}

export function EmojiList({emojiList}: EmojiListProps) {

    useEffect(() => {
        const clipboard = new Clipboard(".copy-to-clipboard");
        return () => {
            clipboard.destroy();
        }
    }, []);

    return (
            <div className="EmojiList">
                <ul>
                    {emojiList.map((emoji) => (
                        <li>
                            <span>{emoji.title}</span>
                            <span>{emoji.symbol}</span>
                        </li>
                    ))}
                </ul>
            </div>
            );
}