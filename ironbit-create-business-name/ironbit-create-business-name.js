import { html, LitElement } from 'lit-element';
import style from './ironbit-create-business-name-styles.js';
import '@polymer/paper-dialog/paper-dialog.js';
import  '@vaadin/vaadin-icons';

class IronbitCreateBusinessName extends LitElement {
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
  }
  send(){
    const [businessNameInput , rfcInput] = this.shadowRoot.querySelectorAll('input');
    const statuSelect= this.shadowRoot.querySelector('#status');
    const properties ={
      businessName : businessNameInput.value,
      rfc : rfcInput.value,
      status : statuSelect.options[statuSelect.selectedIndex].value
    }
    businessNameInput.value ='';
    rfcInput.value='';
    statuSelect.value ='';
    this.dispatchEvent (new CustomEvent('send-rfc-data',{
      detail:properties
    }));
  }

  render() {
    return html`
         <button  @click="${this.openDialog}">Agregar</button>
          <paper-dialog id="addSocialName" modal>
            <vaadin-button  @click="${this.send}"   dialog-confirm autofocus>Agregar</vaadin-button>
            <iron-icon icon="vaadin:close-circle" dialog-confirm autofocus></iron-icon>
            <h2>Agregar Razón Social</h2>
              <label for="businessName">Razón Social :</label>
              <input  id="businessName" type="text"><br>
              <label for="rfc">RFC :</label>
              <input  id="rfc" type="text"><br>
              <label for="status">Estatus:</label>
              <select id="status">
                <option value="active">Activo</option>
                <option value="inactive">Inactivo</option>
              </select>
          </paper-dialog>
      `;
    }
    openDialog(){
      this.shadowRoot.querySelector('#addSocialName').open();
    }
}

window.customElements.define("ironbit-create-business-name", IronbitCreateBusinessName);
