import React, { Component } from "react";
import './IpodWheel.css';
import ZingTouch from "zingtouch";



class IpodWheel extends Component {  
  componentDidMount() {
    var currentAngle = 0;
    var target = document.querySelector('.wheel-inner-div');
    var region = new ZingTouch.Region(target);
    document.querySelector('.wheel-outer-div').style.transform = 'rotate(0deg)';
    
    region.bind(target, 'rotate', function(e) {
      currentAngle += e.detail.distanceFromLast;
      var rotatable = currentAngle;
      console.log(rotatable);
    });
  }

  render() {
        return (
          <div className='wheel-outer-div'>
            <div className='wheel-inner-div'>
              <div>
                <i className="fa-solid fa-chevron-left menu" draggable="false"></i>
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