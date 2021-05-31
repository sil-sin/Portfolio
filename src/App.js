
import './App.css';
import { Switch, Route, withRouter } from "react-router-dom";
import { useState } from 'react';
import Homepage from './components/Homepage';
import { useEffect } from 'react';
import Mynav from './components/Mynav';


function App(props) {
  const [modeSwitch, UpdateSwitch] = useState('dark')
  const [fetching, updateFetching] = useState(true)

  useEffect(() => {
    const parsedMode = localStorage.getItem("modeSwitch") || 0
    UpdateSwitch(parsedMode)
  }, [])

  useEffect(() => {
    localStorage.setItem("modeSwitch", modeSwitch)
    updateFetching(false)
  }, [modeSwitch])

  const handleTheme = () => {
    if (modeSwitch === 'light') {
      UpdateSwitch('dark')
    } else {
      UpdateSwitch('light')
    }
  }
  if (fetching) {
    <p> Loading ...</p>
  }
  console.log(modeSwitch)
  return (
    <div fluid="md" className={`${modeSwitch} body`}>
      <Mynav modeSwitch={modeSwitch} onClick={handleTheme} />
      <Switch>
        <Route path='/' render={(routeProps) => {
          return <Homepage modeSwitch={modeSwitch} {...routeProps} />
        }} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
