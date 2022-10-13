import { makeStyles } from '@mui/styles';
import { useTheme } from '@emotion/react';

import { globalStyles } from '../../styles/globalStyles';

export const useStyles = makeStyles(() => {
    const theme = useTheme();

    return {
        title: {
            fontSize: globalStyles.titles.fontSize,
            marginBottom: globalStyles.titles.marginBottom,
        },
        card: {
            height: '450px',
            textAlign: 'center',

            [theme.breakpoints.down('lg')]: {
                height: 'auto',
            },
        },
        cardActionArea: {
            '&:hover': {
                textDecoration: 'none',
                cursor: 'default',
            },
        },
        contentContainer: {
            height: '90%',
        },
    };
});
