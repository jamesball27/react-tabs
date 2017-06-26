import React from 'react';

class TabsHeader extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(tabId) {
    return e => {
      e.preventDefault();
      this.props.receiveSelectedTab(tabId);
    };
  }

  render() {
    return(
      <ul className="tabs-header">
        {
          this.props.tabs.map(tab => (
            <li
              key={ tab.id }
              onClick={ this.handleClick(tab.id) }
            >
              <span>{ tab.header }</span>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default TabsHeader;
