import { useEffect, useState } from 'react';
import { shuffle } from 'lodash';

export default function useColor(id) {
    const colors = [
        '#3903CF',
        '#863A32',
        '#E189AE',
        '#AD5967',
        '#9EA4A4',
        '#BB4B4B',
        '#56E24F',
        '#90B2B2',
        '#55ABC6',
        '#1B88C2',
    ];
    const [color, setColor] = useState(null);
    useEffect(() => {
        setColor(shuffle(colors).pop());
    }, [id]);
    return color;
}
