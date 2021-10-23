import { useState } from "react";

import { MazeHandler } from "./utils/MazeHandler";

import Header from "./components/Header";
import Maze from "./components/Maze";
import MazeGenerator from "./components/MazeGenerator";

export default function App() {
	const [mazeData, setMazeData] = useState(MazeHandler.new(3, 2));

	const generateMaze_full = () => {
		const newMaze = MazeHandler.generate_full(mazeData);
		setMazeData({ ...newMaze });
	}

	const generateMaze_step = () => {
		const newMaze = MazeHandler.generate_step(mazeData);
		setMazeData({ ...newMaze });
	}

  return (
		<div className="App">
			<Maze
				mazeData={mazeData}
			></Maze> 
			
			<MazeGenerator
				generateMaze_full={generateMaze_full}
				generateMaze_step={generateMaze_step}
			></MazeGenerator>
    </div>
  );
}