import React from 'react';

import Snowfall from 'react-snowfall';
import { useSeason } from '../../hooks/useSeason';

export const Season = () => {
    const images = useSeason();

    return (
        <div style={{ width: '100%', height: '100px', position: 'relative' }}>
            <Snowfall
                images={images}
                radius={[10, 30]}
                speed={[-0.5, 0.5]}
                snowflakeCount={100}
            />
        </div>
    );
};
