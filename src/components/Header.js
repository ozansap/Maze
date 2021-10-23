export default function Header({ mazeData, loop, newMaze, generateMaze_full, generateMaze_step, generateMaze_anim_start, generateMaze_anim_stop }) {
	let gen_animationButton = (loop) ? 
		<button onClick={generateMaze_anim_stop}>Stop Animation</button> :
		<button onClick={() => generateMaze_anim_start(20)}>Start Animation</button>
	
	let sol_animationButton = (loop) ? 
		<button onClick={generateMaze_anim_stop}>Stop Animation</button> :
		<button onClick={() => generateMaze_anim_start(20)}>Start Animation</button>
	
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
			
			{(mazeData.state < 3) ?
				<div className="headerGroup">
					<div className="headerGroup-name">
						<h3>Generation</h3>
					</div>
					<div className="headerGroup-buttons">
						<button onClick={generateMaze_full}>Complete</button>
						<button onClick={generateMaze_step}>Step</button>
						{gen_animationButton}
					</div>
				</div> :

				<div className="headerGroup">
					<div className="headerGroup-name">
						<h3>Solution</h3>
					</div>
					<div className="headerGroup-buttons">
						<button onClick={generateMaze_full}>Complete</button>
						<button onClick={generateMaze_step}>Step</button>
						{sol_animationButton}
					</div>
				</div>
			}
		</header>
	)
}