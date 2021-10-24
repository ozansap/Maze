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
		<p className="button animButton" onClick={anim_stop}>Stop Animation</p> :
		<p className="button animButton" onClick={generateMaze_anim_start}>Start Animation</p>
	
	let solution_animationButton = (loop) ? 
		<p className="button animButton" onClick={anim_stop}>Stop Animation</p> :
		<p className="button animButton" onClick={solveMaze_anim_start}>Start Animation</p>
	
	return (
		<header>
			<div className="headerGroup">
				<div className="headerGroup-name">
					<h3>Maze</h3>
				</div>
				<div className="headerGroup-buttons">
					<p className="button" onClick={newMaze}>New Maze</p>
				</div>
			</div>
			
			{(mazeData.state < 3) &&
				<div className="headerGroup">
					<div className="headerGroup-name">
						<h3>Generation</h3>
					</div>
				<div className="headerGroup-buttons">
						<p className="button" onClick={generateMaze_full}>Complete</p>
						<p className="button" onClick={generateMaze_step}>Step</p>
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
						{mazeData.state >= 5 && mazeData.state < 8 && <p className="button" onClick={solveMaze_full}>Complete</p>}
						{mazeData.state >= 5 && mazeData.state < 8 && <p className="button" onClick={solveMaze_step}>Step</p>}
						{mazeData.state >= 5 && mazeData.state < 8 && solution_animationButton}
						{mazeData.state >= 5 && mazeData.state === 8 && <p className="button" onClick={solveMaze_clear}>Clear</p>}
					</div>
				</div>
			}
		</header>
	)
}