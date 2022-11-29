export function returnDate(game) {
  return `${game.Esd.toString()[8]}${game.Esd.toString()[9]}:${
    game.Esd.toString()[10]
  }${game.Esd.toString()[11]}`;
}
