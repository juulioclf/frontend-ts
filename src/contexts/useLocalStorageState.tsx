import { useState, useEffect } from 'react';

function useLocalStorageState<T>(key: string, initialValue: T): [T, (value: T) => void] {
    const isClient = typeof window !== 'undefined';

    const [state, setState] = useState<T>(() => {
        if (isClient) {
            const storedValue = localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : initialValue;
        };
        return initialValue;
    });

    useEffect(() => {
        if (isClient) {
            localStorage.setItem(key, JSON.stringify(state));
        };
    }, [isClient, key, state]);

    return [state, setState];
};

export default useLocalStorageState;
