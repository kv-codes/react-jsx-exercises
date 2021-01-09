let Header = () => {
    return(
        <div>
            <h1>Welcome to My Blog!</h1>
        </div>
    )
}
let Article = () => {
    return(
        <div>
            <p>This here is a blog about eating healthy. Say no to processed foods, yes fresh foods.</p>
        </div>
    )
}
let Footer = () => {
    return(
        <div>
            <footer>
                <p> Author: Kevin Le<br></br>
                <a href = "mailto: lekevin98@gmail.com">lekevin98@gmail.com</a></p>
            </footer>
        </div>
    )
}

let Blog = () => {
    return(
        <div>
            <Header></Header>
            <Article></Article>
            <Footer></Footer>
        </div>
    )
}
ReactDOM.render(<Blog />, document.getElementById('root'))