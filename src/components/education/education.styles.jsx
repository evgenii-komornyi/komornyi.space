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
        education: {
            textAlign: 'center',
            height: '274px',
            [theme.breakpoints.down('lg')]: {
                height: 'auto',
            },
        },
        institution: {
            fontWeight: 'bold',
        },

        period: {
            fontWeight: 'bold',
        },
    };
});
