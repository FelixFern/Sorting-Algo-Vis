data = []
bg_color = []
speed = 10
size = 10

for(let i = 0; i < size; i++) {
    data.push(Math.floor(Math.random() * size) + 1)
}

var container = document.getElementById("chart-container")
for(let i = 0; i < size; i++) {
    container.innerHTML+='<div style="height:'+data[i]*2+'%"></div>';
}



function randomArray() {
    data = []
    for(let i = 0; i < size; i++) {
        data.push(Math.floor(Math.random() * (size - 1)) + 1)
    }
    container.innerHTML = ""
    for(let i = 0; i < size; i++) {
        container.innerHTML+='<div style="height:'+data[i]*2+'%"></div>';
    }
}

function updateSize(){
    size = document.getElementById("size").value
    document.getElementById("size-number").innerHTML = size
    data = []
    for(let i = 0; i < size; i++) {
        data.push(Math.floor(Math.random() * (size - 1)) + 1)
    }
    container.innerHTML = ""
    for(let i = 0; i < size; i++) {
        container.innerHTML+='<div style="height:'+data[i]*2+'%"></div>';
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function updateSpeed() { 
    speed = document.getElementById("speed").value * 10
    document.getElementById("speed-number").innerHTML = document.getElementById("speed").value
    console.log(speed)
}

async function bubbleSort() {
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size-1; j++) {
            container.childNodes[j].style.backgroundColor = "red"
            container.childNodes[j+1].style.backgroundColor = "yellow"
            if(data[j] > data[j+1]) {
                await sleep(1000/speed)
                let temp = data[j]
                data[j] = data[j+1]
                data[j+1] = temp
                container.innerHTML = ""
                for(let x = 0; x < size; x++) {
                    container.innerHTML+='<div style="height:'+data[x]*2+'%"></div>';
                }
                container.childNodes[j].style.backgroundColor = "yellow"
                container.childNodes[j+1].style.backgroundColor = "red"
                await sleep(1000/speed)
            }
            container.childNodes[j].style.backgroundColor = "orange"
            container.childNodes[j+1].style.backgroundColor = "orange"
        }
    }
}

async function insertionSort() {
    for (let i = 1; i < size; i++) {
        let current = data[i];
        container.childNodes[i].style.backgroundColor = "red"
        let j = i-1; 
        while ((j > -1) && (current < data[j])) {
            await sleep(100/speed)
            data[j+1] = data[j];
            container.childNodes[j].style.backgroundColor = "red"
            container.childNodes[j+1].style.backgroundColor = "yellow"
            j--;
        }
        data[j+1] = current;
    }
}