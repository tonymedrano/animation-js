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

    static create(x: number, y: number) {
        const obj = new Vector(x, y)
        obj.x = x
        obj.y = y
        return obj
    }

    get x(): number {
        return this._x
    }

    set x(value: number) {
        this._x = value
    }

    get y(): number {
        return this._y
    }

    set y(value: number) {
        this._y = value
    }

    get angle(): number {
        return Math.atan2(this._y, this._x)
    }

    set angle(angle: number) {
        const length = this.length
        this._x = Math.cos(angle) * length
        this._y = Math.sin(angle) * length
    }

    get length(): number {
        return Math.sqrt(this._x * this._x + this._y * this._y)
    }

    set length(length: number) {
        const angle = this.angle
        this._x = Math.cos(angle) * length
        this._y = Math.sin(angle) * length
    }

    add(val2: any): Vector {
        return Vector.create(this._x + val2.x, this._y + val2.y)
    }

    subtract(val2: any): Vector {
        return Vector.create(this._x - val2.x, this._y - val2.y)
    }

    multiply(value: number): Vector {
        return Vector.create(this._x * value, this._y * value)
    }

    divide(value: number): Vector {
        return Vector.create(this._x / value, this._y / value)
    }

    addTo(val2: any): void {
        this._x += val2.x
        this._y += val2.y
    }

    subtractFrom(val2: any): void {
        this._x -= val2.x
        this._y -= val2.y
    }

    multiplyBy(value: any): void {
        this._x *= value
        this._y *= value
    }

    divideBy(value: any): void {
        this._x /= value
        this._y /= value
    }
}