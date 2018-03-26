import React, { Component } from 'react';
import { IconButton, Input, InputAdornment, TextField } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import { Search } from 'material-ui-icons'

class SearchBar extends Component {

    state = {
        term: ''
    };

    render() {
        const { classes, style } = this.props;
        return (
            <Input
                placeholder="Search captions"
                value={this.state.term}
                onChange={event => {
                    const term = event.target.value;
                    this.setState({ term });
                    this.props.onChange(term);
                }}
                disableUnderline={true}
                classes={{
                    root: classes.textFieldRoot,
                    input: classes.textFieldInput,
                }}
                endAdornment={
                    <InputAdornment position="end">
                        <Search />
                    </InputAdornment>
                }
                style={{ ...style }}
            />
        );
    }
}

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 200
    },
    formControl: {
        margin: theme.spacing.unit,
    },
    inputLabelFocused: {
        color: purple[500],
    },
    inputUnderline: {
        '&:after': {
            backgroundColor: purple[500],
        },
    },
    textFieldRoot: {
        padding: 0,
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    textFieldInput: {
        borderRadius: 4,
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 12px',
        width: 'calc(100% - 24px)',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
    textFieldFormLabel: {
        fontSize: 18,
    },
});

export default withStyles(styles)(SearchBar);