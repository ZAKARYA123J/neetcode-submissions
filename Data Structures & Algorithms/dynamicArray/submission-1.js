class DynamicArray {
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.arr = new Array(this.capacity);
    }

    get(i) {
        return this.arr[i];
    }

    set(i, n) {
        this.arr[i] = n;
    }

    pushback(n) {
        if (this.size === this.capacity) {
            this.resize();
        }
        this.arr[this.size] = n;
        this.size++;
    }

    popback() {
        const val = this.arr[this.size - 1];
        this.size--;
        return val;
    }

    resize() {
        this.capacity *= 2;
        const newArr = new Array(this.capacity);

        for (let i = 0; i < this.size; i++) {
            newArr[i] = this.arr[i];
        }

        this.arr = newArr;
    }

    getSize() {
        return this.size;
    }

    getCapacity() {
        return this.capacity;
    }
}