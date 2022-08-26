import ActionTypes from "./action-types";

export const  addItemToList = (dispatch, currentTopic) => {
    dispatch({
        type: ActionTypes.SET_CURRENT_TOPIC,
        payload: currentTopic
    });
}
