import Index from 'views/Index.js';
import Profile from 'views/Profile.js';
import Register from 'views/auth/Register.js';
import Login from 'views/auth/Login.js';
import Firstpage from 'views/auth/Firstpage';
import ForgetPassword from 'views/auth/ForgetPassword';
import Courseenrollment from 'views/Courseenrollment';
import Attendence from 'views/Attendence';

var routes = [
	{
		path: '/index',
		name: 'Dashboard',
		icon: 'ni ni-tv-2 text-primary',
		component: Index,
		layout: '/admin',
	},
	{
		path: '/user-profile',
		name: 'Student Profile',
		icon: 'ni ni-single-02 text-yellow',
		component: Profile,
		layout: '/admin',
	},
	{
		path: '/course-enroll',
		name: 'Course Enroll',
		icon: 'fas fa-book-open text-green',
		component: Courseenrollment,
		layout: '/admin',
	},
	
	{
		path: '/attendance',
		name: 'Attendance',
		icon: 'ni ni-bullet-list-67 text-red',
		component: Attendence,
		layout: '/admin',
	},

	{
		path: '/firstPage',
		name: 'firstPage',
		icon: 'ni ni-key-25 text-info',
		component: Firstpage,
		layout: '/auth',
		isMenu: false,
	},
	{
		path: "/login",
		name: "Login",
		icon: "ni ni-key-25 text-info",
		component: Login,
		layout: "/auth",
		isMenu: false,
	  },
	  {
		path: "/register",
		name: "Register",
		icon: "ni ni-circle-08 text-pink",
		component: Register,
		layout: "/auth",
		isMenu: false,
	  },
	  {
		path: "/forget-password",
		name: "Forget Password",
		icon: "ni ni-circle-08 text-pink",
		component: ForgetPassword,
		layout: "/auth",
		isMenu: false,
	  },
];
export default routes;
