import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import './Loading.scss';

const Loading = (props) => {
  if (!props.loading) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className='loading'>
      <img src='/assets/loading.svg' alt='' />
    </div>,
    document.getElementById('loading')
  );
};

const mapState = (state) => ({
  loading: state.loading,
});

export default connect(mapState, null)(Loading);
