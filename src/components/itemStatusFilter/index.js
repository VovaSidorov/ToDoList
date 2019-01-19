import React from 'react';
import './style.css'

const ItemStatusFilter = () => {
    return (
            <div className="btn-group pull-right">
                <button type="button"
                        className="btn btn-info">All</button>
                <button type="button"
                        className="btn btn-outline-secondary">Active</button>
                <button type="button"
                        className="btn btn-outline-secondary">Done</button>
            </div>
    );
};

export default ItemStatusFilter;