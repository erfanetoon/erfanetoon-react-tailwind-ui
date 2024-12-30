import { useMediaQuery } from "react-responsive";

export const useResponsive = () => {
    const isXs = useMediaQuery({ query: "(min-width: 480px)" });
    const isSm = useMediaQuery({ query: "(min-width: 640px)" });
    const isMd = useMediaQuery({ query: "(min-width: 768px)" });
    const isLg = useMediaQuery({ query: "(min-width: 1024px)" });
    const isXl = useMediaQuery({ query: "(min-width: 1280px)" });
    const isXxl = useMediaQuery({ query: "(min-width: 1536px)" });

    return { isXxs: !isXs, isXs, isSm, isMd, isLg, isXl, isXxl };
};

export default useResponsive;
