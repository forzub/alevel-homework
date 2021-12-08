import React, { Fragment, Component} from 'react';
import MyInput from './MyInput';

class RangeToInput extends Component{
    constructor(props){
        super(props);
        this.state = {value: 50}
    }

    ChangeValue = (val) =>{
        this.setState({value: val});
    }

    render(){
        return(
            <Fragment>
                <div className="ri_sect">
                    <div className="ri_wrp">
                        <div className="ri-range-bx">
                            <MyInput type='range' min='0' max='100' step="1" onInput={ e => this.ChangeValue(e.target.value) } value={this.state.value} />
                        </div>
                        <div className="ri-input-bx">
                            <MyInput type='text' value={this.state.value} />
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default RangeToInput;