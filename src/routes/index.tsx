import React from 'react'
import { ReactNode } from 'react'
import LoginPage from '../pages/LoginPage/LoginPage'
import EventPage from '../pages/Event/Event'

export interface IRoute {
    path: string
    component: JSX.Element
    exact?: boolean
}

enum AppRoutePublic {
    LOGIN = 'login',
}

enum AppRoutePrivate {
    EVENT = 'event',
}

export const PUBLIC_PATH: Record<AppRoutePublic, string> = {
    [AppRoutePublic.LOGIN]: '/login',
}

export const PRIVATE_PATH: Record<AppRoutePrivate, string> = {
    [AppRoutePrivate.EVENT]: '/',
}

export const publicRoutes: Record<AppRoutePublic, IRoute> = {
    [AppRoutePublic.LOGIN]: {
        path: PUBLIC_PATH.login,
        component: <LoginPage />,
    },
}

export const privateRoutes: Record<AppRoutePrivate, IRoute> = {
    [AppRoutePrivate.EVENT]: {
        path: PRIVATE_PATH.event,
        component: <EventPage />,
    },
}
