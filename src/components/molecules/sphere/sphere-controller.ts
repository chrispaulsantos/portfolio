import React from 'react';

/**
 *
 * @param {number} value
 * @param {number} min
 * @param {number} max
 */
function clamp(value: number, min: number, max: number) {
    return Math.max(min, Math.min(max, value));
}

/**
 * Creates a rotation matrix from a quaternion
 * @param {Quaternion} q
 * @returns {number[]} An array representing a rotation matrix
 */
function makeRotationMatrixFromQuaternion(q: Quaternion) {
    var zero = new Vector3(0, 0, 0);
    var one = new Vector3(1, 1, 1);
    return compose(
        zero,
        q,
        one
    );

    /**
     *
     * @param {Vector3} position
     * @param {Quaternion} quaternion
     * @param {Vector3} scale
     * @returns {number[]}
     */
    function compose(position: Vector3, quaternion: Quaternion, scale: Vector3) {
        var te = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

        const x = quaternion.x,
            y = quaternion.y,
            z = quaternion.z,
            w = quaternion.w;
        const x2 = x + x,
            y2 = y + y,
            z2 = z + z;
        const xx = x * x2,
            xy = x * y2,
            xz = x * z2;
        const yy = y * y2,
            yz = y * z2,
            zz = z * z2;
        const wx = w * x2,
            wy = w * y2,
            wz = w * z2;

        const sx = scale.x,
            sy = scale.y,
            sz = scale.z;

        te[0] = (1 - (yy + zz)) * sx;
        te[1] = (xy + wz) * sx;
        te[2] = (xz - wy) * sx;
        te[3] = 0;

        te[4] = (xy - wz) * sy;
        te[5] = (1 - (xx + zz)) * sy;
        te[6] = (yz + wx) * sy;
        te[7] = 0;

        te[8] = (xz + wy) * sz;
        te[9] = (yz - wx) * sz;
        te[10] = (1 - (xx + yy)) * sz;
        te[11] = 0;

        te[12] = position.x;
        te[13] = position.y;
        te[14] = position.z;
        te[15] = 1;

        return te;
    }
}

/**
 * Calculates the euler angles from a rotation matrix
 * @param {number[]} matrix An array representing a rotation matrix
 */
function getEulerAnglesFromRotationMatrix(matrix: number[]) {
    let x = 0,
        y = 0,
        z = 0;

    var te = matrix;
    var m11 = te[0],
        m12 = te[4],
        m13 = te[8];
    var m21 = te[1],
        m22 = te[5],
        m23 = te[9];
    var m31 = te[2],
        m32 = te[6],
        m33 = te[10];

    y = Math.asin(clamp(m13, -1, 1));

    if (Math.abs(m13) < 0.99999) {
        x = Math.atan2(-m23, m33);
        z = Math.atan2(-m12, m11);
    } else {
        x = Math.atan2(m32, m22);
        z = 0;
    }

    return { x, y, z };
}

class Vector3 {
    public x: number;
    public y: number;
    public z: number;
    /**
     *
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    constructor(x: number, y: number, z: number) {
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
    }

    /**
     *  Calculates the length of the vector
     */
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    /**
     * Calculates the dot product of this vector and a vector b
     * @param {Vector3} b
     */
    dot(b: Vector3) {
        return this.x * b.x + this.y * b.y + this.z * b.z;
    }

    /**
     * Calculates the cross product of this vector and a vector b
     * @param {Vector3} b
     */
    cross(b: Vector3) {
        let aXbx = this.y * b.z - this.z * b.y;
        let aXby = this.z * b.x - this.x * b.z;
        let aXbz = this.x * b.y - this.y * b.x;

        return new Vector3(aXbx, aXby, aXbz);
    }

    /**
     * Normalizes this vector
     */
    normalize() {
        const l = 1 / this.length();
        this.x = this.x * l;
        this.y = this.y * l;
        this.z = this.z * l;
    }

    /**
     * Scales this vector by the given scale factor
     * @param {number} scale
     */
    scale(scale: number) {
        this.x = this.x * scale;
        this.y = this.y * scale;
        this.z = this.z * scale;
    }

    /**
     * Adds a vector b to this vector
     * @param {Vector3} b
     */
    add(b: Vector3) {
        this.x = this.x + b.x;
        this.y = this.y + b.y;
        this.z = this.z + b.z;
    }
}

