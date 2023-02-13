import { Colors, Sizes } from "../types/global";
import { ButtonThemeProps } from "../components/button/types";
import { IconButtonThemeProps } from "src/components/iconButton/types";
import { InputThemeProps } from "src/components/input/types";

export interface ThemeContext {
    global?: {
        color?: Colors;
        direction?: "ltr" | "rtl";
        transition?: string;
        borderRadius?: string;
    };
    button?: {
        defaultProps?: Required<ButtonThemeProps>;
        styles?: {
            base?: string;
            colors?: Partial<Record<Colors, string>>;
            sizes?: Partial<Record<Sizes, string>>;
            variants?: Partial<Record<ButtonThemeProps["variant"], string>>;
        };
    };
    iconButton?: {
        defaultProps?: Required<IconButtonThemeProps>;
        styles?: {
            base?: string;
            colors?: Partial<Record<Colors, string>>;
            sizes?: Partial<Record<Sizes, string>>;
            variants?: Partial<Record<IconButtonThemeProps["variant"], string>>;
        };
    };
    input?: {
        defaultProps?: Required<InputThemeProps>;
        styles?: {
            base?: string;
            colors?: Partial<Record<Colors, string>>;
            sizes?: Partial<Record<Sizes, string>>;
            variants?: Partial<Record<InputThemeProps["variant"], string>>;
        };
    };
}

export type ThemeAction = (data: Partial<ThemeContext>) => void;
