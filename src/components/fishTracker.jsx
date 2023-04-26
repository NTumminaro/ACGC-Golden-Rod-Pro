
function FishTracker({ fish }) {
    // dynamically change between Large and Small Sprites with a toggle, should be easy down the line
    return <img src={`/Sprites/Small Sprites/${fish.img}`} />;
}

export default FishTracker;
