import { ACTIVE_ITEM } from '../actions/itemActions';

export default function itemReducer(state = 0, { type, payload }){
    switch (type) {
        case ACTIVE_ITEM: 
            return payload.activeItem
        default:
            return state;
    }
}