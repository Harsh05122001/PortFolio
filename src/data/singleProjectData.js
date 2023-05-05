// Import images
import Image1 from '../images/inventory.webp';
import CircleNow1 from '../images/circle-now-1.png'
import CircleNow2 from '../images/circle-now-2.png'
import CircleNow3 from '../images/circle-now-3.png'
import CircleNow4 from '../images/circle-now-4.png'
import CircleNow5 from '../images/circle-now-5.png'
import Reinvent1 from '../images/reinvent-1.png'
import Reinvent2 from '../images/reinvent-2.png'
import Reinvent3 from '../images/reinvent-3.png'
import Reinvent4 from '../images/reinvent-4.png'
import Reinvent5 from '../images/reinvent-5.png'
import ERP1 from '../images/Project_ERP-1.png';
import ERP2 from '../images/Project_ERP-2.png';
import ERP3 from '../images/Project_ERP-3.png';
import ERP4 from '../images/Project_ERP-4.png';

// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
	FiGithub
} from 'react-icons/fi';

export const singleProjectData = 
	[
	 {  

		id:1,

		ProjectHeader: {
		title: 'Inventory Management System',
		publishDate: '',
		tags: 'Worked on Backend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Inventory Management System',
			img: Image1,
		},
	
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Nebula Holdings',
				details: 'Company Ltd',
			},
			{
				id: 2,
				title: 'Services',
				details: 'Developed Backend for this Project',
			},
		
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'To create backend for inventory managment system',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Node.js',
					'Express.js',
					'Javascript'
					
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					'This was an project in which the company had an template for which they require a backend to use the template they had.',
			},
			{
				id: 2,
				details:
					'The requirement was to manage inventory of the company ventures they had like to manage their stocks , vendors ,orders etc.',
			},
			{
				id: 3,
				details:
					'I created all the API to create stock ,orders ,manage transactions,to manage different vendors,manage logs, login etc.',
			},
			
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://www.linkedin.com/in/harsh-maheshwari-929a03197/',
			},
			{
				id: 2,
				name: 'Twitter',
				icon: <FiGithub />,
				url: 'https://github.com/Harsh05122001',
			},
			{
				id: 3,
				name: 'Instagram',
				icon: <FiTwitter />,
				url: 'https://twitter.com/Harsh6297519119',
			},
			{
				id: 4,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://www.instagram.com/maheshwari05/',
			},
			
			
			
		],
	},
	

	},
	{  

		id:2,

		ProjectHeader: {
		title: 'Circle Now',
		publishDate: '',
		tags: 'Ui / Frontend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Circle Now',
			img: CircleNow1,
		},
		{
			id: 2,
			title: 'Circle Now',
			img: CircleNow2,
		},
		{
			id: 3,
			title: 'Circle Now',
			img: CircleNow3,
		},
		{
			id: 4,
			title: 'Circle Now',
			img: CircleNow4,
		},
		{
			id: 5,
			title: 'Circle Now',
			img: CircleNow5,
		},
	
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'NeonFlakes',
				details: 'Company Ltd',
			},
			{
				id: 2,
				title: 'Services',
				details: 'Developed UI for the Client',
			},
			
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'To create social platform UI in which it conatines different spaces',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'React.js',
					'Node.js',	
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					'The project was to Create the UI for users who can create post ,daily tasks , see peoples feed in their respective spaces.',
			},
			{
				id: 2,
				details:
					'I Created UI along with Integrating API provided by The Backend team also written Logic to manage users in particular spaces and to invite user to a particular space .',
			},
			
			
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://www.linkedin.com/in/harsh-maheshwari-929a03197/',
			},
			{
				id: 2,
				name: 'Twitter',
				icon: <FiGithub />,
				url: 'https://github.com/Harsh05122001',
			},
			{
				id: 3,
				name: 'Instagram',
				icon: <FiTwitter />,
				url: 'https://twitter.com/Harsh6297519119',
			},
			{
				id: 4,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://www.instagram.com/maheshwari05/',
			},
			
			
			
		],
	},
},
{  

		id:3,

		ProjectHeader: {
		title: 'Project Reinvent',
		publishDate: '',
		tags: 'Ui / Frontend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Circle Now',
			img: Reinvent1,
		},
		{
			id: 2,
			title: 'Circle Now',
			img: Reinvent2,
		},
		{
			id: 3,
			title: 'Circle Now',
			img: Reinvent3,
		},
		{
			id: 4,
			title: 'Circle Now',
			img: Reinvent4,
		},
		{
			id: 5,
			title: 'Circle Now',
			img: Reinvent5,
		},
	
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'NeonFlakes',
				details: 'Company Ltd',
			},
			{
				id: 2,
				title: 'Services',
				details: 'Developed UI for the Client',
			},
		
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'To create a Admin Application to Manage clients Warehouse',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'React.js',
					'Node.js',	
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					'This is a warehouse application which will be used by the workers of the company to add or remove stocks,printing order receipt with Login,Logout Functionality.',
			},
			{
				id: 2,
				details:
					'I Created UI along with Integrating API provided by The Backend team .Used Git as Version Control Tool. Also Updated UI according to requiremnts mentioned by the client',
			},
			
			
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://www.linkedin.com/in/harsh-maheshwari-929a03197/',
			},
			{
				id: 2,
				name: 'Twitter',
				icon: <FiGithub />,
				url: 'https://github.com/Harsh05122001',
			},
			{
				id: 3,
				name: 'Instagram',
				icon: <FiTwitter />,
				url: 'https://twitter.com/Harsh6297519119',
			},
			{
				id: 4,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://www.instagram.com/maheshwari05/',
			},
			
			
			
		],
	},
},
{  

		id:4,

		ProjectHeader: {
		title:  'Project ERP',
		publishDate: '',
		tags: 'Frontend and Backend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Circle Now',
			img: ERP1,
		},
		{
			id: 2,
			title: 'Circle Now',
			img: ERP2,
		},
		{
			id: 3,
			title: 'Circle Now',
			img: ERP3,
		},
		{
			id: 4,
			title: 'Circle Now',
			img: ERP4,
		},
		
	
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'NeonFlakes',
				details: 'Company Ltd',
			},
			{
				id: 2,
				title: 'Services',
				details: 'Developed UI as well as Backend for the Client',
			},
			
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'To redevelop the existing application to manage client Business',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'React.js',
					'Node.js',	
					'Express.js',
					'MongoDb'
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					'The Project was to redevelop the client application which used to manage his business. The requirement was to create all master pages so that he can update all the things through these pages.',
			},
			{
				id: 2,
				details:
					'In this Project I collaborated with team and had Weekly meetings with the client . I developed Backend as well as Frontend using Mern Stack',
			},
			
			
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://www.linkedin.com/in/harsh-maheshwari-929a03197/',
			},
			{
				id: 2,
				name: 'Twitter',
				icon: <FiGithub />,
				url: 'https://github.com/Harsh05122001',
			},
			{
				id: 3,
				name: 'Instagram',
				icon: <FiTwitter />,
				url: 'https://twitter.com/Harsh6297519119',
			},
			{
				id: 4,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://www.instagram.com/maheshwari05/',
			},
			
			
			
		],
	},
}


]
	
	

