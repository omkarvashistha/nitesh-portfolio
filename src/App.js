import './App.scss';

function App() {
  return (
    <div className='main'
      style={{
        backgroundImage: `conic-gradient(from 360deg at 50% 50%, rgba(143, 119, 181, 0.729) 0%, rgba(64, 65, 71, 0.69) 0%), url('/background.jpg')`,
      }}
    >
        <AboutSection/>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="inner">
      <h1 id="text01" style={{ opacity: 1, transform: 'none' }}>Nitesh Chand</h1>
      <p id="text12" style={{ opacity: 1, transform: 'none' }}>
        <span className="p">
          Since I was a kid, I’ve always had an eye for detail and a passion for
          <br />
          expressing my thoughts as accurately as possible on a blank page. As I
          <br />
          grew older, I realized that writing became my true passion for two main
          <br />
          reasons: first, it allows me to convey the authentic creativity I’m blessed (or
          <br />
          cursed) with, and second, it provides me with a tangible flow that feels
          <br />
          natural and fulfilling in what often feels like an otherwise meaningless
          <br />
          charade we call life.
        </span>
      </p>
      <ul  className="buttons">
        
        <li>
          <a
            href="https://drive.google.com/drive/folders/1Owk_0cSTYyc7vHXrRDNCNFyC7A_YenFB"
            className="button n01"
            role="button"
            target="_blank"
          >
            <span className="label">Web content</span>
          </a>
        </li>

        <li>
          <a
            href="https://drive.google.com/drive/folders/1jzq5VyQXvWp0qDbzXxE1MYoCe86NOmwt"
            className="button n02"
            role="button"
            target="_blank"
          >
            <span className="label">Freelancing work</span>
          </a>
        </li>

        <li>
          <a href="https://www.mailmodo.com/guides/author/nitesh-chand/" className="button n03" role="button" target="_blank">
            <span className="label">Mailmodo</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
