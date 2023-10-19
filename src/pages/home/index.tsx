import { Button } from "antd";
import React, { useEffect } from 'react';
import * as actions from './actions';

export default () => {
  useEffect(() => {
    actions.fetchHomeInfo({});
  }, [])

  return (
    <Button type="primary">Demo</Button>
  )
}