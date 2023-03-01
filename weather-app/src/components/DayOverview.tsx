import { Card, CardContent, Typography } from "@mui/material";

interface DayOverviewProps {
    weatherData: any;
}

export function DayOverview(props: DayOverviewProps) {

    return(
            <div className="dayOverview">
                <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.weatherData["datetime"]}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {props.weatherData["max_temp"]}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {props.weatherData["min_temp"]}
                    </Typography>
                    <Typography variant="body2">
                        {props.weatherData["weather"]["description"]}
                    </Typography>
                </CardContent>
                </Card>
            </div>
            )
}