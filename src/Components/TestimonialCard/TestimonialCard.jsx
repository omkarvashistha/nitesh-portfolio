import './TestimonialCard.scss'

const TestimonialCard = ({name = 'devin',pfp = 'user.png',description = ''}) => {
    return (
        <div className="testmonial-card-main">
            <div className="testimonial-left-section">
                <img src={pfp} alt="nitesh profile dp"/>
            </div>

            <div className="testimonial-right-section">
                <h3>{name}</h3>
                <span>
                    {description}
                </span>
            </div>
        </div>
    )
}

export default TestimonialCard