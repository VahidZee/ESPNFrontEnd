import MainPage from "@/Pages/MainPage";
import GamePage from "@/Pages/GamePage";
import PlayerPage from "@/Pages/PlayerPage";
import TeamPage from "@/Pages/TeamPage";
import NewsPage from "@/Pages/NewsPage";
import LeaguePage from "@/Pages/LeaguePage";
import LeaguesPage from "@/Pages/LeaguesPage";

export const routes = [
    {
        path: '*',
        component: MainPage,
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
        path: '/game/:id',
        component: GamePage,
        meta: {
            title: 'ESPN - Games',
        }
    },
    {
        path: '/player/:id',
        component: PlayerPage,
        meta: {
            title: 'ESPN - Players',
        }
    },
    {
        path: '/team/:id',
        component: TeamPage,
        meta: {
            title: 'ESPN - Teams',
        }
    },
    {
        path: '/news/:id' ,
        component: NewsPage,
        meta: {
            title: 'ESPN - News',
        }
    },
    {
        path: '/league/:id',
        component: LeaguePage,
        meta: {
            title: 'ESPN - League'
        }
    },
    {
        path: '/leagues',
        component: LeaguesPage,
        meta: {
            title: 'ESPN - Leagues'
        }
    }
];
