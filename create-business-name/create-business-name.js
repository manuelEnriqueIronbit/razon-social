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
  send(){
    console.log("Inside send")
      const [businessNameInput , rfcInput] = this.shadowRoot.querySelectorAll('input');
    const statuSelect= this.shadowRoot.querySelector('#status');
    const properties ={
      businessName : businessNameInput.value,
      rfc : rfcInput.value,
      status : statuSelect.options[statuSelect.selectedIndex].value
    }
    console.log(properties)
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
        <h2>Agregar Razón Social</h2>
        <paper-dialog-scrollable>
          <label for="businessName">Razón Social :</label>
          <input  id="businessName" type="text"><br>
          <label for="rfc">RFC :</label>
          <input  id="rfc" type="text"><br>
          <label for="status">Estatus:</label>
          <select id="status">
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </paper-dialog-scrollable>
        <div class="buttons">
        <paper-button dialog-confirm autofocus>Tap me to close</paper-button>
        <vaadin-button  @click="${this.send}"   dialog-confirm autofocus>Agregar</vaadin-button>
        </div>
    </paper-dialog>

      `;
    }
    openDialog(){
      this.shadowRoot.querySelector('#addSocialName').open();
    }
}

window.customElements.define("create-business-name", CreateBusinessName);
