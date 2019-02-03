class EventTileList extends HTMLElement {
    constructor() {
        super();
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
        this.innerHTML = `
            <style>
                event-tile-list {
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