import React from 'react'
import './MasonryPage.css'
import {MasonryLayout} from '../../components/Masonry'
export default function MasonryPage(){
  
    
    return(
        <div className = 'masonry__page'>
<MasonryLayout columns={4} gap={25}>
  {
    [...Array(12).keys()].map(key => {
      const height = 200 + Math.ceil(Math.random() * 300);
  
      return (
        <div style={{height: `${height}px`, border:`1px solid`}} >key</div>
       )
     })
  }
</MasonryLayout>
        </div>
    )
}