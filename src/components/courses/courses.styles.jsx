import { makeStyles } from '@mui/styles';

import { globalStyles } from '../../styles/globalStyles';

export const useStyles = makeStyles({
    title: {
        fontSize: globalStyles.titles.fontSize,
        marginBottom: globalStyles.titles.marginBottom,
    },
    course: {
        padding: '20px 0',
        height: '350px',
        textAlign: 'center',
    },
    certificate: {
        marginRight: 'auto',
        marginLeft: 'auto',
        backgroundPosition: '0 160px',
        backgroundSize: 'cover',
        cursor: 'pointer',
        height: '160px',
        width: '90%',
    },
    progressValue: {
        marginTop: '70px',
    },
    inProgress: {
        color: globalStyles.colors.blues.dodgerBlue,
        padding: '10px 11px',
    },
    complete: {
        color: globalStyles.colors.greens.lime,
        padding: '8px',
    },
    img: {
        width: '100%',
    },
});
