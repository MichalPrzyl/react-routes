import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Blogs = () => {
  const [state, setState] = useState({
    selectedRecordId: undefined,
    catQuote: ""
  });
  const columns = [
    { key: 'id', name: 'ID', width: "400px" },
    { key: 'title', name: 'Title' }
  ];

  const rows = [
    { id: 0, title: 'Example' },
    { id: 1, title: 'Demo' },
    { id: 2, title: 'Demo2' },
    { id: 3, title: 'Demo3' },
    { id: 4, title: 'Demo4' },
  ];

  const changeSelectedRow = (e) => {
    console.log(e.row.id);
    setState({ ...state, selectedRecordId: e.row.id });
  }

  const getCatData = async () => {
    const url = 'https://catfact.ninja/fact'
    const response = await axios.get(url)
    // console.log(response.data.fact)
    setState({ ...state, catQuote: response.data.fact });

  }

  useEffect(() => {
    getCatData();
  }, [state.selectedRecordId])

  return <>
    <p>
      {state.catQuote}
    </p>
    <div className='data-grid-wrapper'>
      <DataGrid
        columns={columns}
        rows={rows}
        rowHeight={20}
        selectedRows={state.selectedRecordId}
        onCellClick={changeSelectedRow}
      // style={{ border: '10px solid green'}}

      />
    </div>

  </>;
};

export default Blogs;
