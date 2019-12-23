import { html, LitElement } from 'lit-element';
import style from './business-name-styles.js';
import '@vaadin/vaadin-icons/vaadin-icons.js';


class BusinessName extends LitElement {
  static get properties() {
    return {
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
  }

  render() {
    return html`
    <table>
      <tr>
        <th>Razón social</th>
        <th>RFC</th>
        <th>Estatus</th>
        <th>Acciones</th>
      </tr>
      <tr>
        <th>Grupo Slim</th>
        <th>GS2892</th>
        <th><iron-icon icon="vaadin:check-circle-o"></iron-icon></th>
        <th><iron-icon icon="vaadin:edit"></iron-icon></th>
      </tr>

    </table>
        

      `;
    }
}

window.customElements.define("business-name", BusinessName);
