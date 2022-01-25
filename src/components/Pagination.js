import React from 'react';
import { ITEMS_PER_PAGE, LIMIT } from '../App';
import "./Pagination.css"

const Pagination  = ({pictures}) => {
    const data = new Array(LIMIT/ITEMS_PER_PAGE).fill(1)
    return (
        <div className="paginationItems">
            {data.map((_, index) => <div className="paginationItem">{index+1}</div>)}
        </div>
    );
}





// {props.pictures.map(picture => (<PaginationItems/>pictureUrlMax={picture.url} key={picture.id} pictureUrlMin={picture.thumbnailUrl} paintBigImage={props.paintBigImage}/>
//             ))}


export default Pagination