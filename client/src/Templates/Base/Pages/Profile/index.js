import Profile from './Profile';
import { connect } from "react-redux";
//import actionTypes from "../../Store/base.actions";

const mapStatetoProps = (state) => {
    console.log("state.user", state.user);
    return {
      ...state.UserState,
      theme: state.util.theme,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchUser: (username) => {
        dispatch({ type: actionTypes.USERNAME_FETCH, username });
      },
      refresh: () => dispatch({ type: actionTypes.REFRESH }),
    };
  };
  
export default connect(mapStatetoProps, mapDispatchToProps)(Profile);