import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import './CarouselPage.css'


export default class CarouselPage extends React.Component{
    state={
        images:[]
    }
    componentDidMount() {
        return fetch(`https://images-api.nasa.gov/search?q=comet`,{
            headers:{
                'content-type':'application/json', 
                
            }
        })
        .then(res => { 
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json().then(img =>{
                
                console.log('img', img.collection.items)
                let imgArr =  img.collection.items.map(i => {
                    
                    let arr = i["links"]
                    
                    if( Array.isArray(arr) ){
                     
                        return arr[0]["href"]
                    }
                }
                ) 

                  this.setState({
                      images : imgArr
                  })
              })
          })
          .catch(error => {
            console.log({error})
          })
    }
    

    render(){
      const  images = this.state.images
     
      return(
            <div className = 'carousel__page'>
            CarouselPage
            <Carousel images = {this.state.images}/>
         
        </div>
    )
}
}