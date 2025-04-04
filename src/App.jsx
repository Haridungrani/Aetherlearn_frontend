import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login"
import Signup from "./Pages/Signup/Signup";
import VerifyOtp from "./Pages/OTP/VerifyOtp";
import OpenRoute from "./Components/OpenRoute"
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./Layout/StudentDashboard/Dashboard";
import Player from "./Pages/VideoPlayer/Player";
import UploadVideo from "./Pages/UploadVideo/UploadVideo";
import UploadPost from "./Pages/UploadPost/UploadPost";
import Setting from "./Pages/Settings/Setting"
//Pages Imports
import ClassList from "./Pages/ClassList/ClassList";
import ClassroomOwner from "./Pages/ClassroomOwner/ClassroomOwner";
import ClassroomStudent from "./Pages/ClassroomStudent/ClassroomStudent";
import Posts from "./Pages/Posts/Posts";
import StreamDashboard from "./Pages/StreamDashboard/StreamDashboard";
import Peoples from "./Pages/Peoples/Peoples";
import Videos from "./Pages/videos/Videos";

export default function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/login" element={<OpenRoute><Login /></OpenRoute>} />
        <Route path="/" element={<OpenRoute><Login /></OpenRoute>} />
        <Route path="/signup" element={<OpenRoute><Signup /></OpenRoute>} />
        <Route path="/verify" element={<OpenRoute><VerifyOtp /></OpenRoute>} />

        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
            <Route path="/dashboard" element={<ClassList />} />

            <Route path="/dashboard/own/:classroomID" element={<ClassroomOwner />} >
              <Route path="/dashboard/own/:classroomID/posts" element={<UploadPost />} />
              <Route path="/dashboard/own/:classroomID/video" element={<UploadVideo />} />
              <Route path="/dashboard/own/:classroomID/video/:videoID" element={<Player />} />
              <Route path="/dashboard/own/:classroomID/stream" element={<StreamDashboard />} />
              <Route path="/dashboard/own/:classroomID/people" element={<Peoples />} />
              <Route path="/dashboard/own/:classroomID/setting" element={<Setting />} />

            </Route>

            <Route path="/dashboard/joined/:classroomID" element={<ClassroomStudent />} > 
              <Route path="/dashboard/joined/:classroomID/posts" element={<Posts />} />
              <Route path="/dashboard/joined/:classroomID/video" element={<Videos />} />
              <Route path="/dashboard/joined/:classroomID/video/:videoID" element={<Player />} />
              <Route path="/dashboard/joined/:classroomID/stream" element={<>Comign Soon..</>} />
            </Route>

        </Route>
        
        <Route path="/test" element={<Player />} />

      </Routes>
    </div>
  );
}
