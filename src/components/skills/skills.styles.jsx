import { makeStyles } from '@mui/styles';

import { globalStyles } from '../../styles/globalStyles';

export const useStyles = makeStyles({
    title: {
        fontSize: globalStyles.titles.fontSize,
        marginBottom: globalStyles.titles.marginBottom,
    },
    moreThanLimitLength: {
        padding: '.5rem 1.25rem !important',
    },
    card: { marginTop: '20px', paddingTop: '10px' },
    favorite: {
        position: 'absolute',
        top: '-10px',
        right: '-10px',
        '& > *': {
            color: globalStyles.colors.whites.snow,
        },
    },
    skillIcon: {
        width: '50px',
        height: '50px',
        marginBottom: '10px',
        filter: 'invert(98%) sepia(98%) saturate(0%) hue-rotate(331deg) brightness(101%) contrast(101%)',
    },
});
