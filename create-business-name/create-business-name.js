import { html, LitElement } from 'lit-element';
import style from './create-business-name-styles.js';

class CreateBusinessName extends LitElement {
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
        <h2>${this.hello} create-business-name</h2>
      `;
    }
}

window.customElements.define("create-business-name", CreateBusinessName);
