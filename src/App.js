import { useState } from "react";

import { MazeHandler } from "./utils/MazeHandler";

import Header from "./components/Header";
import Maze from "./components/Maze";
import Settings from "./components/Settings";

export default function App() {
	const [settings, setSettings] = useState({
		width: 20,
		height: 20,
		speed: 50,
	});
	
	const [mazeData, setMazeData] = useState(MazeHandler.new(settings.width, settings.height));
	const [selectStart, setSelectStart] = useState(true);
	const [loop, setLoop] = useState();
	const [settingsMenu, setSettingsMenu] = useState(false);
	
	
	const newMaze = () => {
		anim_stop();
		setSelectStart(true);
		setMazeData(MazeHandler.new(settings.width, settings.height));
	}
	
	const anim_stop = () => {
		clearInterval(loop);
		setLoop(undefined);
	}

  return (
		<div className="App">
			<Header
				mazeData={mazeData}
				setMazeData={setMazeData}
				settings={settings}
				loop={loop}
				setLoop={setLoop}
				setSelectStart={setSelectStart}
				newMaze={newMaze}
				anim_stop={anim_stop}
				setSettingsMenu={setSettingsMenu}
			></Header>

			<Maze
				mazeData={mazeData}
				setMazeData={setMazeData}
				settings={settings}
				selectStart={selectStart}
				setSelectStart={setSelectStart}
			></Maze>

			<Settings
				settings={settings}
				setSettings={setSettings}
				settingsMenu={settingsMenu}
				setSettingsMenu={setSettingsMenu}
			></Settings>
    </div>
  );
}