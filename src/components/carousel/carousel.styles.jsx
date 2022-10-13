import { makeStyles } from '@mui/styles';
import { useTheme } from '@emotion/react';

import { globalStyles } from '../../styles/globalStyles';

export const useStyles = makeStyles(() => {
    const theme = useTheme();

    return {
        wrapper: {
            padding: '0 0 100px',
            marginBottom: '20px',
            textAlign: 'center',
            width: '100%',
            overflow: 'hidden',

            '& button': {
                border: `1px solid ${globalStyles.colors.basic.black}`,
                color: `${globalStyles.colors.basic.white}`,
                margin: '0 5px',
                fontSize: '14px',
                borderRadius: '50%',
                padding: '10px 10px',

                '&.prev': {
                    position: 'relative',
                    bottom: '16%',
                    right: '40%',
                    zIndex: 5,

                    [theme.breakpoints.down(480)]: {
                        bottom: '25%',
                        right: '34%',
                    },

                    [theme.breakpoints.between(481, 767)]: {
                        bottom: '19%',
                        right: '41%',
                    },
                },

                '&.next': {
                    position: 'relative',
                    bottom: '16%',
                    left: '40%',
                    zIndex: 5,

                    [theme.breakpoints.down(480)]: {
                        bottom: '25%',
                        left: '34%',
                    },

                    [theme.breakpoints.between(481, 767)]: {
                        bottom: '19%',
                        left: '41%',
                    },
                },

                '&:focus': {
                    boxShadow: `0 0 10px ${globalStyles.colors.whites.snow}`,
                },
            },
        },
        carousel: {
            height: '510px',
            position: 'relative',
            width: '500px',
            maxWidth: '80%',
            margin: '0 auto',

            [theme.breakpoints.down(480)]: {
                height: '420px',
                maxWidth: '100%',
                margin: '0 auto',
            },

            [theme.breakpoints.between(481, 767)]: {
                height: '530px',
                maxWidth: '100%',
                margin: '0 auto',
            },
        },
        carouselSlide: {
            color: `${globalStyles.colors.whites.white}`,
            position: 'absolute',
            height: '100%',
            width: '100%',
            top: 0,
            left: 0,
            transition: 'transform 500ms, opacity 500ms',
            fontSize: '30px',

            '& .content': {
                padding: '5px',
                width: '100%',
                textAlign: 'center',
                position: 'relative',
                zIndex: 999,

                '& h5.title::first-letter': {
                    textTransform: 'uppercase',
                },

                '& p.description': {
                    fontSize: '15px',
                },
            },

            '&.hidden': {
                opacity: 0,
            },
        },
        carouselSlidePrevious: {
            zIndex: 0,
            transform: 'translate(-90%) scale(0.5)',
            opacity: 0,
            pointerEvents: 'none',

            '& .content': {
                display: 'none',
            },
        },
        carouselSlideLeft: {
            zIndex: 1,
            transform: 'translate(-60%) scale(0.8)',
            opacity: 0.7,
            cursor: 'pointer',

            '& .content': {
                display: 'none',
            },
        },
        carouselSlideActive: {
            zIndex: 2,

            '& img': {
                boxShadow: `0 0 20px rgba(${globalStyles.colors.basic.black}, .5)`,
            },
        },
        carouselSlideRight: {
            zIndex: 1,
            transform: 'translate(60%) scale(0.8)',
            opacity: 0.7,
            cursor: 'pointer',

            '& .content': {
                display: 'none',
            },
        },
        carouselSlideNext: {
            transform: 'translate(90%) scale(0.5)',
            zIndex: 0,
            opacity: 0,
            pointerEvents: 'none',

            '& .content': {
                display: 'none',
            },
        },
    };
});
