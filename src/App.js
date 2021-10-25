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
	
	
	const newMaze = ({ width, height }) => {
		anim_stop();
		setSelectStart(true);
		setMazeData(MazeHandler.new(
			width || settings.width,
			height || settings.width
		));
	}
	
	const anim_start = ({ speed }) => {
		const nextStep = (mazeData.state < 3) ? MazeHandler.generate_step : MazeHandler.solve_step;

		let newLoop = setInterval(() => {	
			const newMaze = nextStep(mazeData);
			setMazeData({ ...newMaze });

			if (mazeData.state === 3 || mazeData.state === 8) {
				clearInterval(newLoop);
				setLoop(undefined);
			};
		}, 1000 / (speed || settings.speed));
	
		setLoop(newLoop);
	}

	const anim_stop = () => {
		clearInterval(loop);
		setLoop(undefined);
	}

	const anim_restart = ({ speed }) => {
		if (!loop) return;

		clearInterval(loop);
		anim_start({ speed });
	}

  return (
		<div className="App">
			<Header
				mazeData={mazeData}
				setMazeData={setMazeData}
				loop={loop}
				setSelectStart={setSelectStart}
				newMaze={newMaze}
				anim_start={anim_start}
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
				newMaze={newMaze}
				anim_restart={anim_restart}
			></Settings>
    </div>
  );
}