export default function Header({
	mazeData,
	loop,
	newMaze,
	generateMaze_full,
	generateMaze_step,
	generateMaze_anim_start,
	solveMaze_full,
	solveMaze_step,
	solveMaze_anim_start,
	solveMaze_clear,
	anim_stop
}) {
	let generation_animationButton = (loop) ? 
		<button onClick={anim_stop}>Stop Animation</button> :
		<button onClick={() => generateMaze_anim_start(20)}>Start Animation</button>
	
	let solution_animationButton = (loop) ? 
		<button onClick={anim_stop}>Stop Animation</button> :
		<button onClick={() => solveMaze_anim_start(20)}>Start Animation</button>
	
	return (
		<header>
			<div className="headerGroup">
				<div className="headerGroup-name">
					<h3>Maze</h3>
				</div>
				<div className="headerGroup-buttons">
					<button onClick={() => newMaze(20, 15)}>New Maze</button>
				</div>
			</div>
			
			{(mazeData.state < 3) &&
				<div className="headerGroup">
					<div className="headerGroup-name">
						<h3>Generation</h3>
					</div>
					<div className="headerGroup-buttons">
						<button onClick={generateMaze_full}>Complete</button>
						<button onClick={generateMaze_step}>Step</button>
						{generation_animationButton}
					</div>
				</div>
			}

			{(mazeData.state >= 3) &&
				<div className="headerGroup">
					<div className="headerGroup-name">
						<h3>Solution</h3>
					</div>
				<div className="headerGroup-buttons">
						{mazeData.state < 5 && <p>Select two cells</p>}
						{mazeData.state >= 5 && mazeData.state < 8 && <button onClick={solveMaze_full}>Complete</button>}
						{mazeData.state >= 5 && mazeData.state < 8 && <button onClick={solveMaze_step}>Step</button>}
						{mazeData.state >= 5 && mazeData.state < 8 && solution_animationButton}
						{mazeData.state >= 5 && mazeData.state === 8 && <button onClick={solveMaze_clear}>Clear</button>}
					</div>
				</div>
			}
		</header>
	)
}