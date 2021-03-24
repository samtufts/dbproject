import React from 'react'
import NewRow from './NewRow';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

class ShowAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };

        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
        this.setState({
            showComponent: !this.state.showComponent,
        });
    }

    render() {
        return (
            <div>
                <Button className="addDataForm" onClick={this._onButtonClick} variant="outlined" color="primary" startIcon={<AddCircleOutlineIcon />}>Row</Button>
                {this.state.showComponent ? <NewRow addRow={this.props.addRow} hide={this.state.showComponent}/> : null}
            </div>
        );
    }
}

export default ShowAddForm