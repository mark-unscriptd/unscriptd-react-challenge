import React, { Component } from 'react';
import { InputAdornment, TextField } from 'material-ui';
import { Search } from 'material-ui-icons'
import { withStyles } from 'material-ui/styles';

class SearchBar extends Component {

    state = {
        term: ''
    };

    render() {
        const { classes, style } = this.props;
        return (
                <TextField
                    placeholder="Search captions"
                    fullWidth
                    value={this.state.term}
                    onChange={event => {
                        const term = event.target.value;
                        this.setState({ term });
                        this.props.onChange(term);
                    }}
                    InputProps={{
                        disableUnderline: true,
                        classes: {
                            root: classes.textFieldRoot
                        },
                        endAdornment:
                            <InputAdornment position="end">
                                <Search />
                            </InputAdornment>
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

const styles = {
    textFieldRoot: {
        flex: 1,
        backgroundColor: '#FFF',
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 12px',
        boxShadow: '0 2px 10px 0 rgba(0,0,0,0.3)'
    }
};

export default withStyles(styles)(SearchBar);