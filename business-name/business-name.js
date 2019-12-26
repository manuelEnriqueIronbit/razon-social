import { html, LitElement } from 'lit-element';
import style from './business-name-styles.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@vaadin/vaadin-select/vaadin-select.js';


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
     <paper-dialog id="addSocialName" modal>
        <h2>Agregar Razón Social</h2>
        <paper-dialog-scrollable>
        <label for="businessName">Razón Social :</label>
        <input  id="businessName" type="text"><br>
        <label for="rfc">RFC :</label>
        <input  id="rfc" type="text"><br>
        <label for="status">Estatus:</label>

        <select name="status">
          <option value="Activo">Activo</option>
          <option value="Inactivo">Inactivo</option>
        </select>
        </paper-dialog-scrollable>
        <div class="buttons">
          <paper-button>Agregar</paper-button>
        </div>
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
      <tbodyd
           
      <tr>
        <td>Grupo Slim</td>
        <td>GS2892</td>
        <td><iron-icon icon="vaadin:check-circle-o"></iron-icon></td>
        <td><iron-icon icon="vaadin:edit"></iron-icon></td>
      </tr>
      <tr>
        <td>Grupo Slim</td>
        <td>GS2892</td>
        <td><iron-icon icon="vaadin:check-circle-o"></iron-icon></td>
        <td><iron-icon icon="vaadin:edit"></iron-icon></td>
      </tr>
      <tr>
        <td>Grupo Slim</td>
        <td>GS2892</td>
        <td><iron-icon icon="vaadin:check-circle-o"></iron-icon></td>
        <td><iron-icon icon="vaadin:edit"></iron-icon></td>
      </tr>
      <tr>
        <td>Grupo Slim</td>
        <td>GS2892</td>
        <td><iron-icon icon="vaadin:check-circle-o"></iron-icon></td>
        <td><iron-icon icon="vaadin:edit"></iron-icon></td>
      </tr> 
      <tr>
        <td>Grupo Slim</td>
        <td>GS2892</td>
        <td><iron-icon icon="vaadin:check-circle-o"></iron-icon></td>
        <td><iron-icon icon="vaadin:edit"></iron-icon></td>
      </tr>

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
