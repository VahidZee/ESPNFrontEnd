import MainPage from "@/Pages/MainPage";
import GamePage from "@/Pages/GamePage";
import PlayerPage from "@/Pages/PlayerPage";
import TeamPage from "@/Pages/TeamPage";
import NewsPage from "@/Pages/NewsPage";
import PageNotFound from "@/Pages/PageNotFound";
import LeaguePage from "@/Pages/LeaguePage";

export const routes = [
    {
        path: '*',
        component: PageNotFound,
        meta: {
            title: 'ESPN - Main Page',
        }
    },
    {
        path: '/home',
        component: MainPage,
        meta: {
            title: 'ESPN - Main Page',
        }
    },
    {
        path: '/game',
        component: GamePage,
        meta: {
            title: 'ESPN - Games',
        }
    },
    {
        path: '/player',
        component: PlayerPage,
        meta: {
            title: 'ESPN - Players',
        }
    },
    {
        path: '/team',
        component: TeamPage,
        meta: {
            title: 'ESPN - Teams',
        }
    },
    {
        path: '/news',
        component: NewsPage,
        meta: {
            title: 'ESPN - News',
        }
    },
    {
        path: '/league',
        component: LeaguePage,
        meta: {
            title: 'ESPN - Leagues'
        }
    }
];
