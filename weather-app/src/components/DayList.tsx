import {DayOverview} from "./DayOverview";
import {useEffect, useState} from "react";
import {API_KEY} from "../config";
import {Container, Paper, Stack, styled} from "@mui/material";


interface DayListProps {
    location: string;
}

export function DayList(props: any) {

    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        (async () => {
            const rawWeatherDetail = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?key=${API_KEY}&city=${props.location}`)
            const weatherDetail = await rawWeatherDetail.json();
            setWeatherData(weatherDetail["data"])

        })();
        }, [props.location])

    return(
            <div className="dayList">
                Předpověď na následující dny pro: {props.location}
                <Stack
                    maxWidth="sm"
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    >
                    {weatherData.map((data:object, key) => {
                        return <DayOverview key={key} weatherData={data}/>
                    })}
                </Stack>
            </div>
            )
}