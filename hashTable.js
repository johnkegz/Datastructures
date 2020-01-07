const hash = (key, size) => {
    let hashedKey = 0;
    for(let i = 0; i < key.length; i++){
        hashedKey = key.charCodeAt(i);
    }

    return hashedKey % size
}

class HashTable {
    constructor (){
        this.size = 20
        this.buckets = Array(this.size)

        for (let i =0; i < this.buckets.length; i++){
            this.buckets[i] = new Map()
        }
    }

    insert(key, value) {
        let idx = hash(key, this.size)
        this.buckets[idx].set(key, value)
    }

    remove(key) {
        let idx = hash(key, this.size)
        let deleted = this.buckets[idx].get(key)
        this.buckets[idx].delete(key)
        return deleted
    }

    search(key) {
        let idx = hash(key, this.size)
        return this.buckets[idx].get(key)
    }
}

const hashTable = new HashTable();

hashTable.insert('GOT', 'jon snow')
hashTable.insert('Matrix', 'neo')
hashTable.insert('Matrix2', 'neo2')
hashTable.insert('Matrix3', 'neo3')
hashTable.insert('Matrix4', 'neo4')
hashTable.insert('Matrix5', 'neo5')
hashTable.insert('Matrix6', 'neo6')
hashTable.insert('eagle eye', 'somali')


// console.log("hashTable +++++++++", hashTable.search('GOT'))
// console.log("hashTable +++++++++", hashTable.remove('GOT'))
console.log("hashTable >>>>>>>>>", hashTable.buckets)