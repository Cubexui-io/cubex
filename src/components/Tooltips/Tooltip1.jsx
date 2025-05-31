import React from 'react';
import styled from 'styled-components';

const Tooltip = () => {
  return (
    <StyledWrapper>
      <div className="tooltip-container">
        <span className="text">
          <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} className="bi bi-send-fill" viewBox="0 0 16 16">
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
          </svg>
        </span>
        <span className="tooltip1">
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} className="bi bi-telegram" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
          </svg>
        </span>
        <span className="tooltip2">
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} className="bi bi-tiktok" viewBox="0 0 16 16">
            <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
          </svg>
        </span>
        <span className="tooltip3">
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} className="bi bi-whatsapp" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
        </span>
        <span className="tooltip4">
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} className="bi bi-youtube" viewBox="0 0 16 16">
            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
          </svg>
        </span>
        <span className="tooltip9"> </span>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* From Uiverse.io by ElgyoshiMa91846 */
  /* This is an example, feel free to delete this code */
  .tooltip-container {
    background: rgb(3, 169, 244);
    background: linear-gradient(
      138deg,
      rgba(3, 169, 244, 1) 15%,
      rgba(63, 180, 233, 1) 65%
    );
    position: relative;
    cursor: pointer;
    font-size: 17px;
    padding: 0.7em 0.7em;
    border-radius: 50px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  }
  .tooltip-container:hover {
    background: #fff;
    transition: all 0.6s;
  }
  .tooltip-container .text {
    display: flex;
    align-items: center;
    justify-content: center;
    fill: #fff;
    transition: all 0.2s;
  }
  .tooltip-container:hover .text {
    fill: rgb(3, 169, 244);
    transition: all 0.6s;
  }

  /* Inicio do tooltip telegram*/
  .tooltip1 {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    visibility: hidden;
    background: #fff;
    fill: #03a9f4;
    padding: 10px;
    border-radius: 50px;
    transition:
      opacity 0.3s,
      visibility 0.3s,
      top 0.3s,
      background 0.3s;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .tooltip-container:hover .tooltip1 {
    top: 150%;
    opacity: 1;
    visibility: visible;
    background: #fff;
    border-radius: 50px;
    transform: translate(-50%, -5px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tooltip-container:hover .tooltip1:hover {
    background: #03a9f4;
    fill: #fff;
  }
  /* Fim do tooltip telgram*/

  /* Inicio do tooltip tiktok*/
  .tooltip2 {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    visibility: hidden;
    background: #03a9f4;
    fill: #00001a;
    padding: 10px;
    border-radius: 50px;
    transition:
      opacity 0.3s,
      visibility 0.3s,
      top 0.3s,
      background 0.3s;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .tooltip-container:hover .tooltip2 {
    top: -120%;
    opacity: 1;
    visibility: visible;
    background: #fff;
    transform: translate(-50%, -5px);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tooltip-container:hover .tooltip2:hover {
    background: #1a1a1a;
    fill: #fff;
  }
  /* Fim do tooltip tiktok*/

  /* Inicio do tooltip whatsApp */
  .tooltip3 {
    position: absolute;
    top: 100%;
    left: 60%;
    transform: translateX(80%);
    opacity: 0;
    visibility: hidden;
    background: #fff;
    fill: #1db954;
    padding: 10px;
    border-radius: 50px;
    transition:
      opacity 0.3s,
      visibility 0.3s,
      top 0.3s,
      background 0.3s;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .tooltip-container:hover .tooltip3 {
    top: 10%;
    opacity: 1;
    visibility: visible;
    background: #fff;
    transform: translate(85%, -5px);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tooltip-container:hover .tooltip3:hover {
    background: #1db954;
    fill: #fff;
  }
  /* Fim do tooltip whatsApp */

  /* Inicio do tooltip youtube*/
  .tooltip4 {
    position: absolute;
    top: 100%;
    left: -190%;
    transform: translateX(70%);
    opacity: 0;
    visibility: hidden;
    background: #fff;
    fill: #e62e00;
    padding: 10px;
    border-radius: 50px;
    transition:
      opacity 0.3s,
      visibility 0.3s,
      top 0.3s,
      background 0.3s;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .tooltip-container:hover .tooltip4 {
    top: 10%;
    opacity: 1;
    visibility: visible;
    background: #fff;
    transform: translate(70%, -5px);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tooltip-container:hover .tooltip4:hover {
    background: #e62e00;
    fill: #fff;
  }
  /* Fim do tooltip youtube*/

  /* Inicio do tooltip pinterest */
  .tooltip5 {
    position: absolute;
    top: 100%;
    left: -145%;
    transform: translateX(70%);
    opacity: 0;
    visibility: hidden;
    background: #fff;
    fill: #bd081c;
    padding: 10px;
    border-radius: 50px;
    transition:
      opacity 0.3s,
      visibility 0.3s,
      top 0.3s,
      background 0.3s;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .tooltip-container:hover .tooltip5 {
    top: -78%;
    opacity: 1;
    visibility: visible;
    background: #fff;
    transform: translate(70%, -5px);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tooltip-container:hover .tooltip5:hover {
    background: #bd081c;
    fill: #fff;
  }
  /* Fim do tooltip pinterest */

  /* Inicio do tooltip dribbble */
  .tooltip6 {
    position: absolute;
    top: 100%;
    left: 35%;
    transform: translateX(70%);
    opacity: 0;
    visibility: hidden;
    background: #fff;
    fill: #ea4c89;
    padding: 10px;
    border-radius: 50px;
    transition:
      opacity 0.3s,
      visibility 0.3s,
      top 0.3s,
      background 0.3s;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .tooltip-container:hover .tooltip6 {
    top: -79%;
    opacity: 1;
    visibility: visible;
    background: #fff;
    transform: translate(70%, -5px);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tooltip-container:hover .tooltip6:hover {
    background: #ea4c89;
    fill: #fff;
  }
  /* Fim do tooltip dribbble */

  /* Inicio do tooltip github */
  .tooltip7 {
    position: absolute;
    top: 100%;
    left: 39%;
    transform: translateX(70%);
    opacity: 0;
    visibility: hidden;
    background: #fff;
    fill: #000;
    padding: 10px;
    border-radius: 50px;
    transition:
      opacity 0.3s,
      visibility 0.3s,
      top 0.3s,
      background 0.3s;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .tooltip-container:hover .tooltip7 {
    top: 104%;
    opacity: 1;
    visibility: visible;
    background: #fff;
    transform: translate(70%, -5px);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tooltip-container:hover .tooltip7:hover {
    background: #000;
    fill: #fff;
  }
  /* Fim do tooltip github */

  /* Inicio do tooltip reddit */
  .tooltip8 {
    position: absolute;
    top: 100%;
    left: -150%;
    transform: translateX(70%);
    opacity: 0;
    visibility: hidden;
    background: #fff;
    fill: #ff4500;
    padding: 10px;
    border-radius: 50px;
    transition:
      opacity 0.3s,
      visibility 0.3s,
      top 0.3s,
      background 0.3s;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .tooltip-container:hover .tooltip8 {
    top: 101%;
    opacity: 1;
    visibility: visible;
    background: #fff;
    transform: translate(70%, -5px);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tooltip-container:hover .tooltip8:hover {
    background: #ff4500;
    fill: #fff;
  }
  /* Fim do tooltip reddit */

  /* Inicio do tooltip fixo */
  .tooltip9 {
    position: absolute;
    top: 0;
    left: -115%;
    opacity: 0;
    visibility: hidden;
    width: 150px;
    height: 150px;
    z-index: -1;
  }

  .tooltip-container:hover .tooltip9 {
    top: -110%;
    opacity: 1;
    visibility: visible;
    border-radius: 50%;
    z-index: -1;
  }
  `;

export default Tooltip;
