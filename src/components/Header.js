export default function Header({
	mazeData,
	loop,
	newMaze,
	openSettingsMenu,
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
		<p className="button animButton" onClick={anim_stop}>Stop</p> :
		<p className="button animButton" onClick={generateMaze_anim_start}>Start</p>
	
	let solution_animationButton = (loop) ? 
		<p className="button animButton" onClick={anim_stop}>Stop</p> :
		<p className="button animButton" onClick={solveMaze_anim_start}>Start</p>
	
	return (
		<header>
			<div className="headerGroup">
				<div className="headerGroup-top">
					<h3>Maze</h3>
				</div>
				<div className="headerGroup-bottom">
					<div className="headerGroup-bottom-button-wrapper">
						<p className="button" onClick={newMaze}>New</p>
					</div>
					<div className="headerGroup-bottom-button-wrapper">
						<p className="button" onClick={openSettingsMenu}>Settings</p>
					</div>
				</div>
			</div>
			
			{(mazeData.state < 3) &&
				<div className="headerGroup">
					<div className="headerGroup-top">
						<h3>Generation</h3>
					</div>
					<div className="headerGroup-bottom">
						<div className="headerGroup-bottom-button-wrapper">
							<p className="button" onClick={generateMaze_full}>Complete</p>
						</div>
						<div className="headerGroup-bottom-button-wrapper">
							<p className="button" onClick={generateMaze_step}>Step</p>
						</div>
						<div className="headerGroup-bottom-button-wrapper">
							{generation_animationButton}
						</div>
					</div>
				</div>
			}

			{(mazeData.state >= 3) &&
				<div className="headerGroup">
					<div className="headerGroup-top">
						<h3>Solution</h3>
					</div>
					<div className="headerGroup-bottom">
						{mazeData.state < 5 && <p>Select two cells</p>}
						{mazeData.state >= 5 && mazeData.state < 8 &&
							<div className="headerGroup-bottom-button-wrapper">
								<p className="button" onClick={solveMaze_full}>Complete</p>
							</div>
						}
						{mazeData.state >= 5 && mazeData.state < 8 &&
							<div className="headerGroup-bottom-button-wrapper">
								<p className="button" onClick={solveMaze_step}>Step</p>
							</div>
						}
						{mazeData.state >= 5 && mazeData.state < 8 &&
							<div className="headerGroup-bottom-button-wrapper">
								{solution_animationButton}
							</div>
						}
						{mazeData.state >= 5 && mazeData.state === 8 &&
							<div className="headerGroup-bottom-button-wrapper">
								<p className="button" onClick={solveMaze_clear}>Clear</p>
							</div>
						}
					</div>
				</div>
			}
		</header>
	)
}