import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Error from "./../pages/Error";
import About from "./../pages/About";
import Posts from "./../pages/Posts";

const AppRouter = () => {
	return (
			<Routes>
				<Route path="/about" element={<About />} />
				<Route exact path="/posts" element={<Posts />} />
				<Route path='/error' element={<Error/>}/>
				<Route path="/*" element={<Navigate to='/error' replace/>} />
			</Routes>
	)
}

export default AppRouter;
