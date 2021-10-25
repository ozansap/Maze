import { MazeHandler } from "../utils/MazeHandler";

export default function Header({
	mazeData,
	setMazeData,
	loop,
	setSelectStart,
	newMaze,
	anim_start,
	anim_stop,
	setSettingsMenu
}) {
	const settingsMenu_open = () => {
		setSettingsMenu(true);
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

	let generation_animationButton = (loop) ?
		<p className="button animButton" onClick={anim_stop}>Stop</p> :
		<p className="button animButton" onClick={anim_start}>Start</p>
	
	let solution_animationButton = (loop) ? 
		<p className="button animButton" onClick={anim_stop}>Stop</p> :
		<p className="button animButton" onClick={anim_start}>Start</p>
	
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