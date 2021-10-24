import { cellWalls } from "../utils/vars";

export default function Cell({ mazeData, id, walls, visited, head, stacked, start, goal, solveMaze_select }) {
	let src = "/assets/cells/cell_";
	src += (walls & cellWalls.TOP) ? "1" : "0";
	src += (walls & cellWalls.RIGHT) ? "1" : "0";
	src += (walls & cellWalls.BOTTOM) ? "1" : "0";
	src += (walls & cellWalls.LEFT) ? "1" : "0";
	src += ".png";

	let className = "";
	if (visited) className += "visited";
	if (head) className += " head";
	if (stacked) className += " stacked";
	if (start) className += " start";
	if (goal) className += " goal";

	let attributes = {};
	if (3 <= mazeData.state && mazeData.state <= 5) {
		attributes.onClick = () => solveMaze_select(id);
	}

	return (
		<img id={id} src={src} alt="" className={className} {...attributes}/>
	)
}