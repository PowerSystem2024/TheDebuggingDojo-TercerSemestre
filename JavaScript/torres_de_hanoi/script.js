const towers = {
  A: document.getElementById("A"),
  B: document.getElementById("B"),
  C: document.getElementById("C")
};

let disks = [];

function createDisk(className) {
  const div = document.createElement("div");
  div.className = `disk ${className}`;
  return div;
}

function setup() {
  disks = [
    createDisk("disk3"),
    createDisk("disk2"),
    createDisk("disk1")
  ];
  Object.values(towers).forEach(tower => tower.innerHTML = "");
  disks.forEach(disk => towers.A.appendChild(disk));
}

async function moveDisk(from, to) {
  return new Promise(resolve => {
    setTimeout(() => {
      const disk = towers[from].lastElementChild;
      if (disk) {
        disk.classList.remove("disk");
        void disk.offsetWidth; // Forzar reflow del DOM
        disk.classList.add("disk");
        towers[to].appendChild(disk);
      }
      resolve();
    }, 600);
  });
}

async function hanoi(n, from, to, aux) {
  if (n === 1) {
    await moveDisk(from, to);
  } else {
    await hanoi(n - 1, from, aux, to);
    await moveDisk(from, to);
    await hanoi(n - 1, aux, to, from);
  }
}

async function startHanoi() {
  setup();
  await hanoi(disks.length, "A", "C", "B");
}

function reset() {
  setup();
}

setup();
