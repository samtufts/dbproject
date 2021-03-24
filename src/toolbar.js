import React from 'react'
import AddUserDialog from './AddDialog'
import clsx from 'clsx'
import DeleteIcon from '@material-ui/icons/Delete'
// import GlobalFilter from './GlobalFilter'
import IconButton from '@material-ui/core/IconButton'
import { lighten, makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import { RiShareForwardFill } from 'react-icons/ri'



const useToolbarStyles = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light' ?
            {
                color: theme.palette.primary.main,
                backgroundColor: lighten(theme.palette.primary.light, 0.85),
            }
            :
            {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    title: {
        flex: '1 1 100%',
    },
    search: {
        position: "absolute",
        right: "0px"
    }
}))

const TableToolbar = props => {
    const classes = useToolbarStyles()

    const {
        numSelected,
        deleteUserHandler,
        selectedRows,
        addRow,
        rows,
        handleFilterChange,
        filterInput,
        alertSetter
    } = props

    return (
        <Toolbar className={clsx(classes.root, {[classes.highlight]: numSelected > 0})}>
            {numSelected > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1">
                    {numSelected} items selected
                </Typography>
            ) : (
                <>
                    <AddUserDialog addRow={addRow} add={true} alertSetter={alertSetter} />
                        
                    <TextField
                        id="outlined-search"
                        label={`Search ${rows.length} records...`}
                        type="search"
                        variant="outlined"
                        name="searchField"
                        className={clsx(classes.search)}
                        value={filterInput}
                        onChange={handleFilterChange}
                    />    
                </>
                )}

            {numSelected > 0 ? (
                <>
                    <Tooltip title="Delete">
                        <IconButton aria-label="delete" onClick={deleteUserHandler}> 
                            {/* <DeleteIcon color="secondary"/> */}
                        </IconButton>
                    </Tooltip>
                    
                    <Tooltip title="Share">

                            <IconButton aria-label="share" > 
                            <RiShareForwardFill color="#3F50B5"/>
                            </IconButton>

                    </Tooltip>
                    {console.log("selectedRows",selectedRows)}
                </>
            ) : (null)}
        </Toolbar>
    )
}

TableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
    deleteUserHandler: PropTypes.func.isRequired,
}

export default TableToolbar
