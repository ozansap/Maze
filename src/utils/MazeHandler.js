export class MazeHandler {
	static new(width, height) {
		let data = {};

		data.state = 0;
		data.i = { x: 0, y: 0 };
		data.j = { x: 0, y: 0 };
		data.grid = [];
		data.stack = [];
		data.width = width;
		data.height = height;
		data.size = width * height;
		data.visitedCount = 1;

		let id = 0;

		for (let i = 0; i < width; i++) {
			data.grid.push([]);

			for (let j = 0; j < height; j++) {
				data.grid[i].push({
					id: id++,
					walls: 31,
					visited: false,
					head: false,
					stacked: false,
					start: false,
					goal: false,
				});
			}
		}

		return data;
	}

	static clear(data) {
		data.state = 3;

		for (let i = 0; i < data.width; i++) {
			for (let j = 0; j < data.height; j++) {
				data.grid[i][j].visited = false;
				data.grid[i][j].head = false;
				data.grid[i][j].stacked = false;
				data.grid[i][j].start = false;
				data.grid[i][j].goal = false;
			}
		}

		return data;
	}

	static generate_full(data) {
		let head = data.grid[data.i.x][data.i.y];
		head.visited = true;
		
		while (data.visitedCount < data.size) {
			let visitables = [
				[data.grid[data.i.x]?.[data.i.y - 1], 1, [0, -1]],
				[data.grid[data.i.x + 1]?.[data.i.y], 2, [1, 0]],
				[data.grid[data.i.x]?.[data.i.y + 1], 4, [0, 1]],
				[data.grid[data.i.x - 1]?.[data.i.y], 8, [-1, 0]],
			].filter((v) => v[0] && !v[0].visited);

			if (visitables.length) {
				data.state = 1;

				let random = Math.floor(Math.random() * visitables.length);
				let visitable = visitables[random];
				let newHead = visitable[0];

				let forward = visitable[1];
				let backward = forward < 4 ? forward << 2 : forward >> 2;

				head.walls &= ~forward;
				newHead.walls &= ~backward;

				newHead.visited = true;
				data.visitedCount++;
				
				head = newHead;
				data.stack.push(data.i);
				data.i = {
					x: data.i.x + visitable[2][0],
					y: data.i.y + visitable[2][1]
				};
			} else {
				data.state = 2;

				data.i = data.stack.pop();
				head = data.grid[data.i.x][data.i.y];
			}
		}

		return MazeHandler.clear(data);
	}

	static generate_step(data) {
		if (data.visitedCount === data.size) return MazeHandler.clear(data);

		let head = data.grid[data.i.x][data.i.y];
		head.visited = true;
		head.stacked = true;
		head.head = false;

		let visitables = [
			[data.grid[data.i.x]?.[data.i.y - 1], 1, [0, -1]],
			[data.grid[data.i.x + 1]?.[data.i.y], 2, [1, 0]],
			[data.grid[data.i.x]?.[data.i.y + 1], 4, [0, 1]],
			[data.grid[data.i.x - 1]?.[data.i.y], 8, [-1, 0]],
		].filter((v) => v[0] && !v[0].visited);

		if (visitables.length) {
			data.state = 1;

			let random = Math.floor(Math.random() * visitables.length);
			let visitable = visitables[random];
			let newHead = visitable[0];

			let forward = visitable[1];
			let backward = forward < 4 ? forward << 2 : forward >> 2;

			head.walls &= ~forward;
			newHead.walls &= ~backward;

			newHead.head = true;
			newHead.visited = true;
			data.visitedCount++;
			
			head = newHead;
			data.stack.push(data.i);
			data.i = {
				x: data.i.x + visitable[2][0],
				y: data.i.y + visitable[2][1]
			};
		} else {
			data.state = 2;

			head.stacked = false;

			data.i = data.stack.pop();
			head = data.grid[data.i.x][data.i.y];

			head.head = true;
		}

		return data;
	}

	static solve_full(data) {

		return data;
	}

	static solve_step(data) {

		return data;
	}
}