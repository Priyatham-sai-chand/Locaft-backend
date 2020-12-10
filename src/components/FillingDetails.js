import React from 'react';
import {Dropdown, DropdownButton} from 'react-bootstrap';

const FillingDetails = () => {

    return (
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">asdf</Dropdown.Item>
            <Dropdown.Item href="#/action-2">zxcv</Dropdown.Item>
            <Dropdown.Item href="#/action-3">qewrty</Dropdown.Item>
        </DropdownButton>
    );
}

export default FillingDetails;