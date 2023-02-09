import {ReactElement} from "react";
import "../css/Map.css";
import {MAP_SIZE} from "../config";

interface MapPropsInterface {
    mapState: string[];
    tileClickHandler: (index: number, claimer: string) => void;

    currentPlayer: string;

    resetHandler: () => void;
}


export function Map(props: MapPropsInterface): ReactElement {
    return (
            <div className="MapComponent">
                <div className="mapWrapper">
                    {props.mapState.map((el, index) => {
                        return <button className="mapTile" key={index} onClick={() => props.tileClickHandler(index, props.currentPlayer)}>{el}</button>
                    })}
                </div>
                <br/>
                <div>Player: {props.currentPlayer}</div>
                <button onClick={() => props.resetHandler()}>Reset</button>
            </div>
    );
}