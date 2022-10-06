import React, { Component } from "react";
import './IpodWheel.css';
import ZingTouch from "zingtouch";



class IpodWheel extends Component {  
  componentDidMount() {
    var indx = 0, array = document.querySelectorAll('.tiles');
    var currentAngle = 0;
    var target = document.querySelector('.wheel-inner-div');
    var region = new ZingTouch.Region(target);
    document.querySelector('.wheel-outer-div').style.transform = 'rotate(0deg)';
    
    region.bind(target, 'rotate', function(e) {
      var prev = Math.floor(currentAngle);
      currentAngle += e.detail.distanceFromLast;
      if(Math.floor(currentAngle) > 15) {
        console.log(indx);
        array[4].classList.remove('currentSelection');
        if(indx != 0) {
          array[indx-1].classList.remove('currentSelection');
        }
        currentAngle = 0;
        array[indx].classList.add('currentSelection');
        indx += 1;
        if(indx == 5) {
          indx = 0;
        }
      }
      // if(Math.floor(currentAngle) > 15) {
      //   array[indx].classList.remove('currentSelection');
      //   if(indx != array.length-1) {
      //     indx += 1;
      //     currentAngle = 0;
      //     array[indx].classList.add('currentSelection');
      //   } else {
      //     indx = 0;
      //   }
      // } else {
      //   if(indx != 0) {
      //     array[indx].classList.remove('currentSelection');
      //     indx -= 1;
      //     currentAngle = 0;
      //     array[indx].classList.add('currentSelection');
      //   } else {
      //     indx = array.length-1;
      //   }
      // }
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