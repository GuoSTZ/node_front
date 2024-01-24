import React, { useEffect, useState } from 'react';
import { Table, Tabs, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';
import * as actions from './actions';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

enum PRIORITY_COLOR {
  P0 = 'red',
  P1 = 'orange',
  P2 = 'skyblue',
}

const columns: ColumnsType<DataType> = [
  {
    title: '任务',
    dataIndex: 'task',
    key: 'task',
    ellipsis: true
  },
  {
    title: '创建日期',
    dataIndex: 'time',
    key: 'time',
    width: 100,
    render: EmptyShow,
  },
  {
    title: '优先级',
    dataIndex: 'priority',
    key: 'priority',
    width: 80,
    render: (text: keyof typeof PRIORITY_COLOR) => (
      text
        ? <Tag color={PRIORITY_COLOR[text]}>{text}</Tag>
        : "-"
    ),
  },
  {
    title: '负责人',
    dataIndex: 'assignee',
    key: 'assignee',
    width: 80,
    render: EmptyShow,
  },
  {
    title: '完成日期',
    dataIndex: 'completionDate',
    key: 'completionDate',
    width: 150,
    render: TimeShow,
  },
  {
    title: '完成状态',
    dataIndex: 'completionStatus',
    key: 'completionStatus',
    width: 80,
    render: EmptyShow,
  },
  {
    title: '预估工时',
    dataIndex: 'estimatedHours',
    key: 'estimatedHours',
    width: 80,
    render: EmptyShow,
  },
  {
    title: '备注',
    dataIndex: 'notes',
    key: 'notes',
    width: 200,
    ellipsis: true,
    render: EmptyShow,
  },
];

function EmptyShow(text: string|number) {
  if(['number', 'string'].includes(typeof text)) {
    return text;
  } else {
    return "-";
  }
}

function TimeShow(text: number) {
  return text ? dayjs(text).format("YYYY-MM-DD") : "-";
}

const App: React.FC = () => {
  const [page, setPage] = useState({
    current: 1,
    pageSize: 10,
    total: 0
  })
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    handleFilter()
  }, [])

  const handleFilter = (params: any = {}) => {
    actions.fetchProject({ ...page, ...params }, (data: any) => {
      const { items, current, pageSize, total } = data;
      setTableData(items);
      setPage({ current, pageSize, total })
    })
  }

  const tableOnChange = (pagination: any, filters: any, sorter: any) => {
    setPage(pagination)
    handleFilter({ ...pagination, ...filters, ...sorter })
  }

  const TableTab = () => {
    return (
      <Table
        size='middle'
        onChange={tableOnChange}
        pagination={page}
        columns={columns}
        dataSource={tableData} />
    )
  }

  const tabItems = [
    {
      label: '表格展示',
      key: '1',
      children: <TableTab />
    }
  ]

  return (
    <Tabs
      // onChange={onChange}
      type="card"
      items={tabItems}
    />

  )
}

export default App;