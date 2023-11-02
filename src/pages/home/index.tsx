import { Button } from "antd";
import React, { useEffect } from 'react';
import { Watermark } from 'antd';
import * as actions from './actions';
import Layout from "../layout";

export default () => {
  useEffect(() => {
    actions.fetchHomeInfo({});
  }, [])

  return (
    // 暂时把Layout放在Home组件中，后续移入到全局
    <Layout>
      <Watermark content="首页">
        <div style={{ height: 500 }} />
      </Watermark>
    </Layout>
  )
}