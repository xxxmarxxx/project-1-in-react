import React from "react";
// import { Route, Switch } from 'react-router-dom'
import image1 from "../assets/image_bg_header_1.jpg";
import "../styles/Header.css";
// import Button from '@material/react-button';
import { Button } from '@material-ui/core';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageIsActive: false,
    };
    this.handlerMessageButton = this.handlerMessageButton.bind(this);
  }

  handlerMessageButton() {
    this.setState({
      messageIsActive: !this.state.messageIsActive,
    });
  }

  render() {
    console.log(this.state.messageIsActive);
    const text = (
      <>
        <p className="banner__title banner__title--creative"> creative</p>
        <p className="banner__title banner__title--innovation"> innovation</p>
        <p className="banner__title banner__title--technology"> technology</p>
        <p className="banner__title banner__title--success"> success</p>
        <p className="banner__title banner__title--idea"> idea</p>
        <p className="banner__title banner__title--development"> development</p>
        <p className="banner__title banner__title--art"> art</p>
        <p className="banner__title banner__title--work"> work</p>
        <p className="banner__title banner__title--inspiration"> inspiration</p>
      </>
    );

    return (
      <>
        <div className="banner page__header">
          <img src={image1} alt="image1" className="banner__image" />
          <Button 
          variant="contained"
          color="second"
          // variant="outlined"
            onClick={this.handlerMessageButton}
            className="button banner__btn button--large"
          >
            {this.state.messageIsActive ? "Off" : "On"}
          </Button>
          {/* {this.state.messageIsActive  ? <p>{text}</p> : null} */}
          {this.state.messageIsActive && <p>{text}</p>}
        </div>
      </>
    );
  }
}
export default Header;

// const Header = () => {

//   return (
//     <>
//       <div className="banner page__header">
//         <img src={image1} alt="image1" className="banner__image" />
//         <p className="banner__title banner__title--creative"> creative</p>
//         <h2 className="banner__title banner__title--innovation"> innovation</h2>
//         <p className="banner__title banner__title--technology"> technology</p>
//         <p className="banner__title banner__title--success"> success</p>
//         <p className="banner__title banner__title--idea"> idea</p>
//         <p className="banner__title banner__title--development"> development</p>
//         <p className="banner__title banner__title--art"> art</p>
//         <p className="banner__title banner__title--work"> work</p>
//         <p className="banner__title banner__title--inspiration"> inspiration</p>
//         <button className="button banner__btn button--large">Enter</button>
//       </div>
//     </>
//   );
// };

// export default Header;
