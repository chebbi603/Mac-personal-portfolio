import React, { createContext, useContext, useState, useCallback } from "react";

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
    const [cursorType, setCursorType] = useState("default"); // 'default' | 'text' | 'button' | 'custom'
    const [cursorText, setCursorText] = useState("");
    const [cursorIcon, setCursorIcon] = useState(null);

    const setCursor = useCallback(({ type = "default", text = "", icon = null } = {}) => {
        setCursorType(type);
        setCursorText(text);
        setCursorIcon(icon);
    }, []);

    const resetCursor = useCallback(() => {
        setCursorType("default");
        setCursorText("");
        setCursorIcon(null);
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
