import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import usePopup from '../../customHooks/usePopup';

const FileMenu = () => {

    const { anchorEl, handleOpen, handleClose } = usePopup();

    return (
        <div>
            <Button aria-controls="File" style={{ color: 'whitesmoke' }} aria-haspopup="true" onClick={handleOpen}>
                Plik
            </Button>
            <Menu
                id="File"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Nowy projekt</MenuItem>
                <MenuItem onClick={handleClose}>Otwórz projekt</MenuItem>
                <MenuItem onClick={handleClose}>Zapisz</MenuItem>
                <MenuItem onClick={handleClose}>DUPA</MenuItem>
            </Menu>
        </div>
    )
}

export default FileMenu;