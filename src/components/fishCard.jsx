import { Button, Card } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'

function FishCard({fishCount, fishUpdate}) {

    const fishHandler = () => {
        //some sort of target should go here
        fishUpdate("Some sort of Target for the fish");
    }
    // possible loops?
    return (
        <>
            <Button onClick={fishHandler}>
                <Card>
                    <CardMedia
                        component="img"
                        image="/Sprites/Small Sprites/angelfish.png"
                    />
                    <h1>Angelfish</h1>
                </Card>
            </Button>
        </>
    )
};

export default FishCard