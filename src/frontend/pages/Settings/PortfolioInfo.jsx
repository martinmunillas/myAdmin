import React, { useState } from 'react';
import { connect } from 'react-redux';

import { setInfo } from '../../redux/actions';

import Title from '../../components/atoms/Title';
import MainLayout from '../../components/layouts/MainLayout/MainLayout';
import PortfolioInfoForm from '../../components/organisms/PortfolioInfoForm/PortfolioInfoForm';

const PortfolioInfo = (props) => {
  const [form, setForm] = useState(props.info);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleArrayChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value.split(',').map((string) => string.trim()),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setInfo(form);
  };

  return (
    <MainLayout>
      <Title>Portfolio Info</Title>
      <PortfolioInfoForm
        eventHandlers={{ handleSubmit, handleChange, handleArrayChange }}
        formValues={form}
      />
    </MainLayout>
  );
};

const mapState = (state) => ({
  info: state.info,
});

const mapDispatch = {
  setInfo,
};

export default connect(mapState, mapDispatch)(PortfolioInfo);
