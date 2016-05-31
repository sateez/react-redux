const modal = (state,action)=>{
	switch(action.type){
		case "SHOW_MODAL_POPUP":return action.status ;
		case "HIDE_MODAL_POPUP":return action.status ;
		default: return state || {};
	}
}
export default modal
