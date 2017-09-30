import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

  // One way to access the `this` context in React Components
  // is by using a constructor.
  //
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  goToStore(event) {
    event.preventDefault();
    console.log('You changed the URL');
    // First, grab the text from the box
    const storeId = this.storeInput.value;
    console.log("Going to ${storeId}");
    // Second, we're going to transition to the things
    this.context.router.transitionTo('/store/${storeId}')
  }

  render() {
    // Regular comments look like this.
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        { /* JSX Comments look like this */ }
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input }}/>
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
