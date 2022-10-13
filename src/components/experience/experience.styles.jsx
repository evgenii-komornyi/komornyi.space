import { makeStyles } from '@mui/styles';

import { globalStyles } from '../../styles/globalStyles';

export const useStyles = makeStyles({
    title: {
        fontSize: globalStyles.titles.fontSize,
        marginBottom: globalStyles.titles.marginBottom,
    },
    job: { padding: '20px' },
    jobTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    specification: {
        position: 'relative',
        top: '-5px',
        fontSize: '15px',
    },
    period: {
        fontWeight: 'bold',
    },
    jobDescription: {
        marginTop: '10px',
    },
});
