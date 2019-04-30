/*
 * Filename: /Users/tonymedrano/Desktop/animation-js/src/vector/vector.ts
 * Path: /Users/tonymedrano/Desktop/animation-js
 * Created Date: Tuesday, April 30th 2019, 3:50:42 pm
 * Author: tonymedrano
 * 
 * Copyright (c) 2019 CANVAS TYPESCRIPT PHYSICS by TONY MEDRANO
 */


export class Vector {

    constructor(public _x: number, public _y: number) {
        this._x = 1
        this._y = 0
    }

    create(x: number, y: number) {
        const obj = new Vector(x, y)
        obj.x = x
        obj.y = y
        return obj
    }

    set x(value: number) {
        this._x = value
    }

    get x() {
        return this._x
    }

    set y(value: number) {
        this._y = value
    }

    get y() {
        return this._y
    }

    setAngle: function(angle) {
    var length = this.getLength()
    this._x = Math.cos(angle) * length
    this._y = Math.sin(angle) * length
},

getAngle: function() {
    return Math.atan2(this._y, this._x)
},

setLength: function(length) {
    var angle = this.getAngle()
    this._x = Math.cos(angle) * length
    this._y = Math.sin(angle) * length
},

getLength: function() {
    return Math.sqrt(this._x * this._x + this._y * this._y)
},

//. Stop here

add: function(v2) {
    return vector.create(this._x + v2.getX(), this._y + v2.getY())
},

subtract: function(v2) {
    return vector.create(this._x - v2.getX(), this._y - v2.getY())
},

multiply: function(val) {
    return vector.create(this._x * val, this._y * val)
},

divide: function(val) {
    return vector.create(this._x / val, this._y / val)
},

addTo: function(v2) {
    this._x += v2.getX()
    this._y += v2.getY()
},

subtractFrom: function(v2) {
    this._x -= v2.getX()
    this._y -= v2.getY()
},

multiplyBy: function(val) {
    this._x *= val
    this._y *= val
},

divideBy: function(val) {
    this._x /= val
    this._y /= val
}
}