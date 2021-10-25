import { useEffect, useState } from "react";

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
	const [size, setSize] = useState(0);
	const [loop, setLoop] = useState();
	const windowSize = useWindowSize();

	useEffect(() => {
		const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
		const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
		const maze = document.getElementById("maze").getBoundingClientRect();
		const size = Math.min(vw * 0.9 / settings.width, (vh - maze.top) * 0.9 / settings.height);

		setSize(size);
	}, [settings.width, settings.height, windowSize]);
	
	const newMaze = () => {
		anim_stop();
		setSelectStart(true);
		setMazeData(MazeHandler.new(settings.width, settings.height));
	}

	const settingsMenu_open = () => {

	}

	const generate_full = () => {
		anim_stop();
		const newMaze = MazeHandler.generate_full(mazeData);
		setMazeData({ ...newMaze });
	}

	const generate_step = () => {
		anim_stop();
		const newMaze = MazeHandler.generate_step(mazeData);
		setMazeData({ ...newMaze });
	}

	const generate_anim_start = () => {
		if (loop) return;

		let newLoop = setInterval(() => {	
			const newMaze = MazeHandler.generate_step(mazeData);
			setMazeData({ ...newMaze });

			if (mazeData.state >= 3) {
				clearInterval(newLoop);
				setLoop(undefined);
			};
		}, 1000 / settings.speed);
	
		setLoop(newLoop);
	}

	const solve_select = (id) => {
		const newMaze = (selectStart) ?
			MazeHandler.select_start(mazeData, id) :
			MazeHandler.select_goal(mazeData, id);

		setMazeData({ ...newMaze });
		setSelectStart(!selectStart);
	}

	const solve_clear = () => {
		setSelectStart(true);
		const newMaze = MazeHandler.clear(mazeData);
		setMazeData({ ...newMaze });
	}

	const solve_full = () => {
		anim_stop();
		const newMaze = MazeHandler.solve_full(mazeData);
		setMazeData({ ...newMaze });
	}

	const solve_step = () => {
		anim_stop();
		const newMaze = MazeHandler.solve_step(mazeData);
		setMazeData({ ...newMaze });
	}

	const solve_anim_start = () => {
		if (loop) return;

		let newLoop = setInterval(() => {	
			const newMaze = MazeHandler.solve_step(mazeData);
			setMazeData({ ...newMaze });

			if (mazeData.state >= 8) {
				clearInterval(newLoop);
				setLoop(undefined);
			};
		}, 1000 / settings.speed);
	
		setLoop(newLoop);
	}

	const anim_stop = () => {
		clearInterval(loop);
		setLoop(undefined);
	}

  return (
		<div className="App">
			<Header
				mazeData={mazeData}
				loop={loop}
				newMaze={newMaze}
				openSettingsMenu={settingsMenu_open}
				generate_full={generate_full}
				generate_step={generate_step}
				generate_anim_start={generate_anim_start}
				solve_full={solve_full}
				solve_step={solve_step}
				solve_anim_start={solve_anim_start}
				solve_clear={solve_clear}
				anim_stop={anim_stop}
			></Header>

			<Maze
				mazeData={mazeData}
				size={size}
				solve_select={solve_select}
			></Maze>

			<Settings
				settings={settings}
				setSettings={setSettings}
			></Settings>
    </div>
  );
}

const useWindowSize = () => {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined
	});

	useEffect(() => {
		// Handler to call on window resize
		function handleResize() {
			// Set window width/height to state
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight
			});
		}

		// Add event listener
		window.addEventListener("resize", handleResize);

		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []); // Empty array ensures that effect is only run on mount

	return windowSize;
}