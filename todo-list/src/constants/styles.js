import {Platform, StatusBar } from 'react-native';

export const prioridades = {
    Alta: '#f00',
    Media: '#ff9800',
    Baixa: '#0f0'
}

export const STATUS_BAR_HEIGHT = Platform.OS === 'android' ? StatusBar.currentHeight : 0;
export const PRIMARY_COLOR = '#6200ee';
export const ACCENT_COLOR_YELLOW = '#ffc107';
export const ACCENT_COLOR_RED  = '#F44336';


export const TEXT_COLOR_DARK = '#333';
export const TEXT_COLOR_LIGHT = '#fff';
export const TEXT_COLOR_MEDIUM = '#555';
export const TEXT_COLOR_DISABLED = '#aaa';

export const BACKGROUND_COLOR_LIGHT = '#f5f5f5s';
export const BACKGROUND_COLOR_WHITE = '#fff';

export const BORDER_COLOR_LIGHT = '#ccc';
export const BORDER_COLOR_INPUT = '#f9f9f9';
export const OVERLAY_COLOR = 'rgba(0, 0, 0, 0.6)';