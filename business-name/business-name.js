import { html, LitElement } from 'lit-element';
import style from './business-name-styles.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@vaadin/vaadin-select/vaadin-select.js';
import '@vaadin/vaadin-icons/vaadin-icons.js';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@catsys/create-business-name'
import '@catsys/card-business-name'
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

 

    render() {
    return html`
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
      ${this.businessNameList.map((businessName,index) => {
         return html`<tr id="${index}">
            <td>${businessName.businessName}</td>
            <td>${businessName.rfc}</td>
              <td>${businessName.status ==="active"? html`<img src="/assets/active.png"> ` : html`<iron-icon icon="vaadin:close-circle-o">${businessName.status}</iron-icon>`}</td>
              <td><card-business-name .bussines="${ businessName }"  @update-rfc-data="${this.updateData}"></card-business-name></td>
      </tr>`
      })}
      </tbody>
    </table>
    <div class="buttons">
      <create-business-name  @send-rfc-data="${this.insertData}"></create-business-name>
    </div>
    
      `;
    }
    insertData(event){
      this.businessNameList = [...this.businessNameList, {
        ...event.detail,
        body:event.detail.info
      }]; 
    }
    updateData(event){
    this.requestUpdate();
    }
}

window.customElements.define("business-name", BusinessName);
