import { cellWalls } from "../utils/vars";

export default function Cell({ mazeData, size, id, walls, visited, head, stacked, start, goal, solve_select }) {
	let src = "/assets/cells/cell_";
	src += (walls & cellWalls.TOP) ? "1" : "0";
	src += (walls & cellWalls.RIGHT) ? "1" : "0";
	src += (walls & cellWalls.BOTTOM) ? "1" : "0";
	src += (walls & cellWalls.LEFT) ? "1" : "0";
	src += ".png";

	let className = "";
	if (3 <= mazeData.state && mazeData.state <= 5) className += " selectable";
	if (visited) className += " visited";
	if (head) className += " head";
	if (stacked) className += " stacked";
	if (start) className += " start";
	if (goal) className += " goal";

	let attributes = {};
	if (3 <= mazeData.state && mazeData.state <= 5) {
		attributes.onClick = () => solve_select(id);
	}

	return (
		<img
			id={id}
			style={{height: size + "px"}}
			src={src}
			alt=""
			className={className}
			{...attributes}
		/>
	)
}