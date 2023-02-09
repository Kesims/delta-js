import {ReactElement} from "react";
import {HistoryItemInterface} from "../interfaces/HistoryItem";

interface HistoryPropsInterface {
    history: HistoryItemInterface[]
    moveBackInHistoryHandler: (key: number) => void;
}

export function History(props: HistoryPropsInterface): ReactElement {
    return(
            <div className="History">
                History:
                {props.history.map((value: HistoryItemInterface, key) => {
                    return <div key={key}><button onClick={() => props.moveBackInHistoryHandler(key)}>{value.text}</button><br/></div>
                })};
            </div>
    )
}