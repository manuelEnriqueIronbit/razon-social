import { html, LitElement } from 'lit-element';
import style from './card-business-name-styles.js';
import '@vaadin/vaadin-icons/vaadin-icons.js';


class CardBusinessName extends LitElement {
  static get properties() {
    return {
      businessNameData:{
        type: Object
      }
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.businessNameData ={
      companyName : '',
      rfc:'',
      estatus:''
    }
  }

  render() {
    return html`
        <tr>
        <th>${this.businessNameData.companyName}</th>
        <th>${this.businessNameData.rfc}</th>
        <th><iron-icon icon="vaadin:check-circle-o">${this.businessNameData.estatus}</iron-icon></th>
        <th><iron-icon icon="vaadin:edit"></iron-icon></th>
      </tr>
      `;
    }
}

window.customElements.define("card-business-name", CardBusinessName);
