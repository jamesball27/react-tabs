import React from 'react';
import { connect } from 'react-redux';

class Tabs extends React.Component {

  render() {
    return(
      <h1>Tabs here</h1>
    );
  }
}

const mapStateToProps = ({ tabs }) => ({
  tabs
});

export default connect(mapStateToProps)(Tabs);
