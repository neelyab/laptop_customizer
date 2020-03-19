import React from 'react';
import Features from '../Features/Features';

class Form extends React.Component {
    render() {
        return (
            <form className="main__form">
            <h2>Customize your laptop</h2>
            < Features 
            features={this.props.features}
            USCurrencyFormat={this.props.USCurrencyFormat}
            selected = {this.props.selected}
            handleUpdate={this.props.handleUpdate}
            />
          </form>
        )
    }
}
export default Form;