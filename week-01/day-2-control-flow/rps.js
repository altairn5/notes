var player = process.argv.slice(2);
var computer = Math.random();

console.log(player);

if (computer < 0.34){
	computer = 'rock';
}else if (computer <= 67){
	computer = 'paper';
}else{
	computer = 'scissors';
}

if (player === computer){
	console.log('tie');
}
else if((player === 'rock')&&(computer === 'paper')){
	console.log('Computer chose paper, you loose.');}
if(computer === 'scissor'){
	console.log('Computer chose scissors, you win!');

}

