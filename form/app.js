let TextInput = () => {
    return(
        <div>
            <form>
              <label>
                 Name:
                 <input type="text" name="name" />
              </label>
              <br></br>

              <label>
                  Occupation:
                  <input type="text" occupation="occupation" />
              </label>
              <br></br>

              <label>
                  Years of experience:
                  <input type="text" years of experience="years of experience" />
              </label>
 
            </form>
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