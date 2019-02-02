class EventTile extends HTMLElement {
    constructor() {
        super();
        this.shadowRoot = this.attachShadow({ mode: 'open' });

        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                        display: block;
                        box-shadow: 1px 1px 5px 1px #dcdada;
                        text-align: center;
                        padding: 10px;
                        background: white;
                        color: #333;
                }

                h1 {
                    text-transform: uppercase;
                }
            </style>
            <img src="./images/vodqa.png"/>
            <h1>Vodqa</h1>
            <p>
                VodQA, Value Oriented Discussion about Quality Analysis is a forum that sports the motto
                - 'come learn something new'. The forum offers a unique platform for the software
                testing industry to strengthen the QA community through knowledge sharing.
            </p>
        `;
    }
}

window.customElements.define('event-tile', EventTile);