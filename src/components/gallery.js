import React, { PureComponent } from 'react'
import axios from 'axios'
import HitItem from './hitItem'
import FormSerach from './formSerach'

class Gallery extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            hits: [],
            currentPage: 1,
            pageSize: 12,
            currentKeyword: 'paris',
            totalPages: 1,
            pages: []
        }
    }

    getHits(){
        let url = 'https://pixabay.com/api/?key=50719525-bbb44416afab152b376c870ea&q=' + this.state.currentKeyword 
            + '&image_type=photo&pretty=true&page=' + this.state.currentPage + '&per_page=' + this.state.pageSize;
        axios.get(url).then(response => {
            const { hits } = response.data;
            this.setState({ hits });
            const totalPages = Math.ceil(response.data.totalHits / this.state.pageSize);
            this.setState({ totalPages }, () => {
                this.setState({ pages: Array.from({ length: this.state.totalPages }, (_, i) => i + 1) });
              });
            console.log('Hits fetched successfully:', hits);
        }
        ).catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    componentDidMount() {
        //this.getHits();
    }
    /*componentDidUpdate(prevProps, prevState) {
        if (prevState.currentKeyword !== this.state.currentKeyword) {
            this.getHits();
        }
    }*/

    search = (keyword) => {
        //e.preventDefault();
        this.setState({ currentKeyword: keyword, currentPage: 1 }, () => {
            this.getHits();
        }
        );
    }

    render() {
        return (
            <div className="gallery">
                <FormSerach onSearch={this.search} />
                <div className="row">
                    {
                    this.state.hits.map((hit, index) => (
                        <HitItem key={index} hit={hit} index={index} />
                    ))
                    }
                </div>
                <div>
                    <ul className="pagination justify-content-center">
                        {this.state.pages.map((page) => (
                            <li key={page} className={`page-item ${this.state.currentPage === page ? 'active' : ''}`}>
                                <button className="page-link" onClick={() => this.setState({ currentPage: page }, () => this.getHits())}>
                                    {page}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Gallery