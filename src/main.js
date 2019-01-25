const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const screen = {
  w: window.innerWidth,
  h: window.innerHeight
}
canvas.width = screen.w
canvas.height = screen.h