class Quaternion {
    /**
     * Creates a quaternion from two vectors, a and b
     * @param {Vector3} a
     * @param {Vector3} b
     */
    static fromUnitVectors(a: Vector3, b: Vector3) {
        const EPS = 0.000001;

        let r = a.dot(b) + 1;
        let x, y, z, w;

        if (r < EPS) {
            r = 0;

            if (Math.abs(a.x) > Math.abs(a.z)) {
                x = -a.y;
                y = a.x;
                z = 0;
                w = r;
            } else {
                x = 0;
                y = -a.z;
                z = a.y;
                w = r;
            }
        } else {
            const crossP = a.cross(b);

            x = crossP.x;
            y = crossP.y;
            z = crossP.z;
            w = r;
        }

        const q = new Quaternion(x, y, z, w);
        q.normalize();

        return q;
    }

    public x: number;
    public y: number;
    public z: number;
    public w: number;

    /**
     *
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} w
     */
    constructor(x: number, y: number, z: number, w: number) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }

    /**
     * Normalizes this quaternion
     */
    normalize() {
        var l = this.length();

        if (l === 0) {
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.w = 1;
        } else {
            l = 1 / l;

            this.x = this.x * l;
            this.y = this.y * l;
            this.z = this.z * l;
            this.w = this.w * l;
        }
    }

    /**
     * Calculates the length of this quaternion
     */
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
}

let imagePaths = [
    'images/nodejs.svg',
    'images/angular.svg',
    'images/mongo.svg',
    'images/docker.svg',
    'images/javascript.svg',
    'images/typescript.svg',
    'images/postgres.svg',
    'images/mysql.svg',
    'images/python.svg',
    'images/java.svg',
    'images/nginx.svg',
    'images/bash.svg',
    'images/sass.svg',
    'images/aws.svg',
    'images/git.svg',
    'images/latex.svg',
    'images/react.svg'
];

export function generateSphere(ref: React.MutableRefObject<HTMLElement>, size: number) {
    // Get the sphere div
    const sphere = ref.current;

    if (!sphere) {
        return;
    }

    // Set the specified size on ths sphere
    sphere.setAttribute('style', `height: ${size}px; width: ${size}px;`)

    // The number of points we will generate on the sphere is equal to
    // the number of images we have
    let numberOfPoints = imagePaths.length;
    // The scale we will later scale the normalized vectors by. We get this here
    // so that we can change the sphere height in css and it will adjust accordingly
    let scale = size;

    let vectors: Vector3[] = [];
    // https://stackoverflow.com/a/44164075
    // Golden spiral method to place points on our sphere
    for (let i = 0; i < numberOfPoints; i++) {
        let phi = Math.acos(1 - (2 * i) / numberOfPoints);
        let theta = Math.PI * (1 + 5 ** 0.5) * i;

        // Create a new vector from phi and theta
        const v = new Vector3(
            Math.cos(theta) * Math.sin(phi),
            Math.sin(theta) * Math.sin(phi),
            Math.cos(phi)
        );

        v.normalize();

        vectors.push(v);
    }

    // The default normal vector for the plane the images lie on is the
    // vector coming out of the screen, or (0, 0, 1);
    const a = new Vector3(0, 0, 1);

    // Loop through the created vectors
    vectors.forEach((v, i) => {
        // Create a quaternion from our vectors
        const quaternion = Quaternion.fromUnitVectors(a, v);

        // Create a rotation matrix from the quaternion
        const m = makeRotationMatrixFromQuaternion(quaternion);

        // Calculate the euler angles from the quaternion
        const angles = getEulerAnglesFromRotationMatrix(m);

        // Create a div element to add to the sphere
        let div = document.createElement('div');
        div.classList.add('point');

        // Scale the vector to the radius of the sphere
        v.scale(scale / 2);
        // Shift the origin to the center of the div
        v.add(new Vector3(scale / 3, scale / 3, 0));

        // Set our css transforms here which translate and rotate the images
        // onto the sphere
        div.setAttribute(
            'style',
            `transform: translate3d(${v.x}px, ${v.y}px, ${v.z}px) rotateX(${angles.x}rad) rotateY(${
                angles.y
            }rad) rotateZ(${angles.z}rad); animation: fadeIn ${0.5 * i}s forwards;`
        );

        // This is the img tag we will add to our point div
        const img = document.createElement('img');
        img.height = scale / 3.25;
        img.width = scale / 3.25;
        img.src = process.env.PUBLIC_URL + `/${imagePaths[i]}`;

        // Append the img to the point div
        div.appendChild(img);
        // Append the point div to the sphere
        sphere.appendChild(div);
    });
}
