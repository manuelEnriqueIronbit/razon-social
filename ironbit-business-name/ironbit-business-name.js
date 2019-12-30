import { html, LitElement } from 'lit-element';
import style from './ironbit-business-name-styles.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@catsys/ironbit-create-business-name'
import '@catsys/ironbit-card-business-name'
import  '@vaadin/vaadin-icons';

class IronbitBusinessName extends LitElement {
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
        <div class="business-name-table">
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
              return html`
              <tr id="${index}">
                  <td>${businessName.businessName}</td>
                  <td>${businessName.rfc}</td>
                  <td>${businessName.status ==="active"? html`<img src="/assets/active.png"> ` : html`<iron-icon icon="vaadin:close-circle-o">${businessName.status}</iron-icon>`}</td>
                  <td><ironbit-card-business-name .bussines="${ businessName }"  @update-rfc-data="${this.updateData}"></ironbit-card-business-name></td>
              </tr>`
            })}
            </tbody>
        </table>
        <div class="buttons">
          <ironbit-create-business-name  @send-rfc-data="${this.insertData}"></ironbit-create-business-name>
        </div>

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

window.customElements.define("ironbit-business-name", IronbitBusinessName);
