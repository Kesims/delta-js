import "./App.css";
import {Map} from "./components/Map";
import { ResultBar } from "./components/ResultBar";
import { History } from "./components/History";
import {useState} from "react";
import {MAP_SIZE} from "./config";
function App() {

    const [mapState, setMapState] = useState<string[]>(Array(MAP_SIZE*MAP_SIZE).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState<string>("X");
    const [winner, setWinner] = useState<string>("Unknown");

    const winningCombo = [
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    function checkWinner(): boolean {
        if(winner != "Unknown" ) return true;
        winningCombo.forEach((winnerRow: number[]) => {
            if(["X", "O"].includes(mapState[winnerRow[0]-1]) && mapState[winnerRow[0]-1] == mapState[winnerRow[1]-1] && mapState[winnerRow[1]-1] == mapState[winnerRow[2]-1])
                return true;
        })
        return false;
    }

    const tileClickHandler = (index: number, claimer: string) => {
        console.log(winner)
        if(mapState[index] != null || winner != "Unknown") return;

        let changeMap = [...mapState];
        changeMap[index] = claimer;
        setMapState(changeMap);

        if(checkWinner()){
            setWinner(currentPlayer);
            return;
        }

        setCurrentPlayer(currentPlayer == "X" ? "O":"X");
    }

    const resetHandler = () => {
        setMapState(Array(MAP_SIZE*MAP_SIZE).fill(null));
        setCurrentPlayer("X");
        setWinner("Unknown");
    }


    return <div className="App">
        <Map mapState={mapState} tileClickHandler={tileClickHandler} currentPlayer={currentPlayer} resetHandler={resetHandler}></Map>
        <ResultBar winnerPlayer={winner}></ResultBar>
        <History></History>
    </div>;
}

export default App;
