// components/NoTemplates.js
import React from 'react';
import Layout from '../layout/Layout';
import NoItem from '../../secondary_components/third_components/NoItem';

function NoTemplates({ onCreateTemplateClick }) {
  return (
    <Layout>
      <NoItem onCreateTemplateClick={onCreateTemplateClick} />
    </Layout>
  );
}

export default NoTemplates;
