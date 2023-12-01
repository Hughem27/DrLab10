import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import  Button  from 'react-bootstrap/Button';
import axios from 'axios';

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
                <Link to={'/edit/'+props.myBook._id} style={{margin:'5px'}} variant='primary' className='myButtons'> Edit </Link>
                <Button   variant='danger' className='myButtons'
                // style={{width:'200px', margin:'10px', justifyContent: 'center',}}
                 onClick={
                    (e)=>{
                        e.preventDefault();

                        axios.delete('http://localhost:4000/api/book/'+props.myBook._id)
                        .then((res)=>{props.Reload()})    //    Calling the Reload in .then  
                        .catch();
                    }
                } >Delete </Button>
            </Card>


        </div>

    )

}
export default BookItems;