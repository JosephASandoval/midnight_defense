export const grid = [];

export function handleGrid() {
  for (let i = 0; i < grid.length; i++) {
    grid[i].draw();
  }
}
