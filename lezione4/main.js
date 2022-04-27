class HelloWorld extends HTMLElement {
    connectedCallback() {
        const shadow = this.attachShadow({mode: 'open'});
        const template = document.getElementById('mioTemplate').content.cloneNode(true);
        const message = 'Benvenuto' + this.name;
  
        const arr = template.querySelectorAll('.mia-classe');
        arr.forEach(x => x.textContent = message);
        shadow.append(template);
    }

    constructor(){
        super();
        this.name = 'Mario';
    }

    static get observedAttributes() { return ['name']; }

    attributeChangedCallback(property, oldValue, newValue) {
        if(oldValue === newValue) return;
        this[property] = newValue;
        const shadow = this.shadowRoot;
        const message = 'Benvenuto' + this.name;
        const arr = shadow.querySelectorAll('.mia-classe');
        arr.forEach(x => x.textContent = message);
    }

}


customElements.define('hello-world', HelloWorld);
//document.getElementById('esempio').setAttribute('nome', "luigi");
document.getElementById('btnChange').addEventListener('click', () => {
    document.getElementById('esempio').setAttribute('name', "luigi");
}); 
