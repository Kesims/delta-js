import { TextField } from "@mui/material";
import {useEffect, useState} from "react";
import {API_KEY} from "../config";

interface SearchBarProps {
    location: string;
    setLocationHandler: (newLocation: string) =>void;
}

export function SearchBar(props: SearchBarProps) {

    const handleKeyPress = (event: any) => {
        if(event.key === 'Enter'){
            props.setLocationHandler(event.target.value)
        }
    }


    return (
            <div className="searchBar">
                <TextField fullWidth label="Vyhledávání" id="fullWidth" onKeyPress={handleKeyPress} />
            </div>
            )
}