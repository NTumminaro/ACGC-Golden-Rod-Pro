import { useState } from "react";
import FishCard from "./components/fishCard";
import fishData from "./fish.json";
import Grid from "@mui/material/Unstable_Grid2";
import FishTracker from "./components/fishTracker";
import { Box, Button, ButtonGroup } from "@mui/material";
import MonthButtons from "./components/monthButtons";

function App() {
    const [caughtFish, setCaughtFish] = useState([]);

    // Might change to useEffect?
    function updateFish(newFish) {
        console.log(newFish);
        // You have to return brand new arrays or objects for react to notice
        // a change in the state
        setCaughtFish([...caughtFish, newFish.id]);
    }

    return (
        <Box sx={{ overflow: 'hidden', userSelect: 'none' }}>
            {/* This needs to be a component that passes in the array of fish, and the months their available
            which will be added to the JSON -- The components already named in the components folder */}
            {/* It would pass in for each fish and loop, with a .filter .map system  */}
            <MonthButtons caughtFish={caughtFish} fishData={fishData}/>
            <Grid container spacing={1} minHeight={800}>
                <Grid container xs={8} sx={{ height: "fit-content" }}>
                    {fishData
                        .filter((fish) => !caughtFish.includes(fish.id))
                        .map((fish) => (
                            <Grid key={fish.id} xs={2}>
                                <FishCard
                                    key={fish.id}
                                    fish={fish}
                                    updateFish={updateFish}
                                />
                            </Grid>
                        ))}
                </Grid>
                <Grid container xs={4} columns={8}>
                    {fishData.map((fish) => (
                        <Grid key={fish.id} xs={1}>
                            <FishTracker key={fish.id} fish={fish} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
}

// exports the app function
export default App;
