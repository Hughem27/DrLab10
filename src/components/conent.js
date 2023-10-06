// (4.a) - Created the content file in a new folder Components under src
// Content Component
function Content() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <br></br>
        <h1>This is Home</h1>
        <br></br>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>


      </header>
    </div>
  );
}

export default Content;