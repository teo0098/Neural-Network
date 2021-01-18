import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import FileMenu from './FileMenu/FileMenu';
import Network from './Network/Network';

const Navigation = () => {

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <FileMenu />
                    <Network />
                    <div style={{ margin: '0 0 0 auto' }}>
                        <Typography variant="h6" noWrap>
                            Sieć neuronowa - choroby
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navigation;