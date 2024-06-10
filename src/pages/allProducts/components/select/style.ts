import styled from 'styled-components';

import ArrowDropDown from '../../../../assets/arrowDropDown.png';
import theme from '../../../../styles/theme';

export const SelectBox = styled.div`
    width: max-content;
    padding-right: 20px;
    border-radius: 147px;
    border: 1px solid ${theme.accentForegroud};
    background: url(${ArrowDropDown}) no-repeat right transparent;
    background-position: calc(100% - 10px) center;
`;

export const Select = styled.select`
    padding: 8px 14px;
    border: none;
    border-radius: 0;
    outline: none;
    background: transparent;
    font-size: 14px;
    line-height: 120%;
    color: ${theme.dark};
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;

    option:first-child {
        display: none;
    }
`;

export const Option = styled.option`
    font-size: 14px;
    line-height: 120%;
    color: ${theme.dark};
`;
