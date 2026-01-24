import React, { createContext, useContext, useState, useCallback } from "react";

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
    const [cursorType, setCursorType] = useState("default"); // 'default' | 'text' | 'button' | 'custom'
    const [cursorText, setCursorText] = useState("");
    const [cursorIcon, setCursorIcon] = useState(null);
    const resetTimeoutRef = React.useRef(null);

    const setCursor = useCallback(({ type = "default", text = "", icon = null } = {}) => {
        // If there's a pending reset, clear it immediately
        if (resetTimeoutRef.current) {
            clearTimeout(resetTimeoutRef.current);
            resetTimeoutRef.current = null;
        }

        setCursorType(type);
        setCursorText(text);
        setCursorIcon(icon);
    }, []);

    const resetCursor = useCallback(() => {
        // Clear any existing timeout just in case
        if (resetTimeoutRef.current) {
            clearTimeout(resetTimeoutRef.current);
        }

        // Delay the reset slightly to allow a "setCursor" to intercept if we're just moving between items
        resetTimeoutRef.current = setTimeout(() => {
            setCursorType("default");
            setCursorText("");
            setCursorIcon(null);
        }, 100); // 100ms grace period
    }, []);

    return (
        <CursorContext.Provider value={{ cursorType, cursorText, cursorIcon, setCursor, resetCursor }}>
            {children}
        </CursorContext.Provider>
    );
};

export const useCursor = () => {
    const context = useContext(CursorContext);
    if (!context) {
        throw new Error("useCursor must be used within a CursorProvider");
    }
    return context;
};
