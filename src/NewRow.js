import React, {useEffect} from 'react'
import axios from 'axios'
import './NewRow.css'
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import AddUserDialog from './AddDialog'

// const styles = theme => ({
//     // root: {
//     //     backgroundColor: "red"
//     // }
//     TextField: {
//         '& > *': {
//             margin: theme.spacing(1),
//             width: '5ch',
//         },
//     },
// });

class NewRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Title: '',
            Link: '',
            Notes: '',
            Class: '',
            Categories: ''
        };

        this.baseState = this.state
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleChange(event) {
        const t = event.target;
        const value = t.value;
        const name = t.name;
        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        // event.preventDefault();

        const newRow = this.state

        axios.post('http://localhost:3000/addData', newRow)
            .then(
                (response) => {
                    console.log("Add Data:", response.status)
                    let objectID = response.data.ops[0]._id
                    
                    // add ID field to state
                    newRow._id = objectID
        
                    // add row to table state
                    this.props.addRow(newRow)
                })
            .catch((err) => console.log(err))
    }

    render() {
        // const { classes } = this.props;
        // className={classes.TextField}
        return (
            <AddUserDialog handleSubmit={this.handleSubmit} />
            // <form noValidate autoComplete="off" onSubmit={this.handleSubmit} >
            //     <TextField className="addData" name="Class" type="text" value={this.state.Class} onChange={this.handleChange} label="Class"/> 
            //     {/* <TextField id="standard-basic" label="Standard" /> */}
            //     <br/>
            //     <TextField className="addData" name="Title" type="text" value={this.state.Title} onChange={this.handleChange} label="Title"/> 
            //     <br />
            //     <TextField className="addData" name="Notes" type="text" value={this.state.Notes} onChange={this.handleChange} label="Notes"/> 
            //     <br />
            //     <TextField className="addData" name="Link" type="text" value={this.state.Link} onChange={this.handleChange} label="Link"/> 
            //     <br />
            //     <TextField className="addData" name="Categories" type="text" value={this.state.Categories} onChange={this.handleChange} label="Categories"/> 
            //     <br />
            //     <Button type="submit" value="Submit" variant="outlined"
            //         color="primary"
            //         startIcon={<SaveIcon />}>Save
            //     </Button>
               
                
            // </form>
        );
    }
}

// export default withStyles(styles, { withTheme: true })(NewRow)
export default NewRow

