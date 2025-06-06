import React from 'react';
import styled from 'styled-components';

const Radio = () => {
  return (
    <StyledWrapper>
      <div className="fan-speed-knob">
        <div className="wrapper">
          <div className="knob-outer">
            <div className="knob-base">
              <hr className="divider" />
              <hr className="divider" />
              <hr className="divider" />
              <div className="control">
                <label htmlFor="fan_off"><span className="off">OFF</span></label>
                <label htmlFor="fan_1"><span>1</span></label>
                <label htmlFor="fan_2"><span>2</span></label>
                <label htmlFor="fan_3"><span>3</span></label>
                <label htmlFor="fan_4"><span>4</span></label>
                <label htmlFor="fan_5"><span>5</span></label>
                <input id="fan_off" name="fan" defaultChecked type="radio" />
                <input id="fan_1" name="fan" type="radio" />
                <input id="fan_2" name="fan" type="radio" />
                <input id="fan_3" name="fan" type="radio" />
                <input id="fan_4" name="fan" type="radio" />
                <input id="fan_5" name="fan" type="radio" />
                <div className="pointer"><span /></div>
                <div className="marker"><span /></div>
                <div className="knob-middle">
                  <div className="knob-inner">
                    <div className="knob-core">
                      <div className="status">
                        <div className="off-light" />
                        <div className="speed-lights">
                          <span className="speed-light" />
                          <span className="speed-light" />
                          <span className="speed-light" />
                          <span className="speed-light" />
                          <span className="speed-light" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .wrapper {
    position: relative;
    font-family: monospace;
  }

  .knob-outer {
    user-select: none;
    position: relative;
    width: 230px;
    height: 230px;
    border-radius: 100%;
    box-shadow:
      10px 10px 10px rgba(202, 202, 202, 0.2) inset,
      -10px -10px 10px rgba(151, 151, 151, 0.2) inset;
    background-color: transparent;
  }

  .knob-base {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 220px;
    height: 220px;
    margin: -110px 0 0 -110px;
    border-radius: 100%;
    box-shadow:
      inset 0 3px 10px rgba(0, 0, 0, 0.6),
      0 2px 20px rgba(255, 255, 255, 0.1) inset;
    background: radial-gradient(ellipse at center, #333 0%, #111 100%);
  }

  .knob-middle {
    z-index: 4;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 140px;
    height: 140px;
    margin: -70px 0 0 -70px;
    border-radius: 100%;
    box-shadow:
      inset 0 2px 2px rgba(255, 255, 255, 0.2),
      0 3px 13px rgba(0, 0, 0, 0.85);
    background: #111;
  }

  .knob-inner {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 120px;
    height: 120px;
    margin: -60px 0 0 -60px;
    border-radius: 100%;
    background: #222;
  }

  .knob-core {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100px;
    height: 100px;
    margin: -50px 0 0 -50px;
    border-radius: 100%;
    box-shadow:
      inset 0 2px 3px rgba(255, 255, 255, 0.3),
      0 8px 20px rgba(0, 0, 0, 0.9);
    background: #333;
  }

  .control {
    z-index: 3;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .knob-base .control label {
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 70px;
    margin-top: -35px;
    transform-origin: 0% 50%;
    cursor: pointer;
  }

  .knob-base .control label span {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 100%;
    font-weight: bold;
    font-size: 15px;
    line-height: 70px;
    text-align: center;
    color: #0f0;
    text-shadow: 0 0 5px #0f0;
  }

  .knob-base .control label:nth-child(1) {
    transform: rotate(-90deg);
  }
  .knob-base .control label:nth-child(1) span {
    transform: rotate(90deg);
  }
  .knob-base .control label:nth-child(2) {
    transform: rotate(-30deg);
  }
  .knob-base .control label:nth-child(2) span {
    transform: rotate(30deg);
  }
  .knob-base .control label:nth-child(3) {
    transform: rotate(30deg);
  }
  .knob-base .control label:nth-child(3) span {
    transform: rotate(-30deg);
  }
  .knob-base .control label:nth-child(4) {
    transform: rotate(90deg);
  }
  .knob-base .control label:nth-child(4) span {
    transform: rotate(-90deg);
  }
  .knob-base .control label:nth-child(5) {
    transform: rotate(150deg);
  }
  .knob-base .control label:nth-child(5) span {
    transform: rotate(-150deg);
  }
  .knob-base .control label:nth-child(6) {
    transform: rotate(210deg);
  }
  .knob-base .control label:nth-child(6) span {
    transform: rotate(-210deg);
  }

  .knob-base .control input {
    position: absolute;
    opacity: 0;
    visibility: hidden;
  }

  .pointer {
    z-index: 1;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 50%;
    height: 100px;
    margin-top: -50px;
    transform-origin: 0% 50%;
    transition: transform 0.5s;
  }

  .pointer span {
    position: absolute;
    top: 0;
    left: 15px;
    width: 100px;
    height: 100px;
    background: radial-gradient(
      ellipse at center,
      rgba(0, 255, 0, 0.8) 0%,
      rgba(0, 255, 0, 0.2) 42%,
      rgba(0, 255, 0, 0) 72%
    );
  }

  .marker {
    z-index: 6;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 50%;
    height: 12px;
    margin-top: -6px;
    transform-origin: 0% 50%;
    transition: transform 0.5s;
  }

  .marker span {
    position: absolute;
    top: 0;
    left: 30px;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background: #0f0;
    box-shadow: 0 0 10px #0f0;
  }

  .status {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 5;
  }

  .off-light {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #333;
    margin-bottom: 8px;
    transition:
      background-color 0.3s,
      box-shadow 0.3s;
  }

  .speed-lights {
    display: flex;
  }

  .speed-light {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #333;
    margin: 0 3px;
    transition:
      opacity 0.3s,
      background-color 0.3s,
      box-shadow 0.3s;
  }

  /* Rotations and Indicator States */
  #fan_off:checked ~ .pointer {
    transform: rotate(-90deg);
  }
  #fan_off:checked ~ .off {
    color: rgb(255, 72, 0);
    text-shadow: 0 0 5px rgb(255, 81, 0);
  }
  #fan_off:checked ~ .pointer span {
    background: radial-gradient(
      ellipse at center,
      rgba(255, 97, 77, 0.8) 0%,
      rgba(255, 94, 0, 0.2) 42%,
      rgba(255, 72, 0, 0) 72%
    );
  }
  #fan_1:checked ~ .pointer {
    transform: rotate(-30deg);
  }
  #fan_2:checked ~ .pointer {
    transform: rotate(30deg);
  }
  #fan_3:checked ~ .pointer {
    transform: rotate(90deg);
  }
  #fan_4:checked ~ .pointer {
    transform: rotate(150deg);
  }
  #fan_5:checked ~ .pointer {
    transform: rotate(210deg);
  }

  #fan_off:checked ~ .marker {
    transform: rotate(-90deg);
  }
  #fan_off:checked ~ .marker span {
    background: rgb(255, 60, 0);
    box-shadow: 0 0 10px rgb(255, 60, 0);
  }
  #fan_1:checked ~ .marker {
    transform: rotate(-30deg);
  }
  #fan_2:checked ~ .marker {
    transform: rotate(30deg);
  }
  #fan_3:checked ~ .marker {
    transform: rotate(90deg);
  }
  #fan_4:checked ~ .marker {
    transform: rotate(150deg);
  }
  #fan_5:checked ~ .marker {
    transform: rotate(210deg);
  }

  #fan_off:checked ~ .knob-middle .status .speed-lights .speed-light {
    opacity: 0;
  }

  .fan:not(#fan_off):checked ~ .knob-middle .status .off-light {
    background-color: #333;
    box-shadow: none;
  }

  /* Lines for visual separation */
  .knob-base hr.divider {
    z-index: 1;
    position: absolute;
    top: 50%;
    width: 100%;
    height: 0;
    margin-top: -1px;
    border-width: 1px 0;
    border-style: solid;
    border-top-color: #3c3d3f;
    border-bottom-color: #666769;
  }

  .knob-base hr.divider:nth-child(1) {
    transform: rotate(-60deg);
  }
  .knob-base hr.divider:nth-child(2) {
    transform: rotate(60deg);
  }`;

export default Radio;
