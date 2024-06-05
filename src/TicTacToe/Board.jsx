import React, {useEffect, useState} from "react";
import './main.css'
import {Cell} from "./Cell.jsx";
import {gameLogic} from "./gameLogic.js";

const initiateDefaultState = () => {
    return Array(9).fill(0).map((elem, index) => ({
        id: index,
        color: "white",
        value: ""
    }))
}


export const Board = () => {
    const [boardState, setBoardState] = useState(initiateDefaultState())
    const [currentPlayer, setCurrentPlayer] = useState("X")
    const [res, setRes] = useState({status: false, player: ""})

    useEffect(() => {
        const currentGameResults = gameLogic(boardState, ["X", "O"], currentPlayer)
        if(typeof currentGameResults!=="boolean"){
            const isWin = currentGameResults.player1 || currentGameResults.player2
            setRes({status: true, player: isWin ? currentGameResults.player1 ? "X" : "O" : "Friendship" })
        }
        else{
            setRes({status: currentGameResults, player: currentGameResults ? currentPlayer : ""})
        }
        // console.log(gameLogic(boardState, ["X", "O"], currentPlayer), boardState)
        setCurrentPlayer(prevState => prevState==="X" ? "O" : "X")
    }, [boardState]);

    const onClickHandler = (e) => {

        const {id} = e.target


        const elemForChanging = boardState[parseInt(id)]
        elemForChanging.color = currentPlayer==="X" ? "red" : "blue"
        elemForChanging.value = currentPlayer


        setBoardState((prevState) => ([
            ...prevState.slice(0, parseInt(id)),
            elemForChanging, ...prevState.slice(parseInt(id) + 1, prevState.length)
        ]))

    }

    return <div className={"board"}>
        {!res.status ?boardState.map((cell, index) => <Cell _key={index} color={cell.color} value={cell.value} onClickHandler={(e)=>onClickHandler(e)}/>) : <h1>{res.player} Wins!</h1>}
    </div>
}