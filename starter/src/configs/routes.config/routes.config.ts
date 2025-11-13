import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'

export const protectedRoutes: Routes = {
    '/home': {
        key: 'home',
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    '/chats-wa-demo': {
        key: 'chatsWaDemo',
        authority: [],
        meta: {
            layout: 'blank',
            pageContainerType: 'gutterless',
        },
    },
}

export const publicRoutes: Routes = {}

export const authRoutes = authRoute
