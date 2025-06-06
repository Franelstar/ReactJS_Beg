import React, { Component } from 'react';

class Count extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: props.title || "Default Title",
            value: props.value || 0,
            image: props.image || "images/default.png",
            counter : 1,
            list : [0]
         };
    }

    computer(e) {
        let value = this.state.counter;
        if (e === '+') {
            value++;
        } else if (e === '-') {
            value--;
        }
        if (this.state.counter === 0 && e === '-') {
            value = 0;
        }

        this.setState({ 
            counter: value,
            list: new Array(value).fill(0)
        });
    }
    compute = (e) => {
        this.computer(e);
    }
    
    render() {
        return (
            <div className="count">
                <div className='card m-3'>
                    <div className='card-header'>
                        <strong>
                        {this.props.title} : {this.state.counter} 
                        </strong>
                    </div>
                    <div className='ml-auto'>
                        <button onClick={()=>this.compute('+')} className='btn btn-primary m-2'>+</button>
                        <button onClick={()=>this.compute('-')} className='btn btn-primary m-2'>-</button>
                    </div>
                    <div className='card-body'>
                        <h5 className='card-title'>Titre de la carte</h5>
                        <p className='card-text'>Ceci est un exemple de carte utilisant Bootstrap.</p>
=                        <div>
                            {
                                this.state.list.map((item, index) => (
                                    <img key={index} src={this.props.image} alt="Profidle" className='img-fluid' width={150} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Count;