import React, { useState } from "react"
import { useFilters, useSortBy, useTable, useRowSelect } from "react-table"
import './Table.css'
import Checkbox from '@material-ui/core/Checkbox'
import TableToolbar from './toolbar'
import axios from 'axios';


export default function Table({
    columns,
    data,
    updateMyData,
    setData,
    setShowAlert,
    alertSetter,
    addRow
    }) {

    const IndeterminateCheckbox = React.forwardRef(
        ({ indeterminate, ...rest }, ref) => {
            const defaultRef = React.useRef()
            const resolvedRef = ref || defaultRef

            React.useEffect(() => {
                resolvedRef.current.indeterminate = indeterminate
            }, [resolvedRef, indeterminate])

            return (
                <>
                    <Checkbox ref={resolvedRef} {...rest} color="primary"/>
                </>
            )
        }
    )

    // Create a state
    const [filterInput, setFilterInput] = useState("");

    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps, 
        getTableBodyProps,
        headerGroups, 
        rows,
        prepareRow,
        setFilter,
        selectedFlatRows,
        state: { selectedRowIds },
    } = useTable(
        {
            columns,
            data,
            updateMyData
        },
        useFilters,
        useSortBy,
        useRowSelect,
        hooks => {
            hooks.allColumns.push(columns => [
                // makes a column for selection
                {
                    id: 'selection',
                    Header: ({ getToggleAllRowsSelectedProps }) => (
                        <div maxwidth="15px"> 
                            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
                            {/* {console.log(getToggleAllRowsSelectedProps())}   */}
                        </div>
                    ),
                    // The cell can use the individual row's getToggleRowSelectedProps method
                    // to render a checkbox
                    Cell: ({ row }) => (
                        <div maxwidth="15px">
                            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
                        </div>
                    ),
                },
                ...columns,
            ])
        }
    )

    // Update the state when input changes
    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilter("Title", value)
        setFilterInput(value);
    };

    // add more functions here that use selectedRowIDs for example, pass them as props
    // to component
    
    // multi-delete from table: pass setData to update table state, create new POST function
    const removeByIndexs = (array, indexs) =>
        array.filter((_, i) => !indexs.includes(i))

    const deleteUserHandler = event => {
        if (window.confirm('Are you sure you wish to delete these items?')) {
            const newData = removeByIndexs(
                data,
                Object.keys(selectedRowIds).map(x => parseInt(x, 10))
            )
            setData(newData)
        
            let list = []
            for (let i in selectedFlatRows) {
                list.push(selectedFlatRows[i].original._id)
            }
            console.log("list:" , list)

            axios.post('http://localhost:3000/deleteMany', list).then((result) => {
                if (result.status == 200) {
                    console.log("success deleting many")
                    setShowAlert({
                        show: true,
                        type: "success",
                        message: "Success deleting items!",
                    });
                } else {
                    setShowAlert({
                        show: true,
                        type: "error",
                        message: "Error deleting items!",
                    });
                }
            })
        }
    }
    
    return (
        <>
            <TableToolbar
                numSelected={Object.keys(selectedRowIds).length}
                deleteUserHandler={deleteUserHandler}
                selectedRows={selectedFlatRows}
                addRow={addRow}
                rows={rows}
                filterInput={filterInput}
                handleFilterChange={handleFilterChange}
                alertSetter = { alertSetter }
            />  

        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}
                                className={
                                    column.isSorted
                                        ? column.isSortedDesc
                                            ? "sort-desc"
                                            : "sort-asc"
                                        : ""
                                }
                            >
                                {column.render("Header")}
                                {/* Render the columns filter UI */}
                                <div>{column.canFilter ? column.render('Filter') : null}</div>
                        </th>
                    ))}
                   </tr>
                )
                )} 
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>
                                        {cell.render("Cell")}
                                    </td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {/* <p>Selected Rows: {Object.keys(selectedRowIds).length}
                {console.log((selectedFlatRows))} </p> */}

            {/* <pre>
                <code>
                    {JSON.stringify(
                        {
                            selectedRowIds: selectedRowIds,
                            'selectedFlatRows[]': selectedFlatRows.map(
                                d => d.original
                            ),
                        },
                        null,
                        2
                    )}
                </code>
            </pre> */}
        </>
    )
}