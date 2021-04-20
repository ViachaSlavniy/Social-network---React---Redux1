import React, {useState} from 'react';
import s from './Nav.module.css';
import {Link, NavLink} from "react-router-dom";
import SideBarFriendsContainer from "./SideBarFriends/SideBarFriendsContainer";
import {Menu} from "antd";
import {DesktopOutlined, PieChartOutlined, UserOutlined} from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";

type NavType = {
    
}

const Nav:React.FC<NavType> = () => {
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = (collapsed: boolean) => {
        setCollapsed(collapsed);
    };

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                    <Link to="/profile">Profile</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                    <Link to="/dialogs">Messages</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<UserOutlined />}>
                    <Link to="/developers">Developers</Link>
                </Menu.Item>
                {/*<SubMenu key="sub2" icon={<TeamOutlined />} title="Team">*/}
                {/*    <Menu.Item key="6">Team 1</Menu.Item>*/}
                {/*    <Menu.Item key="8">Team 2</Menu.Item>*/}
                {/*</SubMenu>*/}
                {/*<Menu.Item key="9" icon={<FileOutlined />}>*/}
                {/*    Files*/}
                {/*</Menu.Item>*/}
            </Menu>
        </Sider>
    )
}

// <nav className={s.nav}>
//     <div className={s.item}>
//         <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
//     </div>
//     <div className={s.item}>
//         <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
//     </div>
//     <div className={s.item}>
//         <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
//     </div>
//     <div className={s.item}>
//         <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
//     </div>
//     <div className={s.item}>
//         <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
//     </div>
//     <div className={s.item}>
//         <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
//     </div>
//     <div className={s.item}>
//         <NavLink to="/friends" activeClassName={s.activeLink}>Friends</NavLink>
//         <SideBarFriendsContainer />
//     </div>
// </nav>

export default Nav;