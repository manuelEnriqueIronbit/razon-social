import { html, LitElement } from 'lit-element';
import style from './business-name-styles.js';

class BusinessName extends LitElement {
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
        <h2>${this.hello} business-name</h2>
      `;
    }
}

window.customElements.define("business-name", BusinessName);
