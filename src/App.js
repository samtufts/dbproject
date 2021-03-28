import './App.css';
import React, { useMemo, useState, useEffect } from "react";
import Table from "./Table"
import axios from 'axios';
import Genres from './genres'
import Button from '@material-ui/core/Button';
import ShowAlert from './showAlert'
import SelectColumnFilter from './filterList'
import LinkIcon from '@material-ui/icons/Link';
import Actions from './actions'
import Main from './main'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './login';
import Logout from './logout';
import NewLogin from './NewLogin'

function App() {
  // data array stores the data from the DB
  const [data, setData] = useState([])
  
  // store the username/pwd
  const [token, setToken] = useState();
  
  // state for showing alerts
  const [showAlert, setShowAlert] = useState({
    show: false,
    type: "",
    message: ""
  })

  function alertSetter(showValue, typeValue, msgValue) {
    setShowAlert({
      show: showValue,
      type: typeValue,
      message: msgValue
    }) 
  }

  // autoclose alerts
  useEffect(() => {
    if (showAlert.show == true) {
      const timeId = setTimeout(() => {
        // After 2 seconds set the show value to false
        alertSetter(false)
      }, 2000)

      return () => {
        clearTimeout(timeId)
      }
    }
  });
  
  
  // removes one document from the database and the table state
  function removeRow(e) {
    e.preventDefault();
    if (window.confirm('Are you sure you wish to delete this?')) {
      if (e.currentTarget.value) {
        let id = "_id=" + e.currentTarget.value
        axios.post('https://stark-anchorage-94670.herokuapp.com/deleteData', id).then((result) => {
          if (result.status == 200) {
            alertSetter(true, "success", "Success deleting item!")
            console.log("Remove Data: ", result.status)
          } else {
            alertSetter(true, "error", "Error deleting item!")
          }
        });
      }

      // remove row from the data state
      let newArray = data.filter(elem =>
        elem._id != e.currentTarget.value
      )
      setData(newArray)
    }
  }

  // add new document to table state
  function addRow(newRow) {
    setData(prev => prev.concat(newRow))
    alertSetter(true, "success", "Success adding row!")
  }
  
  // not in use: inline editing of cells
  const updateMyData = (rowIndex, columnId, value) => {
    e.preventDefault();
    setData((prev) =>
      prev.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...prev[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  // prepares the headers of the table
  const columns = useMemo(() => [
    {
      Header: " ", // don't know how to get rid of this header

      columns: [
        // {
        //   Header: "Row #",
        //   Cell: ({ row }) => <span>{row.index}</span>,
        //   Filter: "",
        //   filter: 'includes',
        // },
        {
          Header: "",
          accessor: "Class",
          Filter: SelectColumnFilter,
          filter: 'includes',
        },
        {
          Header: "Title",
          accessor: "Title",
          Filter: "",
          filter: 'includes',
        },
        {
          Header: "Notes",
          accessor: "Notes",
          Filter: "",
          filter: 'includes',
        },
        {
          Header: "Link",
          accessor: "Link",
          Cell: ({ cell: { value } }) =>
            <Button href={value} target="_blank" variant="outlined" color="primary">
              <LinkIcon />
            </Button>,
          Filter: "",
          filter: 'includes',
        },
        {
          Header: "",
          accessor: "Categories",
          // Cell method will provide the cell value; we pass it to render a custom component
          Cell: ({ cell: { value } }) => <Genres values={value} />,
          Filter: SelectColumnFilter,
          filter: 'includes',
        },
        {
          Header: "Actions",
          accessor: "_id",
          Cell: ({ cell: { value, row } }) => <Actions value={value} removeRow={removeRow} addRow={addRow} data={data} id={row.index} setData={setData} alertSetter={alertSetter}/>,
          Filter: "",
          filter: 'excludes',
        },
      ]
    }
  ], [data])

  // Get all data from DB and add it to the state 
  useEffect(() => {(async () => {
    let testing = false
    let getData = '';
    if (testing) {
      getData = "http://localhost:3000/getData";
    } else {
      getData = "https://stark-anchorage-94670.herokuapp.com/getData";
    }
    
    axios.get(getData)
        .then((result) => {
            setData(result.data)
            console.log(data)
        });

  })()
}, [])


  if (!token) {
      return (
        <>  
        <ShowAlert state={showAlert} setter={alertSetter} dog={"hello"}/>
        <NewLogin setToken={setToken} alertSetter={alertSetter} />
        </>
      )
  }

    return (
      <div className="App">
      <ShowAlert state={showAlert} setter={alertSetter} dog={"hello"}/>
      <Table columns={columns} data={data} updateMyData={updateMyData} setData={setData} setShowAlert={setShowAlert} addRow={addRow} alertSetter={alertSetter}
      />
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <NewLogin />
          </Route>
          <Route path="/logout">
            <NewLogin />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
