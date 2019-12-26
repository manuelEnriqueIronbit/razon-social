import { html, LitElement } from 'lit-element';
import style from './create-business-name-styles.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-select/vaadin-select.js';
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

  render() {
    return html`
      <div class="modal">
        <div class="modal-content">
          <h2>Agregar Razón Social</h2>
          <vaadin-text-field label="Razón social:"></vaadin-text-field><br>
          <vaadin-text-field label="RFC:"></vaadin-text-field><br>
          <vaadin-select label="Estatus">
            <template>
              <vaadin-list-box>
                <vaadin-item>Activo</vaadin-item>
                <vaadin-item>Inactivo</vaadin-item>
              </vaadin-list-box>
            </template>
          </vaadin-select>
          <button>Agregar</button>
        </div>
      </div>

      `;
    }
}

window.customElements.define("create-business-name", CreateBusinessName);
