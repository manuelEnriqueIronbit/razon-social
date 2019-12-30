import { css } from 'lit-element';

export default css`
:host {
  display: inline-block;
  box-sizing: border-box; }

:host([hidden]), [hidden] {
  display: none !important; }

*, *:before, *:after {
  box-sizing: inherit;
  font-family: inherit; }

.pointer {
  cursor: pointer; }

paper-dialog {
  background-color: #FFFFFF;
  border-radius: 23.76px;
  box-shadow: 0 21px 62px 0 rgba(0, 0, 0, 0.1);
  width: 80vh;
  height: 245px;
  max-width: none; }
  paper-dialog vaadin-button {
    background-image: linear-gradient(44.3deg, #00BFEF 0%, #00DFD1 100%);
    border: 1.68px solid #00BFEF;
    border-radius: 11.76px;
    width: 102px;
    height: 25.2px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.9px;
    line-height: 19px;
    text-align: center;
    position: absolute;
    bottom: -14px;
    margin: 0;
    padding: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto; }
  paper-dialog h2 {
    margin-top: 22px;
    color: #000000;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.46px;
    line-height: 20px;
    text-align: center;
    margin-bottom: 44px; }
  paper-dialog iron-icon {
    position: absolute;
    right: 0;
    margin: 0;
    padding: 8px; }
  paper-dialog label {
    display: inline; }
  paper-dialog input, paper-dialog select {
    display: inline;
    background-color: #EFEFEF;
    border: 0.65px solid #EEEEEE;
    border-radius: 3px;
    height: 25px;
    width: 278px;
    padding: 0 8px; }
`;
