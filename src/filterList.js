import React from 'react'
import { useFilters, useGlobalFilter } from 'react-table'
import { makeStyles } from '@material-ui/core/styles';
import './filterList.css'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        display: 'flex',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    Select: {
        maxwidth: 20,
    }
}));


// This is a custom filter UI for selecting
// a unique option from a list
function SelectColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id },
}) {

    const classes = useStyles();

    // Calculate the options for filtering
    // using the preFilteredRows
    const options = React.useMemo(() => {
        const options = new Set()

        preFilteredRows.forEach(row => {
            options.add(row.values[id])
        })
        return [...options.values()]
    }, [id, preFilteredRows])

    // Render a multi-select box
    return (
        <FormControl className={classes.formControl}>
            <Select className={classes.Select}
                // className={classes.Select}
                value={filterValue}
                defaultValue="undefined"
                onChange={e => {
                    setFilter(e.target.value || undefined)
                }}
            >
                <MenuItem defaultValue="">All</MenuItem>

                {options.map((option, i) => (
                    <MenuItem key={i} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default SelectColumnFilter