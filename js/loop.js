// for
for (let i = 0; i < 5; i++){
    console.log(`Iterasi for ke ${i}`);
}

// do..while
let a = 0;
do{
    console.log(`Iterasi do..while ke ${a}`);
    a+=1;
}while(a < 5);

// while
let b = 0;
while(b < 5){
    console.log(`Iterasi while ke ${b}`);
    i++;
}

// break
for(let x = 0; x < 5; x++){
    if(x==3){
        break;
    }
    console.log(`Iterasi break ke ${x}`);
}

// continue
for(let z = 0; z < 5; z++){
    if(z==3){
        continue;
    }
    console.log(`Iterasi continueke ${z}`);
}