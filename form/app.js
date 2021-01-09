let TextInput = () => {
    return(
        <div>
            <p>I like the color <span style = {{color: "blue", fontWeight: "bold"}}>blue</span> because it's so cool</p>
            <p>Or select <span style ={{color:"red"}}>red</span> if you're a bummer</p>
            <p>Then press the <span style ={{color: "green"}}> Submit</span> button</p>
        </div>
    )
}

let YesNoRadio = () => {
    return(
        <div>
            <button><span style ={{color: "blue"}}>yes</span></button>
            <button><span style ={{color: "red"}}>no</span></button>
        </div>        
    )
    
}

let SubmitButton = () => {
    return(
        <div>
            <br></br>
            <button><span style ={{color: "green", fontWeight: "bold"}}>Submit!</span></button>
        </div>
    )
}

let Form = () => {
    return(
        <div>
            <TextInput></TextInput>
            <YesNoRadio></YesNoRadio>
            <SubmitButton></SubmitButton>
        </div>
    )
}


ReactDOM.render(<Form />, document.getElementById('root'))