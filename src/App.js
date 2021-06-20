
import './App.css';
import { Switch, Route, withRouter } from "react-router-dom";
import { useState } from 'react';
import Homepage from './components/Homepage';
import { useEffect } from 'react';
import Mynav from './components/Mynav';
import 'aos';
import Aos from 'aos';

function App(props) {
  const [modeSwitch, UpdateSwitch] = useState(null)
  const [fetching, updateFetching] = useState(true)

  Aos.init({
    duration: 1500,

  });

  useEffect(() => {
    const parsedMode = localStorage.getItem("modeSwitch") || 0
    UpdateSwitch(parsedMode)
  }, [])

  useEffect(() => {
    localStorage.setItem("modeSwitch", modeSwitch)
    updateFetching(false)
  }, [modeSwitch])

  const handleTheme = () => {
    if (!modeSwitch) {
      UpdateSwitch('dark')
    } else {
      UpdateSwitch(null)
    }
  }

  if (fetching) {
    <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_e8Sg3j.json" background="transparent" speed="1" style={{ width: '300px', height: '300px' }}
      controls autoplay></lottie-player>
  }
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
