import React from 'react';

const usePopup = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleOpen = event => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return { anchorEl, handleOpen, handleClose };
}

export default usePopup