import { css } from '@emotion/core';

export const wrapper = css`
    display: flex;
`;

export const row = css`
    display: flex;
    align-items: stretch;
    max-width: 320px;
`;

export const label = css`
    display: inline-block;
    font-weight: bold;
    width: 110px;
    margin-right:15px;
`
export const value = css`
    max-width: 180px;
`

export const left = css`
    margin-top: 5px;
    width: 700px;

    >img {
        width: inherit;
    }
`;

export const right = css`
    margin-top: 5px;
    display:flex;
    flex-direction: column;
    margin-left: 10px;
}
`;

