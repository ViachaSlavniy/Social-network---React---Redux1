import React from 'react';
import SideBarFriends from "./SideBarFriends";
import {connect} from "react-redux";

// const SideBarFriendsContainer = (props) => {
//     return <StoreContext>
//         {(store) => {
//             let state = store.getState();
//             return <SideBarFriends friends={state.sidebar.friends}/>
//             }
//         }
//     </StoreContext>
// }

let mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends
    }
}

let mapDispatchToProps = () => {
    return {

    }
}

const SideBarFriendsContainer = connect(mapStateToProps,mapDispatchToProps)(SideBarFriends)

export default SideBarFriendsContainer;