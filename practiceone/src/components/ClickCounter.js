
export default function ClickCounter({count,incrementCounter}){

    return(
        <div>
            <button type = 'button' onClick = {incrementCounter}> Click {count} Times </button>
        </div>
    );

}