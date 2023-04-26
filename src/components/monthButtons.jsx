import { Button, ButtonGroup } from "@mui/material";

// This will be able to take in the fish from the json, and create a button 
// for each month that still appears in the list of fish (i.e. not in the caught fish array)
function MonthButtons({ fishData, caughtFish }) {

    function filterFish(event) {
        fishData.filter((fish) => fish.month.includes(event.target.value))
    }


    return (

        <ButtonGroup>
            <Button onClick={filterFish}>01</Button>
            <Button onClick={filterFish}>02</Button>
            <Button onClick={filterFish}>03</Button>
            <Button onClick={filterFish}>04</Button>
            <Button onClick={filterFish}>05</Button>
            <Button onClick={filterFish}>06</Button>
            <Button onClick={filterFish}>07</Button>
            <Button onClick={filterFish}>08</Button>
            <Button onClick={filterFish}>09</Button>
            <Button onClick={filterFish}>10</Button>
            <Button onClick={filterFish}>11</Button>
            <Button onClick={filterFish}>12</Button>
        </ButtonGroup>
    )
}

export default MonthButtons;