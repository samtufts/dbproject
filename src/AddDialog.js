import React, { useState } from 'react'
import EditIcon from '@material-ui/icons/Edit';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'
import axios from 'axios'

const AddUserDialog = props => {
    const { addRow, add, data, id, setData, alertSetter } = props
    const initialRow = () => {
        // creates blank fields to add new document
        if (add) {
            return {
                Class: '',
                Title: '',
                Link: '',
                Categories: '',
                Notes: '',
                // _id: ''
            }
        } else {
        // populates the dialog with the document's data
            return {
                Class: data[id].Class,
                Title: data[id].Title,
                Link: data[id].Link,
                Categories: data[id].Categories,
                Notes: data[id].Notes,
                _id: data[id]._id
            }
        }
    }
    
    const [row, setRow] = useState(initialRow())
    const [open, setOpen] = React.useState(false)
  
    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleAdd = event => {
        handleClose()
        handleSubmit(row)
    }

    
    // when adding a new document to the state and DB
    const handleSubmit = row => {
        
        axios.post('https://stark-anchorage-94670.herokuapp.com/addData', row)
            .then((response) => {
                console.log("Add Data:", response.status)
                let objectID = response.data.ops[0]._id
                // add ID field to state
                row._id = objectID
                // add row to table state (handles alerts)
                addRow(row)
            })
            .catch((err) => {
                console.log(err)
                alertSetter(true, "error", "Error adding data")
            })
    }

    // when updating an existing document in the state and DB
    const handleChange = name => ({ target: { value } }) => {
        setRow({ ...row, [name]: value })
    }

    const handleEditSave = event => {
        handleClose()
        setData((prev) =>
            prev.map(function callback(oldrow, index) {
                if (index === id) {
                    return {
                        ...prev[index] = row,
                    };
                }
                return oldrow;
            })
        );

        axios.post('https://stark-anchorage-94670.herokuapp.com/updateData', row)
            .then((response) => {
                console.log("Update Data:", response.status, response)
                if (response.status == 200) {
                    alertSetter(true, "success", "Data successfully updated!")
                } else {
                    alertSetter(true, "error", "Error updating data")
                }
            })
            .catch((err) => {
                console.log(err)
                alertSetter(true, "error", "Error updating data")
            })
    }
  
    
    return (
        <div>
            {add ? (
                <Tooltip title="Add">
                    <Button className="addDataForm" onClick={handleClickOpen} variant="outlined" color="primary" size="large" startIcon={<AddCircleOutlineIcon fontSize="large"/>}>
                        Document
                        </Button>
                </Tooltip>
            ) : (
                <Tooltip title="Edit">
                    <Button aria-label="edit" onClick={handleClickOpen} variant="outlined" color="secondary">
                        <EditIcon />
                    </Button>
                </Tooltip>
                )
            }

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{add? ("Add New Document"):("Edit Document")}</DialogTitle>
                <DialogContent>
                    <TextField autoFocus margin="dense" label="Class" type="text" fullWidth
                        value={row.Class} // displays value from state
                        onChange={handleChange('Class')} //sets state's field with value entered  e.g. setRow(row.class: value) 
                    />
                    
                    <TextField margin="dense" label="Title" type="text" fullWidth value={row.Title} onChange={handleChange('Title')} />
                    
                    <TextField margin="dense" label="Notes" type="text" fullWidth value={row.Notes} onChange={handleChange('Notes')} multiline />
                    
                    <TextField margin="dense" label="Link" type="text" fullWidth value={row.Link} onChange={handleChange('Link')} />
                    
                    <TextField margin="dense" label="Categories" type="text" fullWidth value={row.Categories} onChange={handleChange('Categories')} />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    {add ? (
                        <Button onClick={handleAdd} color="primary">
                            Save
                        </Button>
                    ) : (
                        <Button onClick={handleEditSave} color="primary">
                            Save
                        </Button>)}

                    
                </DialogActions>
            </Dialog>
        </div>
    )
}

AddUserDialog.propTypes = {
    // addUserHandler: PropTypes.func.isRequired,
}

export default AddUserDialog
