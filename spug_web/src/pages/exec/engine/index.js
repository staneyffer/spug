/**
 * Copyright (c) OpenSpug Organization. https://github.com/openspug/spug
 * Copyright (c) <spug.dev@gmail.com>
 * Released under the MIT License.
 */
import React from 'react';
import { observer } from 'mobx-react';
import { Input, Select, Button } from 'antd';
import { SearchForm, AuthDiv, AuthCard } from 'components';
import ComTable from './Table';
import store from './store';

export default observer(function () {
  return (
    <AuthCard auth="exec.template.view">
      <SearchForm>
        <SearchForm.Item span={8} title="引擎类型">
          <Select allowClear onChange={v => store.f_type = v} placeholder="请选择">
            {store.engines.map(item => (
              <Select.Option value={item.engine_type} key={item.engine_type}>{item.name}</Select.Option>
            ))}
          </Select>
        </SearchForm.Item>
        <SearchForm.Item span={8} title="引擎名称">
          <Input allowClear onChange={e => store.f_name = e.target.value} placeholder="请输入"/>
        </SearchForm.Item>
        <SearchForm.Item span={8}>
          <Button type="primary" icon="sync" onClick={store.fetchRecords}>刷新</Button>
        </SearchForm.Item>
      </SearchForm>
      <AuthDiv auth="exec.template.add" style={{marginBottom: 16}}>
        <Button type="primary" icon="plus" onClick={() => store.showForm()}>新建</Button>
      </AuthDiv>
      <ComTable/>
    </AuthCard>
  )
})
