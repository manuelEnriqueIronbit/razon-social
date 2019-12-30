import { html, LitElement } from 'lit-element';
import style from './ironbit-card-business-name-styles.js';
import '@polymer/paper-dialog/paper-dialog.js';

class IronbitCardBusinessName extends LitElement {
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
    this.businessNameData = this.businessName;
  }

  render() {
    return html`
        <img  class="pointer" src="/assets/acciones.png" @click="${this.editData , this.openDialog}" />  
        <paper-dialog id="editSocialName" modal>
        <iron-icon icon="vaadin:close-circle" dialog-confirm autofocus></iron-icon>

          <h2>Editar Razón Social</h2>
            <label for="businessName">Razón Social :</label>
            <input  id="businessName" type="text"><br>
            <label for="rfc">RFC :</label>
            <input  id="rfc" type="text"><br>
            <label for="status">Estatus:</label>
            <select id="status">
              <option value="active">Activo</option>
              <option value="inactive">Inactivo</option>
            </select>
          <vaadin-button  @click="${this.updateData}"   dialog-confirm autofocus>Editar</vaadin-button>
        </paper-dialog>
      `;
      
    }
    openDialog(){
      //const data = this.bussines;
      const dialog = this.shadowRoot.querySelector('#editSocialName')
      //console.log(this.bussines )
      let rfcInput = dialog.querySelector('#rfc');
      let nameInput = dialog.querySelector('#businessName');
      let selectStatus = dialog.querySelector('#status');
      rfcInput.value = this.bussines.rfc;
      nameInput.value = this.bussines.businessName;
      selectStatus.value = this.bussines.status;

      dialog.open();
      //this.requestUpdate();
    }
    updateData(){      
      const [businessNameInput , rfcInput] = this.shadowRoot.querySelectorAll('input');
      const statuSelect= this.shadowRoot.querySelector('#status');
      const properties ={
        businessName : businessNameInput.value,
        rfc : rfcInput.value,
        status : statuSelect.options[statuSelect.selectedIndex].value
      }
      
      this.bussines.businessName= properties.businessName;
      this.bussines.rfc= properties.rfc;
      this.bussines.status= properties.status;
       businessNameInput.value ='';
      rfcInput.value='';
      statuSelect.value ='';
      this.dispatchEvent (new CustomEvent('update-rfc-data',{
        detail:properties
      }));
    }
    __getNode(query){
      return this.shadowRoot.querySelector(query);
    }
}

window.customElements.define("ironbit-card-business-name", IronbitCardBusinessName);
