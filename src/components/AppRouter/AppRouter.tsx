import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import {
    PRIVATE_PATH,
    PUBLIC_PATH,
    privateRoutes,
    publicRoutes,
} from '../../routes'

const AppRouter = () => {
    const isAuth = true

    return isAuth ? (
        <Routes>
            {Object.values(privateRoutes).map((route) => (
                <Route
                    key={route.path}
                    element={route.component}
                    path={route.path}
                />
            ))}
            <Route
                path="*"
                element={<Navigate to={PRIVATE_PATH.event} replace />}
            />
        </Routes>
    ) : (
        <Routes>
            {Object.values(publicRoutes).map((route) => (
                <Route
                    key={route.path}
                    element={route.component}
                    path={route.path}
                />
            ))}
            <Route
                path="*"
                element={<Navigate to={PUBLIC_PATH.login} replace />}
            />
        </Routes>
    )
}

export default AppRouter
