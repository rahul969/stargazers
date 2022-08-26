import ActionTypes from "./action-types";

const AppReducer = (state, action) => {
   switch(action.type) {
       case ActionTypes.SET_CURRENT_TOPIC:
           return {
               ...state,
               currentTopic: action.payload
           }
       default:
           return state;
   }
}

export default AppReducer;