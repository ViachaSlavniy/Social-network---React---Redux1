(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[0],{107:function(e,t,a){e.exports={content:"Profile_content__XJG-Q"}},128:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(36),r=a(4),s={dialogsData:[{id:1,name:"Dmitriy",img:"https://html5css.ru/w3images/avatar2.png"},{id:2,name:"Viacheslav",img:"https://www.w3schools.com/howto/img_avatar.png"},{id:3,name:"Anjela",img:"https://html5css.ru/howto/img_avatar2.png"},{id:4,name:"Svetlana",img:"https://html5css.ru/w3images/avatar6.png"},{id:5,name:"Sergey",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeKZbcVtvtJKKvj5jnN11zgX82gll4TsnmFg&usqp=CAU"}],messagesData:[{message:"Hello!",img:"https://html5css.ru/w3images/avatar2.png"},{message:"How are you?",img:"https://www.w3schools.com/howto/img_avatar.png"},{message:"Let's go to train",img:"https://html5css.ru/howto/img_avatar2.png"},{message:"I'm fine",img:"https://html5css.ru/w3images/avatar6.png"},{message:"UUUU ska",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeKZbcVtvtJKKvj5jnN11zgX82gll4TsnmFg&usqp=CAU"}]},o=function(e){return{type:"ADD-NEW-MESSAGE",newMessageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-NEW-MESSAGE":var a=t.newMessageText,o={message:a,img:"https://html5css.ru/w3images/avatar2.png"};return Object(r.a)(Object(r.a)({},e),{},{messagesData:[o].concat(Object(n.a)(e.messagesData))});default:return e}}},133:function(e,t,a){e.exports=a.p+"static/media/unknown-user.1e976c46.png"},135:function(e,t,a){e.exports=a.p+"static/media/preloader.e1c23af8.svg"},137:function(e,t,a){e.exports={item:"Post_item__3fTh5"}},14:function(e,t,a){e.exports={nav:"Nav_nav__FI7sh",item:"Nav_item__fAzAu",activeLink:"Nav_activeLink__3PAa-",someFriends:"Nav_someFriends__N9ZQm"}},141:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(19),r=a(20),s=a(22),o=a(21),i=a(0),c=a.n(i),u=a(9),l=a(10),m=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(s.a)(i,t);var a=Object(o.a)(i);function i(){return Object(n.a)(this,i),a.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(u.a,{to:"/login"})}}]),i}(c.a.Component);return Object(l.b)(m)(t)}},167:function(e,t,a){e.exports=a(293)},168:function(e,t,a){},177:function(e,t,a){},293:function(e,t,a){"use strict";a.r(t);a(168);var n=a(66),r=a.n(n),s=a(0),o=a.n(s),i=a(19),c=a(20),u=a(22),l=a(21),m=a(14),p=a.n(m),f=a(11),d=a(91),g=a.n(d),h=function(e){var t=e.friends.map((function(e){return o.a.createElement("div",null,o.a.createElement(f.b,{to:"/"},o.a.createElement("img",{className:g.a.userAva,src:e.img})),o.a.createElement(f.b,{to:"/"},e.name))}));return o.a.createElement("div",{className:g.a.someFriends},t)},E=a(10),v=Object(E.b)((function(e){return{friends:e.sidebar.friends}}),(function(){return{}}))(h),b=function(e){return o.a.createElement("nav",{className:p.a.nav},o.a.createElement("div",{className:p.a.item},o.a.createElement(f.b,{to:"/profile",activeClassName:p.a.activeLink},"Profile")),o.a.createElement("div",{className:p.a.item},o.a.createElement(f.b,{to:"/dialogs",activeClassName:p.a.activeLink},"Messages")),o.a.createElement("div",{className:p.a.item},o.a.createElement(f.b,{to:"/news",activeClassName:p.a.activeLink},"News")),o.a.createElement("div",{className:p.a.item},o.a.createElement(f.b,{to:"/music",activeClassName:p.a.activeLink},"Music")),o.a.createElement("div",{className:p.a.item},o.a.createElement(f.b,{to:"/settings",activeClassName:p.a.activeLink},"Settings")),o.a.createElement("div",{className:p.a.item},o.a.createElement(f.b,{to:"/users",activeClassName:p.a.activeLink},"Users")),o.a.createElement("div",{className:p.a.item},o.a.createElement(f.b,{to:"/friends",activeClassName:p.a.activeLink},"Friends"),o.a.createElement(v,null)))},_=function(){return o.a.createElement("footer",{className:"footer"},"IT-KAMASUTRA.COM")},O=a(9),S=function(){return o.a.createElement("div",null,"News")},w=(a(177),function(){return o.a.createElement("div",null,"Music")}),j=function(){return o.a.createElement("div",null,"Settings")},P=a(12),N=a.n(P),y=a(23),C=a(36),k=a(4),A=a(49).create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"deb5a1cf-eef7-4206-9237-48ed86537d51"}}),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return A.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},I=function(e){return A.post("follow/".concat(e)).then((function(e){return e.data}))},T=function(e){return A.delete("follow/".concat(e)).then((function(e){return e.data}))},x=function(e){return F.getProfile(e)},F={getProfile:function(e){return A.get("profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return A.get("profile/status/"+e).then((function(e){return e.data}))},updateStatus:function(e){return A.put("/profile/status",{status:e})}},L=function(){return A.get("auth/me").then((function(e){return e.data}))},z=function(e,t,a,n){return A.post("/auth/login",{email:e,password:t,rememberMe:a,captcha:n})},D=function(){return A.delete("/auth/login")},M=function(){return A.get("/security/get-captcha-url").then((function(e){return e.data}))},R={users:[],pageSize:10,totalUsersCount:0,portionSize:10,currentPage:1,isFetching:!1,isFollowingProgress:[]},G=function(e){return{type:"FOLLOW",userId:e}},B=function(e){return{type:"UNFOLLOW",userId:e}},W=function(e){return{type:"SET_TOTAL_USERS_COUNT",count:e}},H=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},J=function(e,t){return{type:"TOGGLE_FOLLOWING_IN_PROGRESS",followingProgress:e,userId:t}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(k.a)(Object(k.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(k.a)(Object(k.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(k.a)(Object(k.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(k.a)(Object(k.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(k.a)(Object(k.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(k.a)(Object(k.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(k.a)(Object(k.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(k.a)(Object(k.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_FOLLOWING_IN_PROGRESS":return Object(k.a)(Object(k.a)({},e),{},{isFollowingProgress:t.followingProgress?[].concat(Object(C.a)(e.isFollowingProgress),[t.userId]):e.isFollowingProgress.filter((function(e){return e!==t.userId}))});default:return e}},K=a(37),V=a.n(K),Z=a(133),X=a.n(Z),Q=a(69),Y=a(57),$=a(72),ee=a.n($),te=a(134),ae=a.n(te),ne=function(e){for(var t=Math.ceil(e.totalItemsCount/e.pageSize),a=[],n=1;n<=t;n++)a.push(n);var r=Math.ceil(t/e.portionSize),i=Object(s.useState)(1),c=Object(Y.a)(i,2),u=c[0],l=c[1],m=(u-1)*e.portionSize+1,p=u*e.portionSize;return o.a.createElement("div",{className:ee.a.pagination},u>1&&o.a.createElement("button",{onClick:function(){return l(u-1)}},"Prev"),a.filter((function(e){return e>=m&&e<=p})).map((function(t){return o.a.createElement("span",{key:t,onClick:function(){e.onPageChanged(t)},className:ae()(Object(Q.a)({},ee.a.selectedPage,e.currentPage===t),ee.a.paginationItem)},t)})),r>u&&o.a.createElement("button",{onClick:function(){return l(u+1)}},"Next"))},re=function(e){return o.a.createElement("div",null,o.a.createElement(ne,{currentPage:e.currentPage,totalItemsCount:e.totalUsersCount,pageSize:e.pageSize,onPageChanged:e.onPageChanged,portionSize:e.portionSize}),e.users.map((function(t){return o.a.createElement("div",{key:t.id},o.a.createElement("div",{className:V.a.wrapper},o.a.createElement("div",{className:V.a.userItem},o.a.createElement("div",null,o.a.createElement(f.b,{to:"/profile/"+t.id},o.a.createElement("img",{className:V.a.avatar,src:t.photos.small?t.photos.small:X.a,alt:"userPhoto"})),t.followed?o.a.createElement("button",{disabled:e.isFollowingProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},className:V.a.followBtn},"Unfollow"):o.a.createElement("button",{disabled:e.isFollowingProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},className:V.a.followBtn},"Follow"))),o.a.createElement("div",{className:V.a.userInfo},o.a.createElement("div",null,o.a.createElement("div",null,t.name),o.a.createElement("div",null,t.status)),o.a.createElement("div",null,o.a.createElement("div",null,"u.location.country"),o.a.createElement("div",null,"u.location.city")))))})))},se=a(135),oe=a.n(se),ie=function(e){return o.a.createElement("div",null,o.a.createElement("img",{src:oe.a}))},ce=a(136),ue=Object(ce.a)((function(e){return e.usersPage.users}),(function(e){return e})),le=function(e){return e.usersPage.pageSize},me=function(e){return e.usersPage.totalUsersCount},pe=function(e){return e.usersPage.currentPage},fe=function(e){return e.usersPage.isFetching},de=function(e){return e.usersPage.isFollowingProgress},ge=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.requestUsers(t,e.props.pageSize)},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.props.isFetching?o.a.createElement(ie,null):null,o.a.createElement(re,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,isFollowingProgress:this.props.isFollowingProgress,portionSize:this.props.portionSize}))}}]),a}(o.a.Component),he=Object(E.b)((function(e){return{users:ue(e),pageSize:le(e),totalUsersCount:me(e),currentPage:pe(e),isFetching:fe(e),isFollowingProgress:de(e),portionSize:e.usersPage.portionSize}}),{setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},setTotalUsersCount:W,requestUsers:function(e,t){return function(){var a=Object(y.a)(N.a.mark((function a(n){var r;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(H(!0)),a.next=3,U(e,t);case 3:r=a.sent,n(H(!1)),n({type:"SET_USERS",users:r.items}),n(W(r.totalCount));case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},follow:function(e){return function(){var t=Object(y.a)(N.a.mark((function t(a){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(J(!0,e)),t.next=3,I(e);case 3:0===t.sent.resultCode&&a(G(e)),a(J(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(y.a)(N.a.mark((function t(a){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(J(!0,e)),t.next=3,T(e);case 3:0===t.sent.resultCode&&a(B(e)),a(J(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(ge),Ee=a(46),ve=a.n(Ee),be=function(e){var t=Object(s.useState)(!1),a=Object(Y.a)(t,2),n=a[0],r=a[1],i=Object(s.useState)(e.userStatus),c=Object(Y.a)(i,2),u=c[0],l=c[1];Object(s.useEffect)((function(){l(e.userStatus)}),[e.userStatus]);return o.a.createElement("div",null,!n&&o.a.createElement("div",null,o.a.createElement("span",{onDoubleClick:function(){r(!0)}},u||"-----")),n&&o.a.createElement("div",null,o.a.createElement("input",{onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(u)},value:u,type:"text"})))},_e=function(e){return e.profile?o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("img",{className:ve.a.backgroundPicture,src:"https://cdn.tribloo.com/storage/app/media/_mediathumbs/tribloo-destinations-124-cropped-images-dive-norway-8-10-978-298-1526660074-9458e322565a645c2d96bdd300eba8b1.jpg"})),o.a.createElement("div",{className:ve.a.userInfoWrapper},o.a.createElement("div",{className:ve.a.avatarWrapper},o.a.createElement("img",{className:ve.a.avatar,src:e.profile.photos.large})),o.a.createElement("div",{className:ve.a.userInfo},o.a.createElement("div",null,o.a.createElement("div",null,"Name: ",e.profile.fullName),o.a.createElement(be,{userStatus:e.userStatus,updateStatus:e.updateStatus})),o.a.createElement("div",null,"About me: ",e.profile.aboutMe),o.a.createElement("div",null,"Contacts: ",e.profile.contacts.vk),o.a.createElement("div",null,"Looking for a job: ",e.profile.lookingForAJob?"Yes":"No"),o.a.createElement("div",null,"Looking for a job description: ",e.profile.lookingForAJobDescription)))):o.a.createElement(ie,null)},Oe=(a(107),{postsData:[{id:1,message:"Hey, how are you?",likesCounts:15},{id:2,message:"It is my first post",likesCounts:20}],profile:null,userStatus:""}),Se=function(e){return{type:"SET_USER_STATUS",status:e}},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-NEW-POST":var a={id:3,message:t.postText,likesCounts:0};return Object(k.a)(Object(k.a)({},e),{},{newPostText:"",postsData:[].concat(Object(C.a)(e.postsData),[a])});case"SET_USER_PROFILE":return Object(k.a)(Object(k.a)({},e),{},{profile:t.profile});case"SET_USER_STATUS":return Object(k.a)(Object(k.a)({},e),{},{userStatus:t.status});case"DELETE_POST":return Object(k.a)(Object(k.a)({},e),{},{postsData:Object(C.a)(e.postsData.filter((function(e){return e.id!==t.postId})))});default:return e}},je=a(73),Pe=a.n(je),Ne=a(137),ye=a.n(Ne),Ce=function(e){return o.a.createElement("div",{className:ye.a.item},o.a.createElement("img",{src:"https://avatars.mds.yandex.net/get-pdb/1352825/a5f8fbd7-515e-49f8-81d6-be55a2daac92/s600"}),e.message,o.a.createElement("div",null,o.a.createElement("span",null,"like")," ",e.likesCounts))},ke=a(129),Ae=a(130),Ue=a(41),Ie=a(42),Te=Object(Ue.a)(30),xe=Object(Ae.a)({form:"posts"})((function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement("div",null,o.a.createElement(ke.a,{name:"post",component:Ie.a,validate:[Ue.b,Te],placeholder:"Post message...",typeField:"textarea"})),o.a.createElement("div",null,o.a.createElement("button",{className:Pe.a.newPostBtn},"Add post")))})),Fe=function(e){var t=e.postsData.map((function(e){return o.a.createElement(Ce,{message:e.message,likesCounts:e.likesCounts})}));return o.a.createElement("div",{className:Pe.a.postsBlock},o.a.createElement("div",null,o.a.createElement("h3",null,"My posts..."),o.a.createElement(xe,{onSubmit:function(t){e.newPosts(t.post)}}),o.a.createElement("div",{className:Pe.a.newPosts},"New posts"),o.a.createElement("div",null,t)))},Le=Object(E.b)((function(e){return{postsData:e.profilePage.postsData}}),(function(e){return{newPosts:function(t){e(function(e){return{type:"ADD-NEW-POST",postText:e}}(t))}}}))(Fe),ze=function(e){return o.a.createElement("div",null,o.a.createElement(_e,{profile:e.profile,userStatus:e.userStatus,updateStatus:e.updateStatus}),o.a.createElement(Le,null))},De=(a(141),a(8)),Me=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getProfile(e),this.props.getUserStatus(e)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(ze,Object.assign({},this.props,{profile:this.props.profile,userStatus:this.props.userStatus,updateStatus:this.props.updateUserStatus})))}}]),a}(o.a.Component),Re=Object(De.d)(Object(E.b)((function(e){return{profile:e.profilePage.profile,userStatus:e.profilePage.userStatus,authorizedUserId:e.auth.userId}}),{getProfile:function(e){return function(){var t=Object(y.a)(N.a.mark((function t(a){var n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e);case 2:n=t.sent,a({type:"SET_USER_PROFILE",profile:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUserStatus:function(e){return function(){var t=Object(y.a)(N.a.mark((function t(a){var n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F.getStatus(e);case 2:n=t.sent,a(Se(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateUserStatus:function(e){return function(){var t=Object(y.a)(N.a.mark((function t(a){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F.updateStatus(e);case 2:0===t.sent.data.resultCode&&a(Se(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),O.f)(Me),Ge=a(71),Be=a.n(Ge),We=function(e){return o.a.createElement("header",{className:Be.a.header},o.a.createElement("div",{className:Be.a.loginBlock},e.isAuth?o.a.createElement("div",null,e.login," - ",o.a.createElement("button",{onClick:e.logout},"Logout")):o.a.createElement(f.b,{to:"/login"},"Login")),o.a.createElement("img",{src:"https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png"}))},He=a(39),Je={userId:null,login:null,email:null,isAuth:!1,captchaUrl:null},qe=function(e,t,a,n){return{type:"SET_AUTH_USER_DATA",data:{userId:e,login:t,email:a,isAuth:n}}},Ke=function(){return function(){var e=Object(y.a)(N.a.mark((function e(t){var a,n,r,s,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:0===(a=e.sent).resultCode&&(n=a.data,r=n.id,s=n.login,o=n.email,t(qe(r,s,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTH_USER_DATA":case"SET_CAPTCHA":return Object(k.a)(Object(k.a)({},e),t.data);default:return e}},Ze=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(We,this.props)}}]),a}(o.a.Component),Xe=Object(E.b)((function(e){return{id:e.auth.id,login:e.auth.login,email:e.auth.email,isAuth:e.auth.isAuth}}),{logout:function(){return function(){var e=Object(y.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:0===e.sent.data.resultCode&&t(qe(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ze),Qe=a(32),Ye=a.n(Qe),$e=Object(Ae.a)({form:"login"})((function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement("div",null,o.a.createElement(ke.a,{placeholder:"Email",name:"email",component:Ie.a,validate:[Ue.b]})),o.a.createElement("div",null,o.a.createElement(ke.a,{placeholder:"Password",type:"password",name:"password",component:Ie.a,validate:[Ue.b]})),o.a.createElement("div",null,o.a.createElement(ke.a,{type:"checkbox",name:"rememberMe",component:"input"}),"Remember me"),e.error&&o.a.createElement("div",{className:Ye.a.borderError+" "+Ye.a.error},e.error),e.captchaUrl?o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("img",{src:e.captchaUrl})),o.a.createElement(ke.a,{name:"captcha",component:Ie.a,type:"text",placeholder:"Captcha..."})):null,o.a.createElement("div",null,o.a.createElement("button",null,"Login")))})),et=function(e){return e.isAuth?o.a.createElement(O.a,{to:"/profile"}):o.a.createElement("div",null,o.a.createElement("h1",null,"LOGIN"),o.a.createElement($e,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))},tt=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(et,{login:this.props.login,isAuth:this.props.isAuth,captchaUrl:this.props.captchaUrl})}}]),a}(o.a.Component),at=Object(E.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,a,n){return function(){var r=Object(y.a)(N.a.mark((function r(s){var o,i,c,u;return N.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,z(e,t,a,n);case 2:if(0===(o=r.sent).data.resultCode&&s(Ke()),1===o.data.resultCode&&(i=o.data.messages?o.data.messages[0]:"Some error",s(Object(He.a)("login",{_error:i}))),10!==o.data.resultCode){r.next=12;break}return r.next=8,M();case 8:c=r.sent,s({type:"SET_AUTH_USER_DATA",data:{captchaUrl:c.url}}),u=c.data.messages?c.data.messages[0]:"Some error",s(Object(He.a)("login",{_error:u}));case 12:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})(tt),nt={initialized:!1},rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIALIZED":return Object(k.a)(Object(k.a)({},e),{},{initialized:!0});default:return e}},st=function(e){return function(t){return o.a.createElement(s.Suspense,{fallback:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."},o.a.createElement(e,t))}},ot=o.a.lazy((function(){return a.e(3).then(a.bind(null,295))})),it=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?o.a.createElement("div",{className:"app-wrapper"},o.a.createElement(Xe,null),o.a.createElement(b,null),o.a.createElement("div",{className:"app-wrapper-content"},o.a.createElement(O.b,{path:"/profile/:userId?",render:function(){return o.a.createElement(Re,null)}}),o.a.createElement(O.b,{path:"/dialogs",render:st(ot)}),o.a.createElement(O.b,{path:"/users",render:function(){return o.a.createElement(he,null)}}),o.a.createElement(O.b,{path:"/news",render:function(){return o.a.createElement(S,null)}}),o.a.createElement(O.b,{path:"/music",render:function(){return o.a.createElement(w,null)}}),o.a.createElement(O.b,{path:"/settings",render:function(){return o.a.createElement(j,null)}}),o.a.createElement(O.b,{path:"/login",render:function(){return o.a.createElement(at,null)}})),o.a.createElement(_,null)):o.a.createElement(ie,null)}}]),a}(o.a.Component),ct=Object(De.d)(O.f,Object(E.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Ke());Promise.all([t]).then((function(){e({type:"SET_INITIALIZED"})}))}}}))(it),ut=a(128),lt={friends:[{id:1,name:"Dmitriy",img:"https://html5css.ru/w3images/avatar2.png"},{id:2,name:"Viacheslav",img:"https://www.w3schools.com/howto/img_avatar.png"},{id:3,name:"Anjela",img:"https://html5css.ru/howto/img_avatar2.png"}]},mt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=Object(k.a)({},e);return t},pt=a(139),ft=a(131),dt=Object(De.c)({profilePage:we,messagesPage:ut.b,sidebar:mt,usersPage:q,auth:Ve,form:ft.a,app:rt}),gt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||De.d,ht=Object(De.e)(dt,gt(Object(De.d)(Object(De.a)(pt.a))));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f.a,{basename:"/Social-network---React---Redux1"},o.a.createElement(E.a,{store:ht},o.a.createElement(ct,null)))),document.getElementById("root"))},32:function(e,t,a){e.exports={error:"FormControls_error__MLktG",borderError:"FormControls_borderError__163eL",textArea:"FormControls_textArea__3wPh_"}},37:function(e,t,a){e.exports={wrapper:"Users_wrapper__1JrVz",userItem:"Users_userItem__tM6Vy",userInfo:"Users_userInfo__2ArFj",followBtn:"Users_followBtn__Lp04J",avatar:"Users_avatar__1pr-c"}},41:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n=function(e){if(!e)return"Required zone"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},42:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(140),r=a(0),s=a.n(r),o=a(32),i=a.n(o),c=function(e){var t=e.input,a=e.meta,r=Object(n.a)(e,["input","meta"]);return s.a.createElement("div",null,s.a.createElement("div",null,"textarea"===r.typeField?s.a.createElement("textarea",Object.assign({className:(a.touched&&a.error&&i.a.borderError)+" "+i.a.textArea},t,r)):s.a.createElement("input",Object.assign({className:a.touched&&a.error&&i.a.borderError},t,r))),s.a.createElement("div",null,a.touched&&a.error&&s.a.createElement("span",{className:i.a.error},a.error)))}},46:function(e,t,a){e.exports={backgroundPicture:"ProfileInfo_backgroundPicture__2D4tn",userInfoWrapper:"ProfileInfo_userInfoWrapper__1bf7I",userInfo:"ProfileInfo_userInfo__1aEcQ",avatarWrapper:"ProfileInfo_avatarWrapper__313v6",avatar:"ProfileInfo_avatar__3i8o5"}},71:function(e,t,a){e.exports={header:"Header_header__3BgwV",loginBlock:"Header_loginBlock__1nvH8"}},72:function(e,t,a){e.exports={pagination:"Paginator_pagination__3oc9N",paginationItem:"Paginator_paginationItem__3tGrW",selectedPage:"Paginator_selectedPage__26KLL"}},73:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__1M888",newPosts:"MyPosts_newPosts__VfZE5",newPostBtn:"MyPosts_newPostBtn__3rJ9f"}},91:function(e,t,a){e.exports={someFriends:"SideBarFriends_someFriends__24r2x",userAva:"SideBarFriends_userAva__b-nQq"}}},[[167,1,2]]]);
//# sourceMappingURL=main.aba7d4b5.chunk.js.map