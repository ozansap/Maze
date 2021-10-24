import { useState } from "react";

import { MazeHandler } from "./utils/MazeHandler";

import Header from "./components/Header";
import Maze from "./components/Maze";

export default function App() {
	const d_width = 30;
	const d_height = 14;

	const [mazeData, setMazeData] = useState(MazeHandler.new(d_width, d_height));
	const [loop, setLoop] = useState();
	const [loopInterval, setLoopInterval] = useState(20);
	const [selectStart, setSelectStart] = useState(true);

	const newMaze = (width, height) => {
		anim_stop();
		setSelectStart(true);
		setMazeData(MazeHandler.new(d_width, d_height));
	}

	const generateMaze_full = () => {
		anim_stop();
		const newMaze = MazeHandler.generate_full(mazeData);
		setMazeData({ ...newMaze });
	}

	const generateMaze_step = () => {
		anim_stop();
		const newMaze = MazeHandler.generate_step(mazeData);
		setMazeData({ ...newMaze });
	}

	const generateMaze_anim_start = () => {
		if (loop) return;

		let newLoop = setInterval(() => {	
			const newMaze = MazeHandler.generate_step(mazeData);
			setMazeData({ ...newMaze });

			if (mazeData.state >= 3) {
				clearInterval(newLoop);
				setLoop(undefined);
			};
		}, loopInterval);
	
		setLoop(newLoop);
	}

	const solveMaze_select = (id) => {
		const newMaze = (selectStart) ?
			MazeHandler.select_start(mazeData, id) :
			MazeHandler.select_goal(mazeData, id);

		setMazeData({ ...newMaze });
		setSelectStart(!selectStart);
	}

	const solveMaze_clear = () => {
		setSelectStart(true);
		const newMaze = MazeHandler.clear(mazeData);
		setMazeData({ ...newMaze });
	}

	const solveMaze_full = () => {
		anim_stop();
		const newMaze = MazeHandler.solve_full(mazeData);
		setMazeData({ ...newMaze });
	}

	const solveMaze_step = () => {
		anim_stop();
		const newMaze = MazeHandler.solve_step(mazeData);
		setMazeData({ ...newMaze });
	}

	const solveMaze_anim_start = () => {
		if (loop) return;

		let newLoop = setInterval(() => {	
			const newMaze = MazeHandler.solve_step(mazeData);
			setMazeData({ ...newMaze });

			if (mazeData.state >= 8) {
				clearInterval(newLoop);
				setLoop(undefined);
			};
		}, loopInterval);
	
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
				generateMaze_full={generateMaze_full}
				generateMaze_step={generateMaze_step}
				generateMaze_anim_start={generateMaze_anim_start}
				solveMaze_full={solveMaze_full}
				solveMaze_step={solveMaze_step}
				solveMaze_anim_start={solveMaze_anim_start}
				solveMaze_clear={solveMaze_clear}
				anim_stop={anim_stop}
			></Header>

			<Maze
				mazeData={mazeData}
				solveMaze_select={solveMaze_select}
			></Maze>
    </div>
  );
}