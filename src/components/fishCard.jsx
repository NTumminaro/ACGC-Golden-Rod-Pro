import { Button, Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

function FishCard({ fish, updateFish }) {
    console.log(fish);

    return (
        <>
            <Button
                onClick={() => {
                    updateFish(fish);
                }}
            >
                <Card>
                    <CardMedia
                        component="img"
                        image={`/Sprites/Small Sprites/${fish.img}`}
                    />
                    <h1>{fish.name}</h1>
                </Card>
            </Button>
        </>
    );
}

export default FishCard;
