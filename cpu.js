class FakeCpu {
    flags;
    registers = [ 'r1','r2','r3','r4','r5','r6','r7','r8','r9','r10' ];
    registersObj = {r1: 0, r2: 1, r3: 2, r4: 3, r5: 4, r6: 5, r7: 6, r8:7, r9: 8, r10: 9};

    add (arg1,arg2) {
      if (this.registers.includes(arg1)) {
         this.registersObj[arg1] = this.registersObj[arg1] + arg2
      }
      if (this.registers.includes(arg2)) {
            this.registersObj[arg2] = this.registersObj[arg1] + arg2
      }
      if (typeof(arg1) === 'number') {
          this.registersObj[0] = arg1 + arg2
      }
      if (typeof(arg2) === 'number') {
            this.registersObj[0] = arg1 + arg2
        }
    }

    sub (arg1,arg2) {
        if (this.registers.includes(arg1)) {
            this.registersObj[arg1] = this.registersObj[arg1] - arg2
        }
        if (this.registers.includes(arg2)) {
            this.registersObj[arg2] = this.registersObj[arg1] - arg2
        }
        if (typeof(arg1) === 'number') {
            this.registersObj[0] = arg1 - arg2
        }
        if (typeof(arg2) === 'number') {
            this.registersObj[0] = arg1 - arg2
        }
    }

    mul (arg1,arg2) {
        if (this.registers.includes(arg1)) {
            this.registersObj[arg1] = this.registersObj[arg1] * arg2
        }
        if (this.registers.includes(arg2)) {
            this.registersObj[arg2] = this.registersObj[arg1] * arg2
        }
        if (typeof(arg1) === 'number') {
            this.registersObj[0] = arg1 * arg2
        }
        if (typeof(arg2) === 'number') {
            this.registersObj[0] = arg1 * arg2
        }
    }

    div (arg1,arg2) {
        if (this.registers.includes(arg1)) {
            this.registersObj[arg1] = this.registersObj[arg1] / arg2
        }
        if (this.registers.includes(arg2)) {
            this.registersObj[arg2] = this.registersObj[arg1] / arg2
        }
        if (typeof(arg1) === 'number') {
            this.registersObj[0] = arg1 / arg2
        }
        if (typeof(arg2) === 'number') {
            this.registersObj[0] = arg1 / arg2
        }
    }

    mov (arg1,arg2) {
        if (this.registers.includes(arg1)) {
            this.registersObj[arg1] = arg2
        }
        if (this.registers.includes(arg2)) {
            throw 'Second argument must be a value'
        }
        if (typeof(arg1) === 'number') {
            throw 'First argument must be a register'
        }
        if (typeof(arg2) === 'number') {
            this.registersObj[arg1] = arg2
        }
    }

    cmp (arg1,arg2) {
        if (arg1 > arg2) {
            this.flags = +1;
        }
        else if (arg1 < arg2) {
            this.flags = -1
        }
        else this.flags = 0;
    }

}