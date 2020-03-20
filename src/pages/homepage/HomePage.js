import React from 'react'
import s from './homepage.module.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ProjectCard } from './components/ProjectCard'

const experience = [
    {
        company: 'I.Point LLC',
        position: 'software engineer',
        startDate: '10/2018',
        endDate: 'present',
        description: '',
        technologies:
            'TypeScript, JavaScript, Node.js, React.js, Google Cloud, App Engine, Cloud Functions, Firebase, Firestore, Stripe, Adyen, GraphQL, Material UI, Framer Motion, Android, Semantic UI',
    },
    {
        company: 'Irkutsk regional clinical consultative diagnostic center',
        position: 'software engineer',
        startDate: '10/2017',
        endDate: '10/2018',
        description: '',
        technologies:
            'Java Core, Java EE, EJB, JBoss, JavaFX, Spring, Hibernate, PostgreSQL',
    },
    {
        company: 'Irkutsk Processing Company LLC',
        position: 'java developer',
        startDate: '11/2013',
        endDate: '10/2017',
        description: '',
        technologies: 'J2EE, Spring, Hibernate, Vaadin, Maven, JUnit, MS SQL',
    },
    {
        company: 'I.Point LLC',
        position: 'software engineer',
        startDate: '09/2011',
        endDate: '10/2013',
        description: '',
        technologies:
            'J2EE, ExtGWT, GWT, Hibernate, Maven, Google App Engine, Selenium, Android',
    },
]

const education = [
    {
        university: 'Irkutsk State Technical University',
        degree: 'Specialist degree',
        startYear: '2007',
        endYear: '2012',
        fieldOfStudy: 'Applied Informatics in Economics',
    },
    {
        university: 'Irkutsk National Research Technical University',
        degree: "Master's degree",
        startYear: '2012',
        endYear: '2014',
        fieldOfStudy: 'Information Systems and Technologies',
    },
]

const projects = [
    {
        name: 'Forum',
        image: '/static/forum.jpg',
        url: 'https://forumstore.com/',
        description:
            'Front-end developing (main and admin applications) of multi-retailer multi-frontend multi-store E-commerce platform',
    },
    {
        name: 'MyStoryWorks',
        image: '/static/MyStoryWork.jpg',
        url: 'https://my-story-works.firebaseapp.com/',
        description:
            'Development of education platform for helping prospective students to success admission and career advancement',
    },
    {
        name: '3DEN',
        image: '/static/eden.jpg',
        url: 'https://www.goto3den.com/',
        description:
            'Development of Android mobile client and admin application for lounge management platform',
    },
]

export const HomePage = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    const skype = 'diskarediska'
    const email = ['anastasia.mineva@gmail.com', 'mineva@ipoint.ru']

    return (
        <React.Fragment>
            <div className={s.about_container}>
                <div className={s.photo_container}>
                    <div className={s.photo} />
                </div>
                <div className={s.about_info}>
                    <p className={s.about_info_title}>
                        Anastasia Mineva, software engineer
                    </p>
                    <div className={s.horisontal_divider} />
                    <p className={s.about_info_content}>
                        Development of javascript, typescript, java and android
                        applications, experience with React and Firebase.
                        <br />
                        Improving programming and developing skills.
                        <br />
                        <br />
                        8+ years experience as a software engineer
                    </p>
                </div>
            </div>
            <p className={s.subtitle}>Professional experience</p>
            <Slider {...sliderSettings} className={s.experience_slider}>
                {experience.map((item, index) => (
                    <div key={index} className={s.experience_item_container}>
                        <div className={s.experience_item}>
                            <p className={s.experience_company}>
                                {item.company}
                            </p>
                            <p className={s.experience_position}>
                                {item.position}
                            </p>
                            <p className={s.experience_years}>
                                {item.startDate} - {item.endDate}
                            </p>
                            <p className={s.experience_technologies}>
                                <span className={s.experience_subtitle}>
                                    Technologies:{' '}
                                </span>
                                {item.technologies}
                            </p>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
            <p className={s.subtitle}>My previous projects</p>
            <div className={s.projects_container}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
            <p className={s.subtitle}>Education</p>
            <div className={s.education_container}>
                {education.map((item, index) => (
                    <div key={index} className={s.education_item}>
                        <p className={s.education_university}>
                            {item.university}
                        </p>
                        <p className={s.education_degree}>{item.degree}</p>
                        <p className={s.education_years}>
                            {item.startYear} - {item.endYear}
                        </p>
                        <p className={s.education_description}>
                            {item.fieldOfStudy}
                        </p>
                    </div>
                ))}
            </div>
            <p className={s.subtitle}>Contacts</p>
            <div className={s.contacts_container}>
                <div className={s.social_container}>
                    <span className={s.email_icon} />
                    <p className={s.contact_title}>Email</p>
                    {email.map((value) => (
                        <a
                            key={value}
                            className={s.contact_link}
                            href={`mailto:${value}`}
                        >
                            {value}
                        </a>
                    ))}
                </div>
                <div className={s.social_container}>
                    <span className={s.skype_icon} />
                    <p className={s.contact_title}>Skype</p>
                    <a className={s.contact_link} href={`skype:${skype}?chat`}>
                        {skype}
                    </a>
                </div>
                <div className={s.social_container}>
                    <span className={s.linkedin_icon} />
                    <p className={s.contact_title}>LinkedIn</p>
                    <a
                        className={s.contact_link}
                        href="https://www.linkedin.com/in/anastasia-mineva-8388986a/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Anastasia Mineva
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
}
