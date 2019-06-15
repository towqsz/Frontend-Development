import React, {Component} from 'react';

class Dollar extends Component {
    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
      this.props.onDollarChange(e.target.value);
    };

    render() {
        const cash = this.props.dollars;
        return (
            <div>
                <label>Dollars</label>
                <input value={cash} onChange={this.handleChange}/>
            </div>
        )
    }
}

export default Dollar;