class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.buckets = new Array(capacity).fill(null).map(() => []);
    this.size = 0;
  }

  checkBounds(index) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error('Trying to access index out of bounds');
    }
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (hashCode * primeNumber + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    this.checkBounds(index);

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    const bucket = this.buckets[index];
    for (let node of bucket) {
      if (node.key === key) {
        node.value = value;
        return;
      }
    }

    bucket.push({ key, value });
    this.size++;

    if (this.size / this.capacity > this.loadFactor) {
      this.growBuckets();
    }
  }

  growBuckets() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;

    for (const bucket of oldBuckets) {
      if (bucket) {
        for (const [key, value] of bucket) {
          this.set(key, value);
        }
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    this.checkBounds(index);

    const bucket = this.buckets[index];
    if (!bucket) return null;

    for (let [k, value] of bucket) {
      if (k === key) {
        return value;
      }
    }

    return null;
  }

  has(key) {
    const index = this.hash(key);
    this.checkBounds(index);

    const bucket = this.buckets[index];
    if (!bucket) return false;

    for (let [k] of bucket) {
      if (k === key) {
        return true;
      }
    }

    return false;
  }

  remove(key) {
    const index = this.hash(key);
    this.checkBounds(index);

    const bucket = this.buckets[index];
    if (!bucket) return false;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket.splice(i, 1);
        this.size--

        if (bucket.length === 0) {
          this.buckets[index] = null;
        }
        
        return true;
      }
    }

    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;
  }

  keys() {
    const keys = [];
    for (const bucket of this.buckets) {
      if (bucket) {
        for (const [key] of bucket) {
          keys.push(key);
        }
      }
    }
    return keys;
  }

  values() {
    const values = [];
    for (const bucket of this.buckets) {
      if (bucket) {
        for (const [, value] of bucket) {
          values.push(value);
        }
      }
    }
    return values;
  }

  entries() {
    const entries = [];
    for (const bucket of this.buckets) {
      if (bucket) {
        for (const [key, value] of bucket) {
          entries.push([key, value]);
        }
      }
    }
    return entries;
  }
}