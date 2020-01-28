import { css } from '@emotion/core';

export const imageGrid = css`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: minmax(50px, auto);

    .image-item:nth-child(5n){
    grid-column-end: span 2;
    }

    img{
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
    }
`;
