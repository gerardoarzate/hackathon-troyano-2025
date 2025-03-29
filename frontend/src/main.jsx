import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import LoginPage from './routes/LoginPage.jsx';
import RoutesLayout from './routes/RoutesLayout.jsx';
import HomePage from './routes/HomePage.jsx';
import DevicesPage from './routes/DevicesPage.jsx';
import ConsumptionPage from './routes/ConsumptionPage.jsx';
import ProfilePage from './routes/ProfilePage.jsx';
import SignUpPage from './routes/SignUpPage.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route index element={<LoginPage />} />
				<Route path='/signup' element={<SignUpPage />} />
				<Route element={<RoutesLayout />} >
					<Route path='/home' element={<HomePage />} />
					<Route path='/devices' element={<DevicesPage />} />
					<Route path='/consumption' element={<ConsumptionPage />} />
					<Route path='/profile' element={<ProfilePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
