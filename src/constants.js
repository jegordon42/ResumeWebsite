import AI from './static/AI.png'
import Budget from './static/Budget.png'
import Camera from './static/Camera.png'
import JoeRocket from './static/JoeRocket.png'
import Mirror from './static/Mirror.png'

export const NAME = 'Joseph Gordon';
export const OCCUPATION = 'Full-Stack Software Engineer';
export const OCCUPATION_DESCRIPTION = 'Welcome! I\'m passionate about transforming ' +
'ideas into elegant, impactful software solutions.';

export const GITHUB_LINK = "https://github.com/jegordon42"
export const FACEBOOK_LINK = "https://facebook.com/jojoeyoj"
export const LINKEDIN_LINK = "https://www.linkedin.com/in/joseph-gordon-524151119/"
export const EMAIL_LINK = "mailto: jegordon42@gmail.com"

export const ABOUT = {
    paragraphs : [
        [
            {
                type: 'bold', 
                text : 'My journey began'
            },
            {
                type: 'text', 
                text : ' back in 2012 when I took my first coding course ' +
                'with my sister in high school. From that moment, I\'ve been hooked on the ' + 
                'thrill of problem-solving through code, the satisfaction of building ' +
                'something from scratch, and the joy of seeing my creations come to life ' +
                'and make a difference.'
            }
        ],
        [
            { 
                type: 'text',
                text : 'I\'m a versatile software engineer, comfortable navigating the ' + 
                'full stack, from front-end development to backend architecture. '
            },
            {
                type: 'bold', 
                text : 'I thrive in collaborative environments '
            },
            { 
                type: 'text',
                text : 'where I can learn from others, share my knowledge, ' +
                'and contribute to building something bigger than myself.'
            }
        ],
        [
            { 
                type:'text',
                text : 'Beyond the code, I\'m an '
            },
            {
                type: 'bold', 
                text: 'avid learner '
            },
            { 
                type:'text',
                text : 'always seeking new challenges and technologies to explore. ' +
                'I\'m also a strong communicator, believing that clear and concise ' + 
                'dialogue is key to successful collaboration.'
            }
        ],
    ]
}

export const EXPERIENCE = {
    experiences : [
        {
            type: 'Job',
            date: 'AUG 2022 - PRESENT',
            name: 'Google',
            link: 'https://cloud.google.com/support',
            role: 'Software Engineer',
            description: 'Here is my description of Google',
            skills: [
                'Java',
                'TypeScript',
                'Angular'
            ]
        },
        {
            type: 'Job',
            date: 'JULY 2020 - MAY 2022',
            name: 'Bank of America',
            link: 'https://bankofamerica.com',
            role: 'Software Engineer',
            description: 'Here is my description of Bank of America',
            skills: [
                'Python',
                'TypeScript',
                'SQL',
                'Flask',
                'React',
                'Jenkins',
                'Selenium'
            ]
        },
        {
            type: 'Job',
            date: 'MAY 2018 - JAN 2020',
            name: 'Genewiz',
            link: 'https://genewiz.com/',
            role: 'Software Engineer',
            description: 'Here is my description about Genewiz',
            skills: [
                'C#',
                'JavaScript',
                'SQL',
                'Vue',
                'ASP.Net',
                'MVC'
            ]
        },
        {
            type: 'Job',
            date: 'JUN 2013 - JAN 2018',
            name: 'Targeted Technologies',
            link: 'https://targtech.com/',
            role: 'Software Engineer',
            description: 'Here is my description about Targeted Technologies',
            skills: [
                'C#',
                'VB',
                'JavaScript',
                'SQL',
                'ASP.Net',
                'MVC'
            ]
        },
        {
            type: 'Education',
            date: 'SEP 2016 - MAY 2020',
            name: 'Rutgers University',
            link: 'https://soe.rutgers.edu/student-experience/engineering-honors-academy',
            role: 'Honors Academy',
            description: 'Majored in Computer Engineering and minored in ' +
            'Computer Science',
            skills: [
                'Java',
                'C',
                'SQL',
                'TypeScript',
                'Angular'
            ]
        },
        {
            type: 'Education',
            date: 'SEP 2011 - MAY 2015',
            name: 'Toms River High School North',
            link: 'https://www.trschools.com/hsnorth/',
            description: 'Intro to Computer Science and AP Computer Science',
            skills: [
                'Java',
                'C++',
            ]
        }

    ]
}

