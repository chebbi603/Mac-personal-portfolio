import { useContext } from "react";
import { useTransitionCursor } from "../context/TransitionContext";

// Simplified hook to just return the transition function
export const useTransitionNavigate = () => {
    const { transitionTo } = useTransitionCursor();
    return transitionTo;
};
