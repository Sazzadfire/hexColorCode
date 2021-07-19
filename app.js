

document.getElementById('button').addEventListener('click',function colorGenarator(e){
  e.preventDefault();

    let hexCodes =['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
   
    let Color ='#';
   
    for(let i =0 ; i<6; i++){
       let num = Math.round(Math.random()*15);
       let num2 = hexCodes[num];
       Color += num2;
    }
   
    document.getElementById('container').style.backgroundColor = Color;
    document.getElementById('output').style.color = Color;
    document.getElementById('output').innerHTML = Color;
   }) 