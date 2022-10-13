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
        language: {
            padding: '20px 0',
            height: '300px',
            textAlign: 'center',
            [theme.breakpoints.between('xs', 'md')]: {
                height: 'auto',
            },
        },
        languageIcon: {
            width: '50px',
            height: '50px',
            marginRight: 'auto',
            marginLeft: 'auto',
        },
    };
});
