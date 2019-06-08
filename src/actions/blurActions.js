export const BLUR_ON = 'BLUR_ON';
export const BLUR_OFF = 'BLUR_OFF';

export function blurOn() {
    return {
        type: BLUR_ON,
        payload: {
            active: true,
        }
    }
}

export function blurOff() {
    return {
        type: BLUR_ON,
        payload: {
            active: false,
        }
    }
}