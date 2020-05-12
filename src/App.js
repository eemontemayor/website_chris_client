import React from 'react'
import './App.css'
import { Route, Switch, Link,NavLink } from 'react-router-dom'
import {Sidebar} from './components/Sidebar/Sidebar'
import LandingPage from './routes/LandingPage/LandingPage'
import CarouselPage from './routes/CarouselPage/CarouselPage'
import MasonryPage from './routes/MasonryPage/MasonryPage'
class App extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }
  componentDidMount() {

  }

  render(){
    return (

      <div className='App'>
       
      <main className='App__main'>
        <Switch>
      <Route
        exact path ={'/'}
        component = {LandingPage}
      />
         <Route
         path ={'/carousel'}
        component = {CarouselPage}
      />
<Route
         path ={'/Masonry'}
        component = {MasonryPage}
      />
        </Switch>

    </main>
    <nav className='App__nav'>
          <Sidebar width={200} height={'100vh'}>
            <NavLink to = '/'>Home</NavLink>
            <NavLink to = '/carousel'>Carousel</NavLink>
            <NavLink to = '/masonry'>Masonry</NavLink>
            <NavLink to = '/dashboard'>Dashboard</NavLink>
          </Sidebar>
        </nav>
    </div>

    );
  }
    
}

export default App;