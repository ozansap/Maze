import { cellWalls } from "../utils/vars";

export default function Cell({ id, walls, visited, selected }) {
	let src = "/assets/cell_";

	src += (walls & cellWalls.TOP) ? "1" : "0";
	src += (walls & cellWalls.RIGHT) ? "1" : "0";
	src += (walls & cellWalls.BOTTOM) ? "1" : "0";
	src += (walls & cellWalls.LEFT) ? "1" : "0";

	src += "_v.png";

	//src += (visited) ? "1" : "0";
	//src += (selected) ? "1" : "0";

	return (
		<img id={id} src={src} alt="" />
	)
}