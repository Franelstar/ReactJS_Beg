import { Link, useParams } from 'react-router-dom';
import HitItem from './hitItem';
import React, { useState, useEffect } from 'react';

const HitDetail = () => {
    const { id } = useParams();
    const [hit, setHit] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getHitDetails = async () => {
            console.log('Fetching hit details for ID:', id);
            const url = `https://pixabay.com/api/?key=50719525-bbb44416afab152b376c870ea&id=${id}`;

            try {
                const response = await fetch(url);
                const data = await response.json();

                if (data.hits && data.hits.length > 0) {
                    setHit(data.hits[0]);
                    setLoading(false);
                } else {
                    setError('Hit not found');
                    setLoading(false);
                }
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        getHitDetails();
    }, [id]);

    return (
        <div>
            {loading ? (
                <div className="text-center">
                    <h2>Loading...</h2>
                </div>
            ) : error ? (
                <div className="text-center">
                    <h2>Error: {error}</h2>
                </div>
            ) : (
                <div>
                    <div className="row">
                        <HitItem hit={hit} index={0} />
                    </div>

                    <div>
                        <ul className='nav nav-pills'>
                            <li className='list-group-item'>
                                Views:<strong>{hit.views}</strong>
                            </li>
                            <li className='list-group-item'>
                                Comments:<strong>{hit.comments}</strong>
                            </li>
                            <li className='list-group-item'>
                                Views:<strong>{hit.views}</strong>
                            </li>
                        </ul>
                    </div>

                    <Link to="/gallery" className="btn btn-primary m-2">
                        Back to Gallery
                    </Link>
                </div>
            )}

        </div>
    );
};

export default HitDetail;