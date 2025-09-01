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
      <button className="button">Book a Call</button>
    </div>
  );
};

const CardComponent = ({title = '', link = '',
    description = 'Using Lorem ipsum to focus attention on graphic elements in a webpage design proposal.'}) => {
    return (
        <div className="card-container">
            <div className="card-title">
                {title}
            </div>
            <div className="card-description">
                {description}
            </div>
            <div className="card-button-wrapper">
                <a className="card-button" href={link} target="_blank" rel="noreferrer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-external-link"
                >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                </a>
            </div>
        </div>
    );
};

const WorkSample = () => {
    const workSamples = [
        {
            title : "Web content",
            link : "https://drive.google.com/drive/folders/1Owk_0cSTYyc7vHXrRDNCNFyC7A_YenFB",
            description : ""
        },
        {
            title : "Freelancing work",
            link : "https://drive.google.com/drive/folders/1jzq5VyQXvWp0qDbzXxE1MYoCe86NOmwt",
            description : ""
        },
        {
            title : "Mailmodo",
            link : "https://www.mailmodo.com/guides/author/nitesh-chand/",
            description : ""
        },
    ]
    return (
        <div className="workSample-container">
          {workSamples.map((workSample,key) => (
            <CardComponent key = {key} title = {workSample.title} link = {workSample.link} />
          ))}
        </div>
    )
}



export default Services