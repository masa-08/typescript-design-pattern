import { MacroCommand } from './command/macroCommand'
import { DrawCanvas } from './drawer/drawCanvas'
import { DrawCommand } from './drawer/drawCommand'

const hisotry = new MacroCommand()
const canvas = new DrawCanvas(hisotry)

canvas.print()

{
  const command = new DrawCommand(canvas, { x: 0, y: 0 })
  hisotry.append(command)
  command.execute()
  canvas.print()
}

{
  const command = new DrawCommand(canvas, { x: 1, y: 1 })
  hisotry.append(command)
  command.execute()
  canvas.print()
}

{
  const command = new DrawCommand(canvas, { x: 2, y: 2 })
  hisotry.undo()
  hisotry.append(command)
  command.execute()
  canvas.print()
}

canvas.clear()
canvas.print()
canvas.repaint()
canvas.print()
