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
        image: {
            width: '80%',
            padding: '20px',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
        },
    };
});
