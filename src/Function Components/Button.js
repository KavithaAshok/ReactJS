function Button(props) {
    const mystyle = {
        color: "white",
        padding: "10px",
        fontFamily: "Arial",
        margin: "10px"
    };
    return (
        <div style={mystyle}>
            <button className="btn btn-success">{props.text}</button>
            <h1 style={{color: "brown"}}>{props.myButton}</h1>
        </div>
    )
}

export default Button;