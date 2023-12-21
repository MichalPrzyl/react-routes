import { DataGrid } from '@mui/x-data-grid';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Blogs = () => {
  const [state, setState] = useState({
    selectedRecordId: undefined,
    catQuote: ""
  });
  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'title',
      headerName: 'Title',
      cellClassName: (params) => {
        // console.log(params.row.title[0])
        if (params.row.title[0] === "H") {
          return 'negative'
        }
      },
    }
  ];

  const rows = [
    { id: 0, title: 'Example' },
    { id: 1, title: 'Demo' },
    { id: 2, title: 'Hemo2' },
    { id: 3, title: 'Demo3' },
    { id: 4, title: 'Hemo4' },
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
        rowHeight={50}
        selectedRows={state.selectedRecordId}
        onCellClick={changeSelectedRow}
        // style={{ border: '10px solid green'}}
        sx={{
          boxShadow: 2,
          border: 10,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:focus': {
            color: 'green',
          },
        }}
        getRowClassName={(params) => `super-app-theme--${params.row.title[0]}`}

      />
    </div>

  </>;
};

export default Blogs;
