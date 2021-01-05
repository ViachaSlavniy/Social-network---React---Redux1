import React, {useEffect, useState} from 'react';

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.userStatus);

    // componentDidUpdate(prevProps, prevState) {
    //     if(prevProps.userStatus !== this.props.userStatus) {
    //         this.setState({
    //             status: this.props.userStatus
    //         });
    //     }
    // }

    useEffect( () => {
        setStatus(props.userStatus);
    },[props.userStatus])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }


    return (
        <div>
            {!editMode &&
            <div>
                <b>Status: </b><span onDoubleClick={activateEditMode}>{status || '-----'}</span>
            </div>
            }
            {editMode &&
            <div>
                <b>Status: </b><input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                       value={status} type="text"/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;