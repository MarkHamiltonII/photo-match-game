import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(() => 
    typeof window !== "undefined" ? window.matchMedia(query).matches : false
    )

    useEffect(() => {
        if (typeof window === "undefined") return;
        const mql = window.matchMedia(query);
        function onChange(e: MediaQueryListEvent) {
            setMatches(e.matches)
        }
        setMatches(mql.matches);
        mql.addEventListener?.("change", onChange);
        return () => mql.removeEventListener?.("change", onChange);
    })

    return matches;
}

export function useIsMobile() {
    const isSmall = useMediaQuery("(max-width: 600px)")
    const isTouch = useMediaQuery("(pointer: coarse)")
    return isSmall || isTouch;
}

