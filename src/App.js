import './App.scss';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import Services from './Components/Services/Services';
import TestimonialCard from './Components/TestimonialCard/TestimonialCard';

function App() {
  return (
    <div className='main'
      style={{
        height: '130vh', // fallback to 100vh/100svh if needed via CSS
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
        <div className='footer'>
          <div className="social-links-container">
            <a href="https://www.instagram.com/nick_the_comedian/" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.999" viewBox="0 0 16 15.999" src="https://www.instagram.com/nick_the_comedian/">
                <path id="Subtraction_4" data-name="Subtraction 4" d="M6-582H-2a4,4,0,0,1-4-4v-8a4,4,0,0,1,4-4H6a4,4,0,0,1,4,4v8A4,4,0,0,1,6-582ZM2-594a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4.005,4.005,0,0,0,2-594Zm4.5-2a1,1,0,0,0-1,1,1,1,0,0,0,1,1,1,1,0,0,0,1-1A1,1,0,0,0,6.5-596ZM2-587.5A2.5,2.5,0,0,1-.5-590,2.5,2.5,0,0,1,2-592.5,2.5,2.5,0,0,1,4.5-590,2.5,2.5,0,0,1,2-587.5Z" transform="translate(6 598)"></path>
                </svg>
            </a>
            <a href="https://www.facebook.com/nitesh.chand.378" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                </svg>    
            </a>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                </svg>
            {/* </a> */}
            <a href="https://www.linkedin.com/in/nitesh-chand1998/" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
            </a>   
          </div>
        </div>
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
