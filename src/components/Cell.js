import { cellWalls } from "../utils/vars";

export default function Cell({ id, walls, visited, head, stacked, start, goal }) {
	let src = "/assets/cell_";
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

	return (
		<img id={id} src={src} alt="" className={className}/>
	)
}