class EventTileList extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.render();
    }

    renderEventTile({name, image, description}) {
        return `
            <event-tile
                name="${name}"
                image="${image}"
                description="${description}"
            ></event-tile>
        `;
    }

    render() {
        this.root.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-wrap: wrap;
                }

                event-tile {
                    width: 330px;
                    margin: 10px;
                }
            </style>
            ${window.events.map(event => this.renderEventTile(event)).join("")}
        `;
    }
}

window.customElements.define('event-tile-list', EventTileList);