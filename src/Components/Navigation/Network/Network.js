import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Popover from '../../Popover/Popover';
import usePopup from '../../customHooks/usePopup';

const Network = () => {

    const { anchorEl, handleOpen, handleClose } = usePopup();

    return (
        <div>
            <Button aria-controls="Network" style={{ color: 'whitesmoke' }} aria-haspopup="true" onClick={handleOpen}>
                Sieć
            </Button>
            <Menu
                id="Network"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <Popover />
                </MenuItem>
                <MenuItem onClick={handleClose}>Uczenie sieci</MenuItem>
                <MenuItem onClick={handleClose}>Uruchomienie sieci</MenuItem>
            </Menu>
        </div>
    )
}

export default Network;