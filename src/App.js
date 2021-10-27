


function App() {

  const title="Welcome to my blog"
  const likes = 50

  return (
   
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Likes{likes}</p>
      </div>
    </div>

  );
}

export default App;
