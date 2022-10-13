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
        library: {
            textAlign: 'center',
            height: '350px',
            [theme.breakpoints.down(480)]: { height: 'auto' },
            [theme.breakpoints.between(481, 1024)]: {
                height: '308px',
            },
        },
        progress: {
            position: 'absolute',
            width: '40px',
            height: '40px',
            right: 0,
            top: '-20px',
            textAlign: 'center',
            borderRadius: '50%',
            background: `rgba(${globalStyles.colors.basic.black}, .5)`,
            color: globalStyles.colors.whites.snow,
            '&.in-progress': {
                color: globalStyles.colors.blues.dodgerBlue,
                padding: '10px 11px',
            },
            '&.complete': {
                color: globalStyles.colors.greens.lime,
                padding: '8px',
            },
            '&.pending': {
                color: globalStyles.colors.basic.yellow,
                padding: '8px 10px',
            },
        },
        bookImage: {
            width: '50%',
            height: '180px',

            [theme.breakpoints.between(825, 1025)]: { width: '30%' },
            [theme.breakpoints.between(812, 824)]: { width: '40%' },
            [theme.breakpoints.between(639, 769)]: { width: '50%' },
            [theme.breakpoints.between(416, 569)]: { width: '30%' },
            [theme.breakpoints.between(359, 415)]: { width: '45%' },
            [theme.breakpoints.between(320, 358)]: { width: '30%' },
            [theme.breakpoints.between(281, 321)]: { width: '50%' },
            [theme.breakpoints.between(0, 281)]: { width: '70%' },
        },
        bookTitle: {
            fontSize: '16px',
            marginTop: '10px',
        },
        bookAuthorSpan: {
            color: '#ddd',
        },
    };
});
