export const ACTIVE_ITEM = 'ACTIVE_ITEM';

export function actionActiveItem(item) {
    return {
        type: ACTIVE_ITEM,
        payload: {
            activeItem: item,
        }
    }
}