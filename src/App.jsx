import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import Dashboard from './pages/Dashboard'
import AiChar from './pages/AiChat'
import Disscussions from './pages/Disscussions'
import Individualdisscussion from './pages/Indivialdisscussion'
import Chathistory from './pages/Chathistory'
import About from './pages/About'
import Blogs from './pages/Blogs'
import SignupForm from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import ProfileEdit from './pages/ProfileEdit'
import CreateProfile from './pages/CreateProfile'
import Faq from './pages/Faq'
import GoogleCallback from "./pages/GoogleCallback"

import SuperTokens from 'supertokens-auth-react';
import Session from 'supertokens-auth-react/recipe/session';
import ThirdPartyEmailPassword, { Google } from 'supertokens-auth-react/recipe/thirdpartyemailpassword'


SuperTokens.init({
  appInfo: {
    apiDomain: "http://localhost:5000",
    apiBasePath: "/auth",
    websiteDomain: "http://localhost:5173",
    appName: "...",
  },
  recipeList: [
    Session.init(),
    ThirdPartyEmailPassword.init({
      signInAndUpFeature: {
        providers: [Google.init()]
      }
    }),
  ],
});

export default function App() {
  return (

    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/dashboard' element={<Dashboard />} />
      <Route exact path='/Aichat' element={<AiChar />} />
      <Route exact path='/discussions' element={<Disscussions />} />
      <Route exact path='/discussions/id' element={<Individualdisscussion />} />
      <Route exact path='/chathistory' element={<Chathistory />} />
      <Route exact path='/About' element={<About />} />
      <Route exact path='/blogs' element={<Blogs />} />
      <Route exact path='/Signup' element={<SignupForm />} />
      <Route exact path='/login' element={<Login />} />x
      <Route exact path='/profile' element={<Profile />} />
      <Route exact path='/profileEdit' element={<ProfileEdit />} />
      <Route exact path='/CreateProfile' element={<CreateProfile />} />
      <Route exact path='/Faq' element={<Faq />} />
      <Route exact path='/callback/google' element={<GoogleCallback />}></Route>
      <Route
        path="*"
        element={<PageNotFound />}
      />
    </Routes>
  )
}
