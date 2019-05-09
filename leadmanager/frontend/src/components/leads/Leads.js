import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads } from '../../actions/leads';

export class  Leads extends Component {
static PropTypes = {
  leads: PropTypes.array.isRequired
};

componentDidMount() {
  this.props.getLeads();
}

  render () {
  return (
    <Fragment>
      <h1>Leads List</h1>
      </Fragment>
  );
  }
}

const mapStateToProps = state => ({
  leads: state.leads.leads
});

export default connect(mapStateToProps, { getLeads })(Leads);
