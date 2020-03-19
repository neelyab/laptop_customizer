import React, {Component} from 'react';
import slugify from 'slugify';


class Options extends React.Component {
    render() {
        const USCurrencyFormat = this.props.USCurrencyFormat;
        const feature = this.props.feature
    return (
        this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)} 
              checked={item.name === this.props.selected[feature].name}
              onChange={e=>this.props.handleUpdate(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        );
      })
    )
    }

}
export default Options;