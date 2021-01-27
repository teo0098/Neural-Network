import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import NetworkStructure from './NetworkStructure/NetworkStructure';
import LearningProcess from './LearningProcess/LearningProcess';

const AccordionComponent = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                <Typography>Parametry strukturalne sieci</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <NetworkStructure />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                >
                <Typography>Parametry procesu uczenia</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <LearningProcess />
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default AccordionComponent;