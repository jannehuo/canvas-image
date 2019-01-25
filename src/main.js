import { CanvasSpace, Pt, Group, Num, Rectangle } from 'pts'
import { times } from 'lodash'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const screen = {
  w: window.innerWidth,
  h: window.innerHeight
}
const points = []
const ratio = 20
canvas.width = screen.w
canvas.height = screen.h

let space = new CanvasSpace( "#canvas" );
let form = space.getForm()
space.setup({ bgcolor: "#7d9cce" })

const createPoints = () => {
  times(screen.w, (w) => {
    times(screen.h, (h) => {
      if(w % ratio === 0 && h % ratio === 0) {
        points.push(new Pt(w,h))
      }
    })
  })
}

space.add( (time, ftime) => {
  points.forEach(p => form.point(p, 1, 'circle').fill("#333").stroke('transparent'))
});

createPoints()
space.play()