import React, { Component } from 'react';
import { InputAdornment, TextField } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import { Search } from 'material-ui-icons'

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
                    style={{ ...style }}
                />
        );
    }
}

const styles = theme => ({
    textFieldRoot: {
        flex: 1,
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 12px',
        boxShadow: '0 2px 10px 0 rgba(0,0,0,0.3)',
        marginBottom: 8
    }
});

export default withStyles(styles)(SearchBar);