import React from 'react';

class StorePicker extends React.Component {
  render() {
    // Regular comments look like this.
    return (
      <form className="store-selector">
        { /* JSX Comments look like this */ }
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;
