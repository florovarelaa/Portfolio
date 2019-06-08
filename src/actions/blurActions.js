export const BLUR_ON = 'blur:blurOn';
export const BLUR_OFF = 'blur:blurOff'

export function blurOn() {
    return {
        type: BLUR_ON,
        payload: {
            blur: true,
        }
    }
}

export function blurOff() {
    return {
        type: BLUR_ON,
        payload: {
            blur: false,
        }
    }
}