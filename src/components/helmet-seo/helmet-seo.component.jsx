import React from 'react';
import { Helmet } from 'react-helmet-async';

export const HelmetSeo = ({ title, description, url }) => {
    const openGraph = `
            <meta property="og:url" content=${url} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content=${title} />
            <meta property="og:description" content=${description} />
    `;

    const headElement = document.querySelector('head');

    console.log(headElement);

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />
        </Helmet>
    );
};
