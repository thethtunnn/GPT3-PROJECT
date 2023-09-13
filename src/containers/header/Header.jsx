import React from 'react' 
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import './header.css';
import { Typewriter } from 'react-simple-typewriter'




const Header = () => {
  return (
    <div className='gpt3__header section__padding' id="home">
      <div className='gpt3__header-content'>
        
      <h1 className='haead_titlestyle'>
        
       <span >
       <Typewriter 
            words={['Let_s Build Something amazing witth GPT-3 Open AI']}
            loop= {3}
            cursor
            cursorStyle='>'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />

       </span >
          
         
        
      
  
</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thouthts all exercise blessing. Indulgence way everything joy alteration bositerrous the attachmen. Party we years to order allow asked of. </p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address'></input>
          <button type='button'>Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>1.600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className='gpt3__header-image'>
        <img src={ai} alt="ai" />
      </div>

    </div>
  )
}

export default Header