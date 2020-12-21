import React from 'react';
import "../styles/Watch.css";
import { Button } from '@material-ui/core';



  
  const SwitchButton = (props) => (
    <Button className="btn_watch" onClick={props.click}>{props.active ? "Off" : "On"}</Button>
  );
  

  class Clock extends React.Component {
    // interval = "";
  
    state = {
      time: this.getTime(),
    };
  
    getTime() {
      const currentTime = new Date();
      // console.log(currentTime);
      return {
        hours: currentTime.getHours(),
        minutes: currentTime.getMinutes(),
        seconds: currentTime.getSeconds(),
      };
    }
  
    setTime() {
      // console.log(this);
      const time = this.getTime();
      this.setState({ time });
    }
    componentDidMount() {
      console.log("watch displayed");
      this.interval = setInterval(this.setTime.bind(this), 1000);
      // console.log(index);
    }
  
    componentWillUnmount() {
      console.log("watch removed");
      clearInterval(this.interval);
    }
  
    render() {
      // this.getTime()
      const { hours, minutes, seconds } = this.state.time;
      return (
        <>
        <div className="bgClock">
          <div className="clock">
            {hours}:{minutes > 9 ? minutes : `0${minutes}`}:{seconds > 9 ? seconds : `0${seconds}`}
          </div>
          </div>
        </>
      );
    }
  }



  class Watch extends React.Component {
    state = {
      active: true,
    };
  
    handleClick = () => {
      this.setState((state) => ({
        active: !state.active,
      }));
    };
  
    render() {
      return (
        <div>
          {this.state.active && <Clock />}
          <SwitchButton active={this.state.active} click={this.handleClick} />
          
          
        </div>
      );
    }
  }
  
  export default Watch;