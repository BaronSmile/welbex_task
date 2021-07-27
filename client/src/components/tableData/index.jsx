import React, {useEffect, useState} from 'react';
import {Input, Table} from "antd";

const {Search} = Input;

const MainTable = () => {
  const [mainData, setMainData] = useState([]);
  const [searchRes, setSearchRes] = useState(null)

  const getData = async () => {
    try {
      const res = await fetch('/api/table_list')
      const data = await res.json()

      if (data) {
        setMainData(data);
      }
    } catch (err) {
      throw new Error(err.message || 'Перезагрузите страницу')
    }
  };

  const columns = [
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Количество',
      dataIndex: 'amount',
      key: 'amount',
      sorter: (a, b) => a.amount - b.amount,
    },
    {
      title: 'Расстояние',
      dataIndex: 'distance',
      key: 'distance',
      sorter: (a, b) => a.distance - b.distance,
    },
  ]

  console.log('DATA:', mainData)

  useEffect(() => {
    getData()
  }, []);

  const onSearch = (value) => {
    if (value) {
      const newFilterTable = mainData.filter(obj => {
          for (let key in obj) {
            if (key !== 'key') {
              const findVal = String(obj[key])
                .toLowerCase()
                .includes(value.toLowerCase());
              if (findVal) {
                return true
              }
            }
          }
          return false
        }
      )
      setSearchRes(newFilterTable)
    } else {
      setSearchRes(null)
    }
  };

  return (
    <div style={{margin: '1em 2em'}}>
      <Search
        placeholder="Поиск"
        allowClear
        enterButton="Найти"
        size="large"
        onSearch={onSearch}
      />
      <Table
        columns={columns}
        dataSource={searchRes || mainData}
      />
    </div>
  );
};

export default MainTable;
