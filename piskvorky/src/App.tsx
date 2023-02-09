import "./App.css";
import {Map} from "./components/Map";
import { ResultBar } from "./components/ResultBar";
import { History } from "./components/History";
import {useState} from "react";
import {MAP_SIZE} from "./config";
import {HistoryItemInterface} from "./interfaces/HistoryItem";
function App() {

    const [mapState, setMapState] = useState<string[]>(Array(MAP_SIZE*MAP_SIZE).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState<string>("X");
    const [winner, setWinner] = useState<string>("Unknown");
    const [history, setHistory] = useState<HistoryItemInterface[]>(Array());

    const addHistoryMove = (text: string, mapState: string[]) => {
        let changeHistory = [...history];
        const historyItem = {text: text,
                            savedState: mapState}
        changeHistory.push(historyItem);
        setHistory(changeHistory);
    }

    const moveBackInHistoryHandler = (index: number) => {
        const newState = history[index];
        setMapState(newState.savedState);
        addHistoryMove("History rollbacked!", newState.savedState);
    }

    const tileClickHandler = (index: number, claimer: string) => {
        if(mapState[index] != null || winner != "Unknown") return;

        let changeMap = [...mapState];
        changeMap[index] = claimer;
        setMapState(changeMap);
        addHistoryMove(`${claimer} added his block to ${index}`, changeMap);

        if(checkWinner(changeMap)){
            setWinner(currentPlayer);
            addHistoryMove(`Player ${currentPlayer} won the game!`, changeMap)
            return;
        }

        setCurrentPlayer(currentPlayer == "X" ? "O":"X");
    }

    const resetHandler = () => {
        setMapState(Array(MAP_SIZE*MAP_SIZE).fill(null));
        setCurrentPlayer("X");
        setWinner("Unknown");
        setHistory(Array());
    }


    return <div className="App">
        <Map mapState={mapState} tileClickHandler={tileClickHandler} currentPlayer={currentPlayer} resetHandler={resetHandler}></Map>
        <ResultBar winnerPlayer={winner}></ResultBar>
        <History history={history} moveBackInHistoryHandler={moveBackInHistoryHandler}></History>
    </div>;
}

export default App;

const winningCombo = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner(mapStateCheck: string[]): boolean {
    try {
        winningCombo.forEach((winnerRow: number[]) => {
            if(["X", "O"].includes(mapStateCheck[winnerRow[0]]) && mapStateCheck[winnerRow[0]] === mapStateCheck[winnerRow[1]] && mapStateCheck[winnerRow[1]] === mapStateCheck[winnerRow[2]]) {
                throw new Error();
            }
        })
    } catch (exception) {
        return true;
    }
    return false;
}
