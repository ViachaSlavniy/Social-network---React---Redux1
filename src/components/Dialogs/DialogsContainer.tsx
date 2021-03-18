import {addNewMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import { AppStateType } from "../../redux/redux-store";
import { DialogType, MessageType } from "../../types/types";

type MapStatePropsType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
}

type MapDispatchPropsType = {
    addNewMessage: (newMessage: string) => void
}

type OwnPropsType = {
    
}



let mapStateToProps = (state:AppStateType) => {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData
    }
}


export default compose(
    connect<
    MapStatePropsType, 
    MapDispatchPropsType, 
    OwnPropsType, 
    AppStateType>
    (mapStateToProps, {addNewMessage}),
    withAuthRedirectComponent
)(Dialogs)