import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

//  Function to show books, to be embeded within read
function BookItems(props) {    

    return (
        <div>           

            <Card>
                <Card.Header>{props.myBook.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        {/* For img make sure to do /> instead of </img> */}
                        <img src={props.myBook.cover}/>  
                        <footer>
                            {props.myBook.author}
                        </footer>
                    </blockquote>
                </Card.Body>
                {/* Link is to use the edit function, we're then adding on the id to edit a specific book */}
                <Link to={'/edit/'+props.myBook._id} className='btn btn-primary'> Edit </Link>
            </Card>


        </div>

    )

}
export default BookItems;