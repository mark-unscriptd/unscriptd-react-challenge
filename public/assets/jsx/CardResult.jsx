import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import PreviewModal from './PreviewModal.jsx';

class CardResult extends React.Component {


    constructor(props, context) {
        super(props, context);

        this.selectCard = this.selectCard.bind(this);

        this.state = {
            colourSelected: this.props.colours,
            checked: this.props.checked
        }


    }

    /**
    * card selection action
    */
    selectCard(event) {


        if (event.target.checked === true) {
            this.setState({ checked: event.target.checked })
            this.setState({ colourSelected: "colour-selected" })
        } else {
            this.setState({ checked: this.props.checked })
            this.setState({ colourSelected: this.props.colours })
        }

        this.props.callbackFromCard(this.props.data, event.target.checked)

    }


    render() {

        return (
            <div className={"card-block card-custom container col-md-2 m-t-10 m-b-10 " + this.state.colourSelected}  >


                <table className="col-md-12 m-b-10 text-left">
                    <tbody>
                        <tr>
                            <td className='header col-md-12'>
                                <img className='img-thumbnail col-md-12 no-border format-padding' src={this.props.data.display_sizes[2].uri} />


                            </td>

                        </tr>
                    </tbody>
                </table>
                <div className="col-md-12  btn-select  format-padding text-center m-b-10">

                    <label className="btn btn-default col-md-12 border-primary" htmlFor={this.props.data.id}>
                        <input className="display-none select-box" id={this.props.data.id} name={this.props.data.id} type='checkbox' checked={this.state.checked} onChange={this.selectCard} />
                        <span>Select </span>
                    </label>

                </div>
                <PreviewModal object={this.props.data} caption={this.props.data.caption} title={this.props.data.title} artist={this.props.data.artist} preview={this.props.data.display_sizes[1].uri} id={this.props.data.id} />


            </div>


        );
    }


}

export default CardResult;