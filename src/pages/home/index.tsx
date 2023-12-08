import { Button } from "antd";
import React, { useEffect } from 'react';
import { Watermark } from 'antd';
import * as actions from './actions';

export default () => {
  useEffect(() => {
    // actions.fetchHomeInfo({});
  }, [])

  return (
    <Watermark content="首页" style={{height: '100%'}}>
      <div style={{height: 500}}>这是首页</div>
    </Watermark>
  )
}