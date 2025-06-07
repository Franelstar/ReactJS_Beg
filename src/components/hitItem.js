import React, { PureComponent } from 'react'

class HitItem extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div key={this.props.index} className="col-md-4">
                <div className="card m-3">
                    <div className="card-header">
                    {this.props.hit.tags} | {this.props.hit.webformatWith} x {this.props.hit.webformatHeight}
                    </div>
                    <div className="card-body">
                        <img src={this.props.hit.webformatURL} alt={this.props.hit.tags} className="card-img" height={200} />
                    </div>
                </div>
            </div>
        )
    }
}

export default HitItem