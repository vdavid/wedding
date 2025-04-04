export class RandomGenerator {
    private readonly N: number
    private readonly M: number
    private readonly MATRIX_A: number
    private readonly UPPER_MASK: number
    private readonly LOWER_MASK: number
    private readonly mt: number[]
    private mti: number

    constructor(seed: number = new Date().getTime()) {
        this.N = 624
        this.M = 397
        this.MATRIX_A = 0x9908b0df /* constant vector a */
        this.UPPER_MASK = 0x80000000 /* most significant w-r bits */
        this.LOWER_MASK = 0x7fffffff /* least significant r bits */

        this.mt = new Array(this.N) /* the array for the state vector */
        this.mti = this.N + 1 /* mti == N + 1 means mt[N] is not initialized */

        this.initRandomGenerator(seed)
    }

    private initRandomGenerator(seed: number) {
        this.mt[0] = seed >>> 0
        for (this.mti = 1; this.mti < this.N; this.mti++) {
            let s = this.mt[this.mti - 1] ^ (this.mt[this.mti - 1] >>> 30)
            this.mt[this.mti] =
                ((((s & 0xffff0000) >>> 16) * 1812433253) << 16) +
                (s & 0x0000ffff) * 1812433253 +
                this.mti
            this.mt[this.mti] >>>= 0
        }
    }

    private generateRandomInt32() {
        let y: number
        const mag01 = [0x0, this.MATRIX_A]

        if (this.mti >= this.N) {
            /* generate N words at one time */
            let kk: number

            if (this.mti === this.N + 1)
                /* if initRandomGenerator() has not been called, */
                this.initRandomGenerator(5489) /* a default initial seed is used */

            for (kk = 0; kk < this.N - this.M; kk++) {
                y = (this.mt[kk] & this.UPPER_MASK) | (this.mt[kk + 1] & this.LOWER_MASK)
                this.mt[kk] = this.mt[kk + this.M] ^ (y >>> 1) ^ mag01[y & 0x1]
            }
            for (; kk < this.N - 1; kk++) {
                y = (this.mt[kk] & this.UPPER_MASK) | (this.mt[kk + 1] & this.LOWER_MASK)
                this.mt[kk] = this.mt[kk + (this.M - this.N)] ^ (y >>> 1) ^ mag01[y & 0x1]
            }
            y = (this.mt[this.N - 1] & this.UPPER_MASK) | (this.mt[0] & this.LOWER_MASK)
            this.mt[this.N - 1] = this.mt[this.M - 1] ^ (y >>> 1) ^ mag01[y & 0x1]

            this.mti = 0
        }

        y = this.mt[this.mti++]

        /* Tempering */
        y ^= y >>> 11
        y ^= (y << 7) & 0x9d2c5680
        y ^= (y << 15) & 0xefc60000
        y ^= y >>> 18

        return y >>> 0
    }

    public random() {
        return this.generateRandomInt32() * (1.0 / 4294967296.0)
    }
}
