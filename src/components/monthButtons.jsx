import { Button } from "@mui/material";

// This will be able to take in the fish from the json, and create a button 
// for each month that still appears in the list of fish (i.e. not in the caught fish array)
function MonthButtons({fish}) {
    return (
        <Button>{fish.month}</Button>
    )
}

export default MonthButtons;