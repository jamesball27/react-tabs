import React from 'react';
import { connect } from 'react-redux';
import { receiveSelectedTab } from '../actions/tab_actions';
import { arrayAllTabs } from '../reducers/selectors';
import TabsHeader from './tabs_header';
import TabContent from './tab_content';

class Tabs extends React.Component {

  render() {
    return(
      <div className="tabs-wrapper">
        <TabsHeader
          tabs={ this.props.tabs }
          selectedTab={ this.props.selectedTab }
          receiveSelectedTab={ this.props.receiveSelectedTab }
        />
        <TabContent
          tabs={ this.props.tabs }
          selectedTab={ this.props.selectedTab }
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tabs: arrayAllTabs(state),
  selectedTab: state.selectedTab
});

const mapDispatchToProps = dispatch => ({
  receiveSelectedTab: tabId => dispatch(receiveSelectedTab(tabId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
