export function Sticker(props) {
    const sticky_dog = `sticky-dog-${props.alignment}.jpg`;
    return (

        <div>
            <img src={`${process.env.PUBLIC_URL}/Assets/${sticky_dog}`} alt={`${sticky_dog}`} width="200" height="300" />
        </div>
    );
};

export function Grass() {
    return (

        <footer className="grass">
            <img src={`${process.env.PUBLIC_URL}/Assets/grass.png`} alt='grass' />
        </footer>
    );
}