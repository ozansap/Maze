export default function Header({
	mazeData,
	loop,
	newMaze,
	settingsMenu_open,
	generate_full,
	generate_step,
	generate_anim_start,
	solve_full,
	solve_step,
	solve_anim_start,
	solve_clear,
	anim_stop
}) {
	let generation_animationButton = (loop) ?
		<p className="button animButton" onClick={anim_stop}>Stop</p> :
		<p className="button animButton" onClick={generate_anim_start}>Start</p>
	
	let solution_animationButton = (loop) ? 
		<p className="button animButton" onClick={anim_stop}>Stop</p> :
		<p className="button animButton" onClick={solve_anim_start}>Start</p>
	
	return (
		<header id="header">
			<div className="headerGroup">
				<div className="headerGroup-top">
					<h3>Maze</h3>
				</div>
				<div className="headerGroup-bottom">
					{mazeData.state !== 0 &&
						<div className="headerGroup-bottom-button-wrapper">
							<p className="button" onClick={newMaze}>New</p>
						</div>
					}
					<div className="headerGroup-bottom-button-wrapper">
						<p className="button" onClick={settingsMenu_open}>Settings</p>
					</div>
				</div>
			</div>
			
			{(mazeData.state < 3) &&
				<div className="headerGroup">
					<div className="headerGroup-top">
						<h3>Generate</h3>
					</div>
					<div className="headerGroup-bottom">
						<div className="headerGroup-bottom-button-wrapper">
							<p className="button" onClick={generate_full}>Complete</p>
						</div>
						<div className="headerGroup-bottom-button-wrapper">
							<p className="button" onClick={generate_step}>Step</p>
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
						<h3>Solve</h3>
					</div>
					<div className="headerGroup-bottom">
						{mazeData.state < 5 && <p>Select two cells</p>}
						{mazeData.state >= 5 && mazeData.state < 8 &&
							<div className="headerGroup-bottom-button-wrapper">
								<p className="button" onClick={solve_full}>Complete</p>
							</div>
						}
						{mazeData.state >= 5 && mazeData.state < 8 &&
							<div className="headerGroup-bottom-button-wrapper">
								<p className="button" onClick={solve_step}>Step</p>
							</div>
						}
						{mazeData.state >= 5 && mazeData.state < 8 &&
							<div className="headerGroup-bottom-button-wrapper">
								{solution_animationButton}
							</div>
						}
						{mazeData.state >= 5 && mazeData.state === 8 &&
							<div className="headerGroup-bottom-button-wrapper">
								<p className="button" onClick={solve_clear}>Clear</p>
							</div>
						}
					</div>
				</div>
			}
		</header>
	)
}