//  Read Component 

import Books from "./Books";

function Read() {

    const data = [
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg", //  When taking from pdf make sure one line and get rid of arrow
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",   //  When taking from pdf make sure one line and get rid of arrow
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
        {
        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        "isbn": "1617292036",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",   //  When taking from pdf make sure one line and get rid of arrow
        "status": "MEAP",
        "authors": ["Simon Holmes"],
        "categories": []
        }
        ];


    return (
        <div>
            <h3>Hello World this is Read</h3>
            {/* Importing books */}
            <Books myBooks= {data}></Books> 


        </div>
    );
}

export default Read;