import { useState } from "react";
import './Services.scss'

const Services = () => {
    const [selected , setSelected] = useState('service');
    return(
        <div className="Services-main">
            
            <div class="glass-radio-group">
                <input type="radio" name="plan" id="glass-silver" checked={selected === 'service'} onClick={() => setSelected('service')}/>
                <label for="glass-silver">Services</label>

                <input type="radio" name="plan" id="glass-gold" checked={selected === 'work'} onClick={() => setSelected('work')}/>
                <label for="glass-gold">Work Sample</label>

                {/* <input type="radio" name="plan" id="glass-platinum" />
                <label for="glass-platinum">Platinum</label> */}

                <div class="glass-glider"></div>
            </div>

            <div className="selected-service-main">
                {selected === 'service' ? <ServicesSection/> : <WorkSample/>}
            </div>

        </div>
        
    )
}

const ServicesSection = () => {
  const title = "Services for Businesses (Content & Copywriting)";
  const services = [
    {
      key: 1,
      service:
        "SEO Blog Writing – Engaging, well-researched blog posts that improve rankings and attract the right audience.",
    },
    {
      key: 2,
      service:
        "Website & Landing Page Copy – Conversion-focused copy that communicates your brand clearly and turns visitors into customers.",
    },
    {
      key: 3,
      service:
        "Email & Newsletter Copy – Copy that builds relationships, nurtures leads, and drives action.",
    },
    {
      key: 4,
      service:
        "Social Media Content – Captions, campaigns, and content that boost engagement across platforms.",
    },
    {
      key: 5,
      service:
        "Content Strategy Support – Helping businesses plan and align content with long-term goals.",
    },
    {
      key: 6,
      service:
        "Stand-Up Comedy Writing – Original jokes, sets, and punchlines crafted with timing, relatability, and wit.",
    },
    {
      key: 7,
      service:
        "Scriptwriting – Scripts for short films, sketches, or web series with a focus on storytelling, dialogue, and flow.",
    },
    {
      key: 8,
      service:
        "Humor-Driven Copy – Copy that uses humor to stand out in ads, campaigns, and branding.",
    },
  ];

  return (
    <div className="card-service">
      <div className="card-service-service-border"></div>
      <div className="card-service_title-container">
        <span className="card-service_title">{title}</span>
        <p className="card-service_paragraph">
          Perfect for your next content, leave it to us and enjoy the result!
        </p>
      </div>
      <ul className="card-service-list">
        {services.map(({ key, service }) => (
          <li key={key} className="card-service-list_item">
            <span className="check">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="check_svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span className="list_text">{service}</span>
          </li>
        ))}
      </ul>
      <button className="button">Contact me</button>
    </div>
  );
};

const WorkSample = () => {
  const cardTitle = "Work Samples"
  const workSamples = [
      {
          key : 1,
          title : "Web content",
          link : "https://drive.google.com/drive/folders/1Owk_0cSTYyc7vHXrRDNCNFyC7A_YenFB",
      },
      {
          key : 2,
          title : "Freelancing work",
          link : "https://drive.google.com/drive/folders/1jzq5VyQXvWp0qDbzXxE1MYoCe86NOmwt",
      },
      {
          key : 3,
          title : "Mailmodo",
          link : "https://www.mailmodo.com/guides/author/nitesh-chand/",
      },
  ]
  return (
    <div className="card-service">
      <div className="card-service-service-border"></div>
      <div className="card-service_title-container">
        <span className="card-service_title">{cardTitle}</span>
        <p className="card-service_paragraph">
          Below are some samples of my work. Please feel free to explore them. 
        </p>
      </div>
      <ul className="card-service-list">
        {workSamples.map(( sample, key ) => (
          <li key={key} className="card-service-list_item">
            <span className="check">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="check_svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span className="sample-text list_text">{sample.title}</span>
            <span className="sample-link">
              <a href={sample.link} target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                </svg>
              </a>
            </span>
          </li>
        ))}
      </ul>
      <button className="button">Contact me</button>
    </div>
  )
}



export default Services