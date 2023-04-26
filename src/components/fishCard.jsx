import { Avatar, Button, Card, CardHeader, CardMedia } from "@mui/material";

function FishCard({ fish, updateFish }) {
    console.log(fish);

    return (
        <>
            {/* <Button
                onClick={() => {
                    updateFish(fish);
                }}
            > */}
            <Card
                sx={{
                    "&:hover": {
                        backgroundColor: "primary.main",
                        opacity: [0.9, 0.8, 0.7],
                        cursor: "pointer",
                    },
                }}
                onClick={() => {
                    updateFish(fish);
                }}
            >
                <CardHeader
                    avatar={
                        <Avatar src={`/Sprites/Small Sprites/${fish.img}`} />
                    }
                    title={fish.name}
                />
            </Card>
            {/* </Button> */}
        </>
    );
}

export default FishCard;
