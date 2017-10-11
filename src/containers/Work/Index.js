import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from '../../components/Head';

class Work extends Component {
  render() {
    return (
      <div>
        <Head title="Work" />
        <h1>Work</h1>
      </div>
    )
  }
}

export default connect()(Work);