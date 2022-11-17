import './App.scss';

function App() {
  return (
    <>
      <header>
        <div class="header">
          <h1>James Patterson | Front End Software Engineer</h1>
          <br />
          <h3>jamespatterson.feswe@yahoo.com</h3>
          <br />
          <h5>
            <a href="https://www.linkedin.com/in/james-earl-patterson">LinkedIn</a> | 
            <a href="https://github.com/xrzy1985">GitHub</a> | 
            <a href="mailto: jamespatterson.feswe@yahoo.com">Email</a>
          </h5>
        </div>
      </header>
      <div class="profile-photo">
        <img src={require('./assets/profile.jpg')}
              alt="A man named James smiling with short hair and a grin on his face"
              height="200px" />
      </div>
    </>
  );
}

export default App;
