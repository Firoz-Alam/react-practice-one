
export default function HoverCounter({count,incrementCounter}){

    return(
        <div>
            <h1  onMouseOver = {incrementCounter}> Hovered {count} Times </h1>
        </div>
    );

}