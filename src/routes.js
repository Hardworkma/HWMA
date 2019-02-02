import Root from './Root'
import About from "./components/About/index"
import AfterschoolPage from './containers/AfterschoolPage/index';
import CampPage from './containers/CampPage/index';
import HomePage from "./containers/HomePage/index";
import SideKicksPage from './containers/SideKicksPage/index';
import TaekwondoPage from './containers/TaekwondoPage/index';
import WelcomePage from "./containers/WelcomePage/index"
import CoreValuesPage from "./containers/CoreValuesPage";
import ReviewsPage from "./containers/ReviewsPage";
import PhilosophyPage from "./containers/PhilosophyPage";
import HardWorkHeroesPage from "./containers/HardWorkHeroesPage";
import FAQPage from "./containers/FAQPage";
import ThankYouPage from "./containers/ThankYouPage"
import WhyPage from "./containers/WhyPage";
import React from "react";

const routes = [
    {
        component: Root,
        routes: [
            {
                path: '/',
                exact: true,
                component: HomePage,
            },
            {
                path: '/about',
                component: About
            },
            {
                path: '/core',
                component: CoreValuesPage
            },
            {
                path: '/afterschool',
                component: AfterschoolPage
            },
            {
                path: '/camp',
                component: CampPage
            },
            {
                path: '/faq',
                component: FAQPage
            },
            {
                path: '/hardworkheroes',
                component: HardWorkHeroesPage
            },
            {
                path: '/philosophy',
                component: PhilosophyPage
            },
            {
                path: '/reviews',
                component: ReviewsPage
            },
            {
                path: '/sidekicks',
                component: SideKicksPage
            },
            {
                path: '/taekwondo/:age',
                component: TaekwondoPage
            },
            {
                path: '/thankyou',
                component: ThankYouPage
            },
            {
                path: '/welcome',
                component: WelcomePage
            },
            {
                path: '/why',
                component: WhyPage
            },
        ]
    }
];

export default routes;
