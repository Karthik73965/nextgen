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
import { UserAuthContextProvider } from "./UserAuth";
import SuperTokens from 'supertokens-web-js';
import Session from 'supertokens-web-js/recipe/session';
import ThirdPartyEmailPassword from 'supertokens-web-js/recipe/thirdpartyemailpassword'
import Faq from'./pages/Faq'
SuperTokens.init({
    appInfo: {
        apiDomain: "http://localhost:5000",
        apiBasePath: "/auth",
        appName: "...",
    },
    recipeList: [
        Session.init(),
        ThirdPartyEmailPassword.init(),
    ],
});

export default function App() {
  return (
       <UserAuthContextProvider>

   
    <Routes>
      <Route exact  path='/' element={<Home/>} />
      <Route exact  path='/dashboard' element={<Dashboard/>} />
      <Route exact  path='/Aichat' element={<AiChar/>} />
      <Route exact  path='/discussions' element={<Disscussions/>} />
      <Route exact  path='/discussions/id' element={<Individualdisscussion/>} />
      <Route exact  path='/chathistory' element={<Chathistory/>} />
      <Route exact  path='/About' element={<About/>} />
      <Route exact  path='/blogs' element={<Blogs/>} />
      <Route exact  path='/Signup' element={<SignupForm/>} />
      <Route exact  path='/login' element={<Login/>} />x
      <Route exact  path='/profile' element={<Profile/>} />
      <Route exact  path='/profileEdit' element={<ProfileEdit/>} />
      <Route exact  path='/CreateProfile' element={<CreateProfile/>} />
      <Route exact  path='/Faq' element={<Faq/>} />
      <Route
             path="*"
             element={<PageNotFound />}
                />
    </Routes>
   
       </UserAuthContextProvider>

  )
}
