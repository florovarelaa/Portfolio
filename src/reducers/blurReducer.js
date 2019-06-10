import { BLUR_ON, BLUR_OFF } from '../actions/blurActions';

export default function blurReducer(state = { 
                                        active: false,
                                        blurRadius: 15,
                                        blurTime: 500,
                                    }, 
                                    { type, payload }){
    switch (type) {
        case BLUR_ON:
            return { ...state, active:payload.active};
        case BLUR_OFF:
            return payload.active;
        default:
            return state;
    }
}
