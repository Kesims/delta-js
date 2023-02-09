import {ReactElement} from "react";

interface ResultBarInterface {
    winnerPlayer: string;
}

export function ResultBar(props: ResultBarInterface): ReactElement {
    return(
            <div className="ResultBar">
                <div>Winner: {props.winnerPlayer}</div>

            </div>
    )

}