import React from 'react';

const TabContent = props => {

  const { tabs, selectedTab } = props;
  const content = tabs[selectedTab].content;
  const imgUrl = tabs[selectedTab].img;

  const renderContent = () => {
    if (content) {
      return <p>{ content }</p>;
    }
  };

  const renderImg = () => {
    if (imgUrl) {
      return <img src={ imgUrl } />;
    }
  };

  return(
    <div className="tab-content">
      { renderContent() }
      { renderImg() }
    </div>
  );
};

export default TabContent;
