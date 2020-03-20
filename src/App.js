import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { routes } from './consts/routes'
import { HomePage } from './pages/homepage/HomePage'
import { BlogPage } from './pages/blog/BlogPage'
import { ArticlePage } from './pages/article/ArticlePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { NavBar } from './components/navbar/NavBar'

import './global-fonts.scss'
import './global-base.scss'

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <NavBar />
                <div className="page">
                    <Switch>
                        <Route
                            path={routes.homepage()}
                            component={HomePage}
                            exact
                        />
                        <Route path={routes.blog()} component={BlogPage} />
                        <Route
                            path={routes.article()}
                            component={ArticlePage}
                        />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
