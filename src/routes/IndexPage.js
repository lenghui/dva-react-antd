import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
// import MainLayout from '../components/MainLayout/Layout'

function IndexPage() {
  return (
    <div className={styles.normal}>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
