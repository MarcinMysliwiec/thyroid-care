import React, { createContext, useContext, useState, useMemo } from 'react'
import { Dimensions } from 'react-native';

const SettingsContext = createContext({
    // initial state...
});

export const SettingsProvider = ({ children }) => {
    const [settings, setSettings] = useState({
        windowWidth: Dimensions.get('window').width,
        windowHeight: Dimensions.get('window').height,
    });

    const memoedValue = useMemo(() => ({
        settings
    }),
        // Update only if those changes:
        [settings]);

    return (
        <SettingsContext.Provider value={memoedValue}>
            {children}
        </SettingsContext.Provider >
    )
}

export default function useSettings() {
    return useContext(SettingsContext)
}
