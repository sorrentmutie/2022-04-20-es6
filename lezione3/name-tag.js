const template = document.createElement('template');
template.innerHTML = `
  <style>
    h3 {
      color: darkolivegreen; //because I LOVE olives
    }
  </style>

  <div class="name-tag">
    <h3></h3>
  </div>
`;

class UserCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  
  customElements.define('name-tag', UserCard);