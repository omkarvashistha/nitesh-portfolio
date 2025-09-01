import './App.scss';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import Services from './Components/Services/Services';
import TestimonialCard from './Components/TestimonialCard/TestimonialCard';

function App() {
  return (
    <div className='main'
      style={{
        minHeight: '100dvh', // fallback to 100vh/100svh if needed via CSS
        // layer gradient (on top) + image (below)
        backgroundImage:
          "conic-gradient(from 360deg at 50% 50%, rgba(143,119,181,0.729) 0%, rgba(64,65,71,0.69) 0%), url('/bg1.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'scroll',
        margin: 0,
      }}
    >
        <AboutSection/>

    </div>
  );
}

function AboutSection() {
  const testimonials = [
    {
      name : 'Devin',
      pfp : 'devin1.jpg',
      description : '"Working with Nitesh has been an absolute pleasure. At Text Emporium, he consistently showed exceptional attention to detail and a commitment to timely, high-quality improvements. Reliable, honest, and client-focused, Nitesh has been a true asset to our company, and I highly recommend him to anyone seeking dedicated talent."'
    },
    {
      name : 'Grace edwards',
      pfp : 'grace.jpg',
      description : '"As a Content Manager for an SEO agency, I’ve worked with Nitesh for over six months, and he consistently delivers high-quality, SEO-focused copy. Open to feedback, adaptable, and reliable, he approaches every project with professionalism. His dedication makes him an invaluable team member, highly recommended for any writing role."'
    },
  ]

  return (
    <div className="inner">
      <div className='left-section'>
        {/* <div className='intro-section'>
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
        </div> */}
        <ProfileCard />

        <div className='article-links'>
          {/* <ul  className="buttons">
      
            <li>
              <a
                href="https://drive.google.com/drive/folders/1Owk_0cSTYyc7vHXrRDNCNFyC7A_YenFB"
                className="button n01"
                role="button"
                rel="noopener noreferrer"
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
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="label">Freelancing work</span>
              </a>
            </li>

            <li>
              <a href="https://www.mailmodo.com/guides/author/nitesh-chand/"  rel="noopener noreferrer" className="button n03" role="button" target="_blank">
                <span className="label">Mailmodo</span>
              </a>
            </li>
          </ul> */}
          <Services />
        </div>
      </div>

      <div className='right-section'>
        <div className='testimonial-section'>
          <h1>Testimonials</h1>
          <div className='testimonial-cards-section'>
            {testimonials.map((testimonial,key) => (
              <TestimonialCard 
                key={key}
                name={testimonial.name} 
                pfp={testimonial.pfp} 
                description={testimonial.description}
              />
            ))}
          </div>
          
        </div>
      </div>
      
      
      
    </div>
  );
}

export default App;
