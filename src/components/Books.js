//  props = properties

import BookItems from "./bookItems";

//  Books is being passed [Data] from read
    function Books(props) {
        

        return props.myBooks.map(

            (book)=>{
                // Each item (book) in my book array is returning bookitem
                return <BookItems myBook={book} key={book._id} Reload={()=>{props.ReloadData()}} ></BookItems>
            }
        );
    }   
    export default Books;