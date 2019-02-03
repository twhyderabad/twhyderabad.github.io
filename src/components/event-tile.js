class EventTile extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    get image() {
        return this.getAttribute('image');
    }

    set image(image) {
        this.setAttribute('image', image);
    }

    get name() {
        return this.getAttribute('name');
    }

    set name(name) {
        this.setAttribute('name', name);
    }

    get description() {
        return this.getAttribute('description');
    }

    set description(description) {
        this.setAttribute('description', description);
    }

    render() {
        this.innerHTML = `
            <style>
                event-tile {
                    display: block;
                    box-shadow: 2px 2px 5px 2px #dcdada;
                    text-align: center;
                    padding: 10px;
                    background: white;
                    color: #333;
                    box-sizing: border-box;
                }

                h1 {
                    text-transform: uppercase;
                }

                img {
                    margin: 20px auto;
                    max-width: 100%;
                }

                p {
                    color: #666;
                    line-height: 1.4em;
                }
            </style>
            <img src=./src/images/${this.image} />
            <h1>${this.name}</h1>
            <p>${this.description}</p>
        `;
    }
}

window.customElements.define('event-tile', EventTile);