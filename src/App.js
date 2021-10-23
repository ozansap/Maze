import { useState } from "react";

import { MazeHandler } from "./utils/MazeHandler";

import Header from "./components/Header";
import Maze from "./components/Maze";

export default function App() {
	const d_width = 20;
	const d_height = 14;


	const [mazeData, setMazeData] = useState(MazeHandler.new(d_width, d_height));
	const [loop, setLoop] = useState();

	const newMaze = (width, height) => {
		generateMaze_anim_stop();
		setMazeData(MazeHandler.new(d_width, d_height));
	}

	const generateMaze_full = () => {
		generateMaze_anim_stop();
		const newMaze = MazeHandler.generate_full(mazeData);
		setMazeData({ ...newMaze });
	}

	const generateMaze_step = () => {
		generateMaze_anim_stop();
		const newMaze = MazeHandler.generate_step(mazeData);
		setMazeData({ ...newMaze });
	}

	const generateMaze_anim_start = (interval) => {
		if (loop) return;

		let newLoop = setInterval(() => {	
			const newMaze = MazeHandler.generate_step(mazeData);
			setMazeData({ ...newMaze });

			if (mazeData.state >= 3) {
				clearInterval(newLoop);
				setLoop(undefined);
			};
		}, interval);
	
		setLoop(newLoop);
	}

	const generateMaze_anim_stop = () => {
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
				generateMaze_anim_stop={generateMaze_anim_stop}
			></Header>

			<Maze
				mazeData={mazeData}
			></Maze>
    </div>
  );
}