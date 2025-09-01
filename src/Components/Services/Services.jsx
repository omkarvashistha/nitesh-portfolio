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
    return (
        <>
            Services        
        </>
    )
}

const WorkSample = () => {
    return (
        <>
            Work Sample        
        </>
    )
}



export default Services