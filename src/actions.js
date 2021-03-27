import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import AddUserDialog from './AddDialog'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import './actions.css'

function Actions({ value, removeRow, addRow, data, id, setData, alertSetter }) {
    return (
        <>
            <div className="actions">
                <AddUserDialog add={false} addRow={addRow} data={data} id={id} setData={setData} alertSetter={alertSetter}/>
                
                <Tooltip title="Delete">
                    <Button value={value} onClick={removeRow} variant="outlined" color="primary">
                        <DeleteIcon/>
                    </Button>
                </Tooltip>
            </div>
        </> 
    )
}

export default Actions