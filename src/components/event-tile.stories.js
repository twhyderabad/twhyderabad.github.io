import { storiesOf, html } from '@open-wc/storybook';

import './event-tile.js';

storiesOf('Set Game', module)
  .add (
      'Welcome', 
      () => html`
        <event-tile
            name="Event Title"
            description="Description">
        </event-tile>`
    );