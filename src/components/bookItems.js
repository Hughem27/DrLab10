import Card from 'react-bootstrap/Card';

//  Function to show books, to be embeded within read
function BookItems(props) {    

    return (
        <div>
            {/* <h3>{props.myBook.title}</h3>
            <br></br>
            <img src={props.myBook.thumbnailUrl} ></img>
            <br></br>
            <h3>{props.myBook.authors}</h3>
            <hr></hr> */}

            <Card>
                <Card.Header>{props.myBook.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        {/* For img make sure to do /> instead of </img> */}
                        <img src={props.myBook.thumbnailUrl}/>  
                        <footer>
                            {props.myBook.authors[0]}
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>


        </div>

    )

}
export default BookItems;