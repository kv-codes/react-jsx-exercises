let ListGroupItem = () => {
    return(
        <div>
            <li>hahahaha</li>
        </div>

    )

}

let ListGroup = () => {
    return(
        <div>
        <ListGroupItem></ListGroupItem>
        <ListGroupItem></ListGroupItem>
        <ListGroupItem></ListGroupItem>
        <ListGroupItem></ListGroupItem>
        <ListGroupItem></ListGroupItem>
        <ListGroupItem></ListGroupItem>
        </div>
    ) 
}

ReactDOM.render(<ListGroup />, document.getElementById('root'))