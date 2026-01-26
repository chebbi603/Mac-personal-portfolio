import { useMemo } from "react";

/**
 * useContextAwareness Hook
 * 
 * Detects the user's local time and referrer source to provide
 * context-aware greetings, preloader text, and time-based theming.
 */
export function useContextAwareness() {
    const contextData = useMemo(() => {
        const now = new Date();
        const hour = now.getHours();

        // Determine time of day
        let timeOfDay;
        if (hour >= 0 && hour < 6) {
            timeOfDay = "night";
        } else if (hour >= 6 && hour < 12) {
            timeOfDay = "morning";
        } else if (hour >= 12 && hour < 18) {
            timeOfDay = "afternoon";
        } else {
            timeOfDay = "evening";
        }

        // Determine referrer - check both document.referrer AND UTM parameters
        let referrer = null;
        const referrerUrl = document.referrer.toLowerCase();
        const urlParams = new URLSearchParams(window.location.search);
        const utmSource = (urlParams.get("utm_source") || "").toLowerCase();

        // Check UTM source first (more reliable for social platforms)
        if (utmSource === "ig" || utmSource === "instagram") {
            referrer = "instagram";
        } else if (utmSource === "linkedin" || utmSource === "li") {
            referrer = "linkedin";
        } else if (utmSource === "twitter" || utmSource === "x") {
            referrer = "twitter";
        } else if (referrerUrl.includes("linkedin.com")) {
            referrer = "linkedin";
        } else if (referrerUrl.includes("twitter.com") || referrerUrl.includes("x.com")) {
            referrer = "twitter";
        } else if (referrerUrl.includes("instagram.com")) {
            referrer = "instagram";
        } else if (referrerUrl.includes("google.com")) {
            referrer = "google";
        }

        // Generate greeting, welcome text, and preloader text
        let greeting;
        let welcomeText;
        let preloaderText1;
        let preloaderText2;

        // Referrer-based messaging takes priority
        if (referrer === "linkedin") {
            greeting = "Saw my post? Here's the deep dive.";
            welcomeText = "WELCOME FROM LINKEDIN";
            preloaderText1 = "LIKED MY LINKEDIN?";
            preloaderText2 = "LEARN MORE.";
        } else if (referrer === "twitter") {
            greeting = "Welcome from X. Let's talk product.";
            welcomeText = "WELCOME FROM X";
            preloaderText1 = "FROM X?";
            preloaderText2 = "LET'S TALK PRODUCT.";
        } else if (referrer === "instagram") {
            greeting = "From the 'gram? Welcome to the studio.";
            welcomeText = "WELCOME FROM INSTAGRAM";
            preloaderText1 = "FROM THE 'GRAM?";
            preloaderText2 = "WELCOME ABOARD.";
        } else {
            // Time-based greetings
            switch (timeOfDay) {
                case "night":
                    greeting = "Burning the midnight oil? Let's build something worth staying up for.";
                    welcomeText = "NIGHT OWL MODE";
                    preloaderText1 = "NIGHT OWL?";
                    preloaderText2 = "LET'S BUILD.";
                    break;
                case "morning":
                    greeting = "Good morning. Let's ship something today.";
                    welcomeText = "GOOD MORNING";
                    preloaderText1 = "GOOD MORNING";
                    preloaderText2 = "GET YOUR COFFEE READY.";
                    break;
                case "afternoon":
                    greeting = "Afternoon focus? Let's design something that matters.";
                    welcomeText = "GOOD AFTERNOON";
                    preloaderText1 = "AFTERNOON FOCUS";
                    preloaderText2 = "LOADING...";
                    break;
                case "evening":
                    greeting = "Evening session? The best ideas come after hours.";
                    welcomeText = "GOOD EVENING";
                    preloaderText1 = "EVENING EXPLORATION?";
                    preloaderText2 = "GETTING STARTED...";
                    break;
                default:
                    greeting = "Bridging Human-Centric Design and Robust Engineering.";
                    welcomeText = "";
                    preloaderText1 = "LOADING";
                    preloaderText2 = "PORTFOLIO...";
            }
        }

        // Theme colors based on time of day
        const themeColors = {
            night: {
                overlay: "rgba(30, 0, 60, 0.4)",
                accent: "#d4a5ff",
                navbarBase: "#1a0a2e",
            },
            morning: {
                overlay: "rgba(255, 180, 100, 0.15)",
                accent: "#ffd699",
                navbarBase: "#2d1f00",
            },
            afternoon: {
                overlay: "rgba(0, 0, 0, 0.5)",
                accent: "#fefae0",
                navbarBase: "#000000",
            },
            evening: {
                overlay: "rgba(80, 40, 120, 0.3)",
                accent: "#c9a0ff",
                navbarBase: "#150a25",
            },
        };

        return {
            timeOfDay,
            referrer,
            greeting,
            welcomeText,
            preloaderText1,
            preloaderText2,
            themeColors: themeColors[timeOfDay],
        };
    }, []);

    return contextData;
}

export default useContextAwareness;

