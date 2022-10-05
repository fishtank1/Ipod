import React, { Component } from "react";
import './IpodWheel.css';
import ZingTouch from "zingtouch";

class IpodWheel extends Component {  
  componentDidMount() {
    
    var target = document.querySelector('.wheel-inner-div');
    var region = new ZingTouch.Region(target);

    region.bind(target, 'rotate', function(e) {
      console.log('target rotated');
    });
  }

  render() {
        return (
          <div className='wheel-outer-div'>
            <div className='wheel-inner-div'>
              <div>
                <i className="fa-solid fa-chevron-left menu"></i>
                <i className="fa-solid fa-forward-step slow"></i>
                <i className="fa-solid fa-backward-step fast"></i>
                <i className="fa-solid fa-pause pause"></i>
              </div>
            </div>
        </div>
      )
    }
}

export default IpodWheel;