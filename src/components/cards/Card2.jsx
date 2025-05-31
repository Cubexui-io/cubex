import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="main-container">
        <div className="border">
          <div className="card">
            <div className="shadow">
              <div className="content">
                <p className="rev">Revolut</p>
                <p className="ultra-text">ULTRA MEMBER</p>
                <p className="master-text">mastercard</p>
                <p className="master one" />
                <p className="master two" />
                <svg version="1.1" className="chip" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50" xmlSpace="preserve">
                  <image width={50} height={50} x={0} y={0} href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
              AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB6VBMVEUAAACNcTiVeUKVeUOY
              fEaafEeUeUSYfEWZfEaykleyklaXe0SWekSZZjOYfEWYe0WXfUWXe0WcgEicfkiXe0SVekSXekSW
              ekKYe0a9nF67m12ZfUWUeEaXfESVekOdgEmVeUWWekSniU+VeUKVeUOrjFKYfEWliE6WeESZe0GS
              e0WYfES7ml2Xe0WXeESUeEOWfEWcf0eWfESXe0SXfEWYekSVeUKXfEWxklawkVaZfEWWekOUekOW
              ekSYfESZe0eXekWYfEWZe0WZe0eVeUSWeETAnmDCoWLJpmbxy4P1zoXwyoLIpWbjvXjivnjgu3bf
              u3beunWvkFWxkle/nmDivXiWekTnwXvkwHrCoWOuj1SXe0TEo2TDo2PlwHratnKZfEbQrWvPrWua
              fUfbt3PJp2agg0v0zYX0zYSfgkvKp2frxX7mwHrlv3rsxn/yzIPgvHfduXWXe0XuyIDzzISsjVO1
              lVm0lFitjVPzzIPqxX7duna0lVncuHTLqGjvyIHeuXXxyYGZfUayk1iyk1e2lln1zYTEomO2llrb
              tnOafkjFpGSbfkfZtXLhvHfkv3nqxH3mwXujhU3KqWizlFilh06khk2fgkqsjlPHpWXJp2erjVOh
              g0yWe0SliE+XekShhEvAn2D///+gx8TWAAAARnRSTlMACVCTtsRl7Pv7+vxkBab7pZv5+ZlL/UnU
              /f3SJCVe+Fx39naA9/75XSMh0/3SSkia+pil/KRj7Pr662JPkrbP7OLQ0JFOijI1MwAAAAFiS0dE
              orDd34wAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IDx2lsiuJAAACLElEQVRIx2Ng
              GAXkAUYmZhZWPICFmYkRVQcbOwenmzse4MbFzc6DpIGXj8PD04sA8PbhF+CFaxEU8iWkAQT8hEVg
              OkTF/InR4eUVICYO1SIhCRMLDAoKDvFDVhUaEhwUFAjjSUlDdMiEhcOEItzdI6OiYxA6YqODIt3d
              I2DcuDBZsBY5eVTr4xMSYcyk5BRUOXkFsBZFJTQnp6alQxgZmVloUkrKYC0qqmji2WE5EEZuWB6a
              lKoKdi35YQUQRkFYPpFaCouKIYzi6EDitJSUlsGY5RWVRGjJLyxNy4ZxqtIqqvOxaVELQwZFZdkI
              JVU1RSiSalAt6rUwUBdWG1CP6pT6gNqwOrgCdQyHNYR5YQFhDXj8MiK1IAeyN6aORiyBjByVTc0F
              qBoKWpqwRCVSgilOaY2OaUPw29qjOzqLvTAchpos47u6EZyYnngUSRwpuTe6D+6qaFQdOPNLRzOM
              1dzhRZyW+CZouHk3dWLXglFcFIflQhj9YWjJGlZcaKAVSvjyPrRQ0oQVKDAQHlYFYUwIm4gqExGm
              BSkutaVQJeomwViTJqPK6OhCy2Q9sQBk8cY0DxjTJw0lAQWK6cOKfgNhpKK7ZMpUeF3jPa28BCET
              amiEqJKM+X1gxvWXpoUjVIVPnwErw71nmpgiqiQGBjNzbgs3j1nus+fMndc+Cwm0T52/oNR9lsdC
              S24ra7Tq1cbWjpXV3sHRCb1idXZ0sGdltXNxRateRwHRAACYHutzk/2I5QAAACV0RVh0ZGF0ZTpj
              cmVhdGUAMjAyMy0wMi0xM1QwODoxNToyOSswMDowMEUnN7UAAAAldEVYdGRhdGU6bW9kaWZ5ADIw
              MjMtMDItMTNUMDg6MTU6MjkrMDA6MDA0eo8JAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAy
              LTEzVDA4OjE1OjI5KzAwOjAwY2+u1gAAAABJRU5ErkJggg==" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .main-container {
    font-family: "Trebuchet MS", sans-serif;
    position: relative;
    height: 203px;
    aspect-ratio: 1.579;
    border-radius: 1em;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 300ms ease-in;
  }
  .main-container:hover {
    transform: rotateZ(1deg) rotateY(10deg) scale(1.1);
    box-shadow: 0 5em 2em #111;
  }

  .border {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1em;
    background: linear-gradient(
      115deg,
      rgba(0, 0, 0, 0.33) 12%,
      rgba(255, 255, 255, 0.33) 27%,
      rgba(255, 255, 255, 0.33) 31%,
      rgba(0, 0, 0, 0.33) 52%
    );
  }

  .border:hover:after {
    position: absolute;
    content: " ";
    height: 50em;
    aspect-ratio: 1.58;
    border-radius: 1em;
    background: linear-gradient(
      115deg,
      rgba(0, 0, 0, 1) 42%,
      rgba(255, 255, 255, 1) 47%,
      rgba(255, 255, 255, 1) 51%,
      rgba(0, 0, 0, 1) 52%
    );
    animation: rotate 4s linear infinite;
    z-index: 1;
    opacity: 0.05;
  }

  .card {
    height: 12.5em;
    aspect-ratio: 1.586;
    border-radius: 1em;
    background-color: #999;
    opacity: 0.8;
    background-image: linear-gradient(to right, #777, #777 2px, #999 2px, #999);
    background-size: 4px 100%;
  }

  .shadow {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 0.85em;
    border: 1px solid #bbb;
    background:
      radial-gradient(
          circle at 100% 100%,
          #ffffff 0,
          #ffffff 8px,
          transparent 8px
        )
        0% 0%/13px 13px no-repeat,
      radial-gradient(circle at 0 100%, #ffffff 0, #ffffff 8px, transparent 8px)
        100% 0%/13px 13px no-repeat,
      radial-gradient(circle at 100% 0, #ffffff 0, #ffffff 8px, transparent 8px)
        0% 100%/13px 13px no-repeat,
      radial-gradient(circle at 0 0, #ffffff 0, #ffffff 8px, transparent 8px) 100%
        100%/13px 13px no-repeat,
      linear-gradient(#ffffff, #ffffff) 50% 50% / calc(100% - 10px)
        calc(100% - 26px) no-repeat,
      linear-gradient(#ffffff, #ffffff) 50% 50% / calc(100% - 26px)
        calc(100% - 10px) no-repeat,
      linear-gradient(
        135deg,
        rgba(3, 3, 3, 0.5) 0%,
        transparent 22%,
        transparent 47%,
        transparent 73%,
        rgba(0, 0, 0, 0.5) 100%
      );
    box-sizing: border-box;
  }

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 0.6em;
    border: 1px solid #aaa;
    box-shadow: -1px -1px 0 #ddd;
    transform: translate(-50%, -50%);
    height: 12em;
    aspect-ratio: 1.604;
    background-image: linear-gradient(to right, #777, #555 2px, #aaa 2px, #aaa);
    background-size: 4px 100%;
  }

  .rev {
    top: 0.5em;
    left: 0.75em;
    color: #ffffff9f;
    font-size: 1.25em;
  }

  .master {
    position: absolute;
    bottom: 1.25em;
    right: 0.5em;
    background: linear-gradient(
      90deg,
      rgba(75, 75, 75, 0.25) 0%,
      rgba(121, 121, 121, 1) 100%
    );
    color: #fff;
    height: 2.5em;
    width: 2.5em;
    border: 1px solid #bbb;
    border-radius: 50%;
  }

  .master.one {
    right: 2em;
  }

  .master-text {
    bottom: 0.25em;
    right: 0.8em;
    font-size: 0.75em;
  }

  .ultra-text {
    top: -4px;
    right: 1.75em;
    font-size: 0.5em;
    color: rgba(255, 255, 255, 0.66);
  }

  .ultra-text,
  .master-text,
  .rev {
    position: absolute;
    text-shadow: -1px -1px #333;
    color: #fff;
    opacity: 0.75;
  }

  .chip {
    position: absolute;
    top: 27.5%;
    left: 8.25%;
  }

  @keyframes rotate {
    0% {
      transform: translate(-25em, -15em);
    }
    20% {
      transform: translate(25em, 15em);
    }
    100% {
      transform: translate(25em, 15em);
    }
  }`;

export default Card;
