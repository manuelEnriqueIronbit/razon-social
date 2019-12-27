import { html, LitElement } from 'lit-element';
import style from './card-business-name-styles.js';
import '@vaadin/vaadin-icons/vaadin-icons.js';
import '@polymer/paper-dialog/paper-dialog.js';

import '@polymer/paper-button/paper-button.js';

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
        <button  @click="${this.openDialog}"><iron-icon icon="vaadin:edit" @click="${this.editData}"></iron-icon></button>
        <paper-dialog id="editSocialName" modal>
          <h2>Editar Razón Social</h2>
          <paper-dialog-scrollable>
            <label for="businessName">Razón Social :</label>
            <input  id="businessName" type="text"><br>
            <label for="rfc">RFC :</label>
            <input  id="rfc" type="text"><br>
            <label for="status">Estatus:</label>
            <select id="status">
              <option value="active">Activo</option>
              <option value="inactive">Inactivo</option>
            </select>
          </paper-dialog-scrollable>
          <div class="buttons">
          <paper-button dialog-confirm autofocus>Tap me to close</paper-button>
          <vaadin-button  @click="${this.openDialog}"   dialog-confirm autofocus>Editar</vaadin-button>
          </div>
        </paper-dialog>
      `;
    }
    openDialog(){
      this.shadowRoot.querySelector('#editSocialName').open();
    }
    editData(){
      console.log("Inside edit data")
    }
    
}

window.customElements.define("card-business-name", CardBusinessName);