export const PROJECTS = {
    projects : [
        {
            name: "Artificial Intellegence App",
            image: AI,
            align: 'left',
            imageStyle: {
                height: "11rem",
                width: "19rem"
            },
            mobileImageStyle: {
                height: "8rem",
                width: "10rem"
            },
            description: [
                {
                    type: "text",
                    text: "I havent built this yet but I really want to do something with AI!"
                },
            ],
            skills: [
                "Some Sort Of AI Tech",
            ]
        },
        {
            name: "Magic Mirror App",
            image: Mirror,
            imageStyle: {
                height: "8rem",
                width: "8rem"
            },
            mobileImageStyle: {
                height: "7rem",
                width: "6rem",
                marginTop: '1rem'
            },
            align: 'right',
            description: [
                {
                    type: "text",
                    text: "I havent built this yet but I really want to make a custom " +
                    "widget for my RasberryPi's Magic Mirror!"
                },
            ],
            skills: [
                "Javascript",
                "HTML"
            ]
        },
        {
            name: "JoeLinks",
            image: JoeRocket,
            imageStyle: {
                height: "12rem",
                width: "19rem"
            },
            mobileImageStyle: {
                height: "12rem",
                width: "14rem"
            },
            align: 'left',
            link: "https://joelinks.net/",
            description: [
                {
                    type: "text",
                    text: "Short URLs! I wanted an easy way to navigate to my Google Docs " +
                    "because the URLs were impossible to remember and I did not feel like " +
                    "constantly searching for them."
                },
            ],
            skills: [
                "Javascript",
                "Angular",
                "Firebase"
            ]
        },
        {
            name: "BluBudget",
            image: Budget,
            imageStyle: {
                height: "10rem",
                width: "19rem"
            },
            mobileImageStyle: {
                height: "8rem",
                width: "10rem",
                marginTop: "1rem",
            },
            align: 'right',
            description: [
                {
                    type: "text",
                    text: "I was looking for an excuse to make a multi-platformed app " +
                    "with React/React Native. One day I wanted to start using a " + 
                    "budgeting app and just decided to make my own so I could see " +
                    "customized visuals of my spending exactly how I wanted."
                },
            ],
            skills: [
                "Python",
                "Javascript",
                "SQL",
                "Flask",
                "React",
                "React Native",
                "Firebase",
                "Azure"
            ]
        },
        {
            name: "UFlix",
            image: Camera,
            imageStyle: {
                height: "8rem",
                width: "12rem",
                marginTop: "1rem",
                marginBottom: "1rem",
                marginLeft: "1rem",
                marginRight: "3rem"
            },
            mobileImageStyle: {
                height: "8rem",
                width: "10rem",
                marginTop: "1rem"
            },
            align: 'left',
            description: [
                {
                    type: "text",
                    text: "After learning IOS development using this "
                },
                {
                    type: "link",
                    text: "course",
                    link: "https://www.udemy.com/course/ios-13-app-development-bootcamp/"
                },
                {
                    type: "text",
                    text: ", I made video streaming app for your own personal videos with a " +
                    "Netflix-like interface."
                },
            ],
            skills : [
                "Swift",
                "Xcode"
            ]
        }
    ]
}

export const SKILLS = {
    skills : [
        {
            name: "Programming",
            list: [
                "Java", 
                "Python", 
                "JavaScript",
                "C", 
                "C#", 
                "SQL", 
                "Swift", 
                "VB", 
                "VBA",
                "HTML/CSS"
            ]
        },
        {
            name: "Frameworks / Databases",
            list: [
                "React", 
                "React Native", 
                "Angular",
                ".Net", 
                "MVC", 
                "Flask", 
                "Selenium", 
                "SQL"
            ]
        },
        {
            name: "DevOps / Cloud Services",
            list: [
                "Jenkins", 
                "Azure DevOps", 
                "Azure Database Hosting", 
                "Azure Application Hosting",
                "AWS S3", 
                "Firebase"
            ]
        },
    ]
}