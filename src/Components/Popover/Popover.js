import React from 'react';
import Popover from '@material-ui/core/Popover';

import Accordion from '../Accordion/Accordion';
import usePopup from '../customHooks/usePopup';

const PopoverComponent = () => {

    const { anchorEl, handleOpen, handleClose } = usePopup();

    const open = Boolean(anchorEl);
    const id = open ? 'popup' : undefined;

    return (
        <div>
            <span aria-describedby={id} onClick={handleOpen}>
                Parametry sieci
            </span>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
                transformOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
            >
                <Accordion />
            </Popover>
        </div>
    )
}

export default PopoverComponent;