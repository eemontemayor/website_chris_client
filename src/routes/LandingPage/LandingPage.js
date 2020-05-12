import React from 'react'
import './LandingPage.css'
export default class LandingPage extends React.Component{
    state = {
        url:'',
        hdurl:''
      };
    componentDidMount(){
        return fetch(`https://api.nasa.gov/planetary/apod?api_key=Li6qgIZ2Kh7g5Mm68EfrwYejtafKtEwrX1kuXkEn`,{
            headers:{
                'content-type':'application/json', 
            }
        })
        .then(res => { 
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json().then(img =>{

                const {copyright, date, explanation, hdurl, url, title} = img
                console.log(url)
                  this.setState({
                      copyright , date, explanation , hdurl,url,title
                  })
              })
          })
          .catch(error => {
            console.log({error})
          })


    }
    render(){
     console.log('this.state.url', this.state.url)
        return(
            <div className = 'landing_page'>
           {/* {url} */}

           <div className = 'landing_pic_container'>

            <img className = 'landing_pic' src = {this.state.hdurl} style={{backgroundPositionX:'center'}}/>
           </div>

            </div>
    )
}

}