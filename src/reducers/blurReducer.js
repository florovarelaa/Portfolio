import { BLUR_ON, BLUR_OFF } from '../actions/blurActions';

export default function blurReducer(state = false, { type, payload }){
    switch (type) {
        case BLUR_ON:
            return payload.blur;
        case BLUR_OFF:
            return payload.blur;
        default:
            return state;
    }
}
