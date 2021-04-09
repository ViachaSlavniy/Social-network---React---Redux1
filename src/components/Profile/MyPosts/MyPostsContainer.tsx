import {actions} from "../../../redux/profile-reducer";
import MyPosts, {DispatchPropsType, MapPropsType} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

const { newPostsActionCreator } = actions;


let mapStateToProps = (state:AppStateType) => {
    return {
        postsData: state.profilePage.postsData,
    }
}

const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
    addNewPosts: newPostsActionCreator
})(MyPosts)

export default MyPostsContainer;