import Cell from "./Cell";

export default function Maze({ mazeData }) {
	return (
		<div className="maze">
			<div className="maze-grid">
				{mazeData.grid.map((row, i) =>
					<div className="maze-grid-column" key={i}>
						{row.map((cell, j) =>
							<Cell
								key={cell.id}
								id={cell.id}
								walls={cell.walls}
								visited={cell.visited}
								head={cell.head}
								stacked={cell.stacked}
								start={cell.start}
								goal={cell.goal}
							></Cell>
						)}
					</div>
				)}
			</div>
		</div>
	)
}