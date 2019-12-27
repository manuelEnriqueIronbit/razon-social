import { html, LitElement } from 'lit-element';
import style from './business-name-styles.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@vaadin/vaadin-select/vaadin-select.js';
import '@vaadin/vaadin-icons/vaadin-icons.js';
import '@vaadin/vaadin-grid/vaadin-grid.js';


class BusinessName extends LitElement {
  static get properties() {
    return {
      businessNameList : Array
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.businessNameList = [];
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
    this.dispatchEvent (new CustomEvent('sendData',{
      detail:properties
    }));
  }
  
    render() {
    return html`
     <paper-dialog id="addSocialName" modal>
     <paper-button dialog-confirm autofocus><iron-icon icon="vaadin:close-circle"></iron-icon></paper-button>
        <h2>Agregar Razón Social</h2>
        <paper-dialog-scrollable>
        <div>
          <label for="businessName">Razón Social :</label>
          <input  id="businessName" type="text">
        </div>
        <div>
          <label for="rfc">RFC :</label>
          <input  id="rfc" type="text">
        </div>
        <div>
          <label for="status">Estatus:</label>
          <select id="status" name="status">
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </div>
        </paper-dialog-scrollable>
        <vaadin-button  @click="${this.send}"   dialog-confirm autofocus>Agregar</vaadin-button>
    </paper-dialog>
    
    <table>
      <thead>
        <tr>
          <th>Razón social</th>
          <th>RFC</th>
          <th>Estatus</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
      ${this.businessNameList.map(businessName => {
         return html`<tr>
            <td>${businessName.businessName}</td>
            <td>${businessName.rfc}</td>
              <td>${businessName.status ==="active"? html`<iron-icon icon="vaadin:check-circle-o"></iron-icon> ` : html`<iron-icon icon="vaadin:close-circle-o">${businessName.status}</iron-icon>`}</td>
              <th><iron-icon icon="vaadin:edit"></iron-icon></th>
      </tr>`
      })}
      </tbody>
    </table>
    <button  @click="${this.openDialog}">Agregar</button>
      `;
    }
    openDialog(){
      this.shadowRoot.querySelector('#addSocialName').open();
    }
}

window.customElements.define("business-name", BusinessName);
