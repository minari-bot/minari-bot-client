import { useMediaQuery } from "react-responsive";

export function useMediaQueries(){
    const isPc = useMediaQuery({ minWidth: 1024});
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isMobile = useMediaQuery({ maxWidth: 767});
    return { isPc, isTablet, isMobile };
}