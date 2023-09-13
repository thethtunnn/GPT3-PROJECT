import React from 'react'
import  { Article  }  from '../../components'
import { blog01,blog02,blog03,blog04,blog05 } from './imports';
import './blog.css'


const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id="blog">
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, <br  /> We are 
        blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date ="sep 26, 2021" text="文章の自動生成から、画像の自動生成まで！GPT-3の様々な活用 ?" />
        </div>
        <div className='gpt3__blog-container_groupB'>
            <Article imgUrl={blog02} date ="sep 26, 2021" text="文章の自動生成から、画像の自動生成まで！GPT-3の様々な活用 ?" />
            <Article imgUrl={blog03} date ="sep 26, 2021" text="文章の自動生成から、画像の自動生成まで！GPT-3の様々な活用 ?" />
            <Article imgUrl={blog04} date ="sep 26, 2021" text="文章の自動生成から、画像の自動生成まで！GPT-3の様々な活用 ?"/>
            <Article imgUrl={blog05} date ="sep 26, 2021" text="文章の自動生成から、画像の自動生成まで！GPT-3の様々な活用 ?" />
        </div>


      </div>

    </div>
  )
}

export default Blog