import { makeStyles } from '@mui/styles';

import { globalStyles } from '../../styles/globalStyles';

export const useStyles = makeStyles({
    title: {
        fontSize: globalStyles.titles.fontSize,
        marginBottom: globalStyles.titles.marginBottom,
    },
    contacts: {
        height: '218.52px',
        paddingBottom: '10px',
    },
    cv: {
        width: '58px',
        padding: '7px 0',
        margin: '5px auto',
        fontSize: '20px',
        fontWeight: 'bold',
        backgroundColor: globalStyles.colors.whites.white,
        color: globalStyles.colors.basic.black,
    },
});
