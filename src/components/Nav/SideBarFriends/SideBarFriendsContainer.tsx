import SideBarFriends from "./SideBarFriends";
import {connect} from "react-redux";
import { AppStateType } from "../../../redux/redux-store";

// const SideBarFriendsContainer = (props) => {
//     return <StoreContext>
//         {(store) => {
//             let state = store.getState();
//             return <SideBarFriends friends={state.sidebar.friends}/>
//             }
//         }
//     </StoreContext>
// }

let mapStateToProps = (state:AppStateType) => {
    return {
        friends: state.sidebar.friends
    }
}

const SideBarFriendsContainer = connect(mapStateToProps, null)(SideBarFriends)

export default SideBarFriendsContainer;