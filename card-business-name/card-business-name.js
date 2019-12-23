import { html, LitElement } from 'lit-element';
import style from './card-business-name-styles.js';

class CardBusinessName extends LitElement {
  static get properties() {
    return {
      hello: { type: String }
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.hello = 'Hello';
  }

  render() {
    return html`
        <p>Some static DOM</p>
        <h2>${this.hello} card-business-name</h2>
      `;
    }
}

window.customElements.define("card-business-name", CardBusinessName);
