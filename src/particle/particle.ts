import { Vector } from '../vector'

export class Particle {
    constructor(public position: any, public velocity: any, public gravity: any) {
        this.position = null
        this.velocity = null
        this.gravity = null
    }

    static create(x: number, y: number, speed: number, direction: number, grav: number = 0) {
        const particle = new Particle(null, null, null)
        particle.position = Vector.create(x, y)
        particle.velocity = Vector.create(0, 0)
        particle.velocity.length = speed
        particle.velocity.angle = direction
        particle.gravity = Vector.create(0, grav)
        return particle
    }

    accelerate(accel: any) {
        this.velocity.addTo(accel)
    }

    update() {
        this.velocity.addTo(this.gravity)
        this.position.addTo(this.velocity)
    }
}