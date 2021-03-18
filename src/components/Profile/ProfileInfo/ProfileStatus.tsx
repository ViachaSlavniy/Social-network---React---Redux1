import React from 'react';
import { AppStateType } from '../../../redux/redux-store';

type PropsType = {
    userStatus: string
    updateStatus: (newStatus: string) => void
}

class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false,
        status: this.props.userStatus
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e:any) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps:any, prevState:AppStateType) {
        if(prevProps.userStatus !== this.props.userStatus) {
            this.setState({
                status: this.props.userStatus
            });
        }
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.userStatus || '-----'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange}  autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} type="text"/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;