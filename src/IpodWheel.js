import React, { Component } from "react";
import './IpodWheel.css';
import ZingTouch from "zingtouch";


class IpodWheel extends Component { 
  pause = () => {
    console.log('pause clicked');
  }

  back = () => {
    console.log('back clicked');
  }

  fast = () => {
    console.log('fast clicked');
  }

  slow = () => {
    console.log('slow clicked');
  }

  select = () => {
    console.log('select clicked');
  }
  componentDidMount() {
    var indx = 0, array = document.querySelectorAll('.tiles');
    var currentAngle = 0;
    var target = document.querySelector('.wheel-inner-div');
    var region = new ZingTouch.Region(target);
    document.querySelector('.wheel-outer-div').style.transform = 'rotate(0deg)';
    
    region.bind(target, 'rotate', function(e) {
      currentAngle += e.detail.distanceFromLast;
      if(Math.floor(currentAngle) > 15) {
        array[4].classList.remove('currentSelection');
        if(indx !== 0) {
          array[indx-1].classList.remove('currentSelection');
        }
        currentAngle = 0;
        array[indx].classList.add('currentSelection');
        array[indx].style.backgroundImage = `url()`;
        indx += 1;
        if(indx === 5) {
          indx = 0;
        }
      }

      else if(Math.floor(currentAngle) < -15) {
        if(indx !== 0) {
          array[indx-1].classList.add('currentSelection');
        } else {
          array[4].classList.add('currentSelection');
        }
        currentAngle = 0;
        array[indx].classList.remove('currentSelection');
        indx -= 1;
        if(indx === -1) {
          indx = 4;
        }
      }
    });
  }

  render() {
        return (
          <div className='wheel-outer-div'>
            <div className='wheel-inner-div'>
              <div onClick={this.select}>
                <i className="fa-solid fa-chevron-left menu" onClick={this.back}></i>
                <i className="fa-solid fa-forward-step slow" onClick={this.slow}></i>
                <i className="fa-solid fa-backward-step fast" onClick={this.fast}></i>
                <i className="fa-solid fa-pause pause" onClick={this.pause}></i>
              </div>
            </div>
        </div>
      )
    }
}

export default IpodWheel;