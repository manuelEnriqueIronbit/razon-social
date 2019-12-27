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

button {
  background-image: linear-gradient(44.3deg, #00BFEF 0%, #00DFD1 100%);
  border: 1.68px solid #00BFEF;
  border-radius: 11.76px;
  width: 102px;
  height: 25.2px;
  color: #FFFFFF;
  font-size: 16.24px;
  font-weight: 700;
  letter-spacing: 0.9px;
  line-height: 19px;
  text-align: center;
  margin-top: 45px; }
`;
