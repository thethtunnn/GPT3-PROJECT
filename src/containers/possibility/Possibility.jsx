import React from 'react'
import possibilityImage from '../../assets/possibility.png'
import './possibility.css';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id="possibility">
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>ARとは？VR・ <br  />MRとの違いを分かりやすく解説</h1>
        <p>その他、製造や建設、医療、不動産といった産業分野での人材教育や生産性向上、訪日外国人向けのナビゲーションなど、ARサービスの活用の幅はどんどん広がってきています。</p>
        <h4>Request Early Access to Get Started</h4>

      </div>

    </div>
  )
}

export default Possibility