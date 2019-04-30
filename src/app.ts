/*
 * Filename: /Users/tonymedrano/Desktop/canvas-typescript-physics/src/app.ts
 * Path: /Users/tonymedrano/Desktop/canvas-typescript-physics
 * Created Date: Tuesday, February 27th 2018, 6:30:22 am
 * Author: tonymedrano
 * 
 * Copyright (c) 2019 CANVAS TYPESCRIPT PHYSICS by TONY MEDRANO
 */


//. Create element
const canvas: HTMLCanvasElement = document.createElement('canvas')
canvas.id = 'canvas-typescript-physics'
canvas.width = window.innerWidth
canvas.height = window.innerHeight
document.body.appendChild(canvas)

//. Create context
const ctx: any = canvas.getContext('2d')
const width: number = canvas.width
const height: number = canvas.height

