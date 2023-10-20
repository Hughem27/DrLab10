import { useState } from "react";



function Create() {

    const [title, setTitle] = useState('');     //  Initializing our title value
    const [author, setAuthor] = useState('');   //  Initializing our Author value
    const [cover, setCover] = useState('');     //  Initializing our cover value

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Title: " + title +    //  Displaying our values to console to ensure they've been taken
            " Cover: " + cover +
            " Author: " + author);
    }

    return (
        <div>
            <h3>Hello World this is Create</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    {/* Label To prompt user to input title */}
                    <label >Edit Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}  //  onChange = when this changes, e.g when title changes set the title as the value
                    />
                </div>

                <br></br>
                <hr></hr>
                <br></br>

                <div className="form-group">
                    {/* Label To prompt user to input title */}
                    <label>Input Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}  //  onChange = when this changes, e.g when author changes set the author as the value
                    />
                </div>

                <br></br>
                <hr></hr>
                <br></br>


                <div className="form-group">
                    {/* Label To prompt user to input title */}
                    <label>Input Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}  //  onChange = when this changes, e.g when cover changes set the cover as the value
                    />
                </div>

                <br></br>
                <hr></hr>
                <br></br>

                <div>
                    <input type="submit"    //  Button to submit form
                        value="Add Book"
                    ></input>
                </div>
            </form>


        </div>
    );
}

export default Create;