import SideBarFriends from "./SideBarFriends";
import {connect} from "react-redux";
import { AppStateType } from "../../../redux/redux-store";


const mapStateToProps = (state:AppStateType) => {
    return {
        friends: state.sidebar.friends
    }
}

const SideBarFriendsContainer = connect(mapStateToProps, {})(SideBarFriends)

export default SideBarFriendsContainer;