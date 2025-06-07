import React, { PureComponent } from 'react'

class FormSerach extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            keyWordValue: '',
        }
    }

    doSearch = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        if (this.state.keyWordValue.trim() === '') {
            alert('Please enter a keyword to search.');
            return;
        }
        this.props.onSearch(this.state.keyWordValue);
        this.setState({ keyWordValue: '' }); // Reset the input field after search
    }

    render() {
        return (
            <form onSubmit={this.doSearch}>
                <div className='row m-6 p-3'>
                    <div className='col'>
                        <input type="text" className="form-control" placeholder="Search for images"
                            value={this.state.keyWordValue}
                            onChange={(e) => this.setState({ keyWordValue: e.target.value })} />
                    </div>
                    <div className='col-auto'>
                        <button type='submit' className="btn btn-primary">Search</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default FormSerach