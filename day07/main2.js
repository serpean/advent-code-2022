const input = process.env.input;
const lines = input.split('\n');

class SystemNode {

    constructor(name, parent, weight, children) {
        if (this.constructor == SystemNode) {
            throw new Error("SystemNode classes can't be instantiated.");
        }
        this.name = name;
        this.parent = parent;
        this.weight = weight;
        this.children = children;
    }
    
    getWeight() {
        return +this.weight + (this.children ? this.children.reduce((acc, child) => acc + child.getWeight(), 0) : 0);
    }

    addNode(node) {
        if (this.children) {
            this.children.push(node);
        }
    }
}

class DirNode extends SystemNode {
    constructor(name, parent) {
        super(name, parent, 0, []);
    }
}
class FileNode extends SystemNode {
    constructor(name, parent, weight) {
        super(name, parent, weight, null);
    }

    addNode(node) {
        throw new Error("FileNode can't have children");
    }
}

let i = 1;
let currentNode = new DirNode('/', null);
let root = currentNode;
while (i < lines.length) {
  const command = lines[i].split(' ');
  if (command[1] === 'cd') {
    if (command[2] === '..') {
      currentNode = currentNode.parent;
    } else {
        const dir = new DirNode(command[2], currentNode);
        currentNode.addNode(dir);
        currentNode = dir;
    }
  } else if(command[1] === 'ls') {
    while (lines[i + 1] && !lines[i + 1].includes('$')) {
        const [dirOrWeight, name] = lines[i + 1].split(' ');
        if (dirOrWeight === 'dir') {
            const dir = new DirNode(name, currentNode);
            currentNode.addNode(dir);
        } else {
            const file = new FileNode(name, currentNode, dirOrWeight);
            currentNode.addNode(file);
        }
        i++;
    }
  }
  i++;
}

const totalDiskSize = 70000000;
const totalCurrentUsage = root.getWeight();
const totalAvailable = totalDiskSize - totalCurrentUsage;
const sizes = [];
const queue = [root];
while (queue.length) {
    currentNode = queue.shift();
    if (currentNode.children) {
        const size = currentNode.getWeight();
        if (size + totalAvailable >= 30000000) {
            sizes.push(size);
        }
        queue.push(...currentNode.children);
    }
}
console.log(sizes.reduce((acc, size) => acc > size ? size : acc, totalDiskSize));
