import Statistics from '../pages/statistics';
import Appointments from '../pages/appointments';
import History from '../pages/history';
import Chat from '../pages/chat';
import ContactSupport from "../pages/contact-support";
import { DashboardComponent } from '../components/Dashboard/dashboard-comp';

export const activityData = [
    [5, 8, 6], [7, 6, 9], [4, 7, 5], [8, 6, 7], [6, 9, 8], [7, 8, 6], [5, 7, 8]
];

export const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

export const routesConfig = [
    { path: '/', element: <DashboardComponent /> },
    { path: '/history', element: <History /> },
    { path: '/appointments', element: <Appointments /> },
    { path: '/statistics', element: <Statistics /> },
    { path: '/chat', element: <Chat /> },
    { path: '/support', element: <ContactSupport /> },
];
