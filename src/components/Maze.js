import Cell from "./Cell";

export default function Maze({ mazeData, size, solve_select }) {
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