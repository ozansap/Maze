import { useState, useEffect } from "react";

import { MazeHandler } from "../utils/MazeHandler";

import Cell from "./Cell";

export default function Maze({ mazeData, setMazeData, settings, selectStart, setSelectStart }) {
	const [size, setSize] = useState(0);
	const windowSize = useWindowSize();

	useEffect(() => {
		const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
		const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
		const maze = document.getElementById("maze").getBoundingClientRect();
		const size = Math.min(vw * 0.9 / settings.width, (vh - maze.top) * 0.9 / settings.height);

		setSize(size);
	}, [settings.width, settings.height, windowSize]);

	const solve_select = (id) => {
		const newMaze = (selectStart) ?
		MazeHandler.select_start(mazeData, id) :
		MazeHandler.select_goal(mazeData, id);
		
		setMazeData({ ...newMaze });
		setSelectStart(!selectStart);
	}


	return (
		<div className="maze" id="maze">
			<div className="maze-grid">
				{mazeData.grid.map((row, i) =>
					<div className="maze-grid-column" key={i}>
						{row.map((cell, j) =>
							<Cell
								key={cell.id}
								mazeData={mazeData}
								size={size}
								id={cell.id}
								walls={cell.walls}
								visited={cell.visited}
								head={cell.head}
								stacked={cell.stacked}
								start={cell.start}
								goal={cell.goal}
								solve_select={solve_select}
							></Cell>
						)}
					</div>
				)}
			</div>
		</div>
	)
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