import React from 'react';

class TabContent extends React.Component {

  render() {
    const { tabs, selectedTab } = this.props;
    const content = tabs[selectedTab].content;
    const imgUrl = tabs[selectedTab].img;
    
    return(
      <div>
        <p>{ content }</p>
        <img src={ imgUrl } />
      </div>
    );
  }
}

export default TabContent;
