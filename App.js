import React from "react";
import Routes from "./src/routes";
import { StatusBar } from "expo-status-bar";


export default function App() {
	
	return(
		<>
			<StatusBar backgroundColor="transparent" translucent={true} barStyle="light-content" />
			<Routes/>
		</>
	)
}