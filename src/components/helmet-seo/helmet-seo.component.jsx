import React from 'react';
import { Helmet } from 'react-helmet-async';

export const HelmetSeo = ({ title, description, url }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta
                property="og:image"
                content="https://media.kasperskydaily.com/wp-content/uploads/sites/92/2019/08/30094529/internet-in-space-featured.jpg"
            />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="300" />
            <meta property="og:image:height" content="300" />
        </Helmet>
    );
};
