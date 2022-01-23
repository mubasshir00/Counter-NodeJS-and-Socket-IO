const socket = io()

socket.on('countUpdated',(count)=>{
    console.log('Counter Update',count);
})

socket.on('countDecrement',(count)=>{
    console.log('Counter Decrement',count);
})

document.querySelector('#increment').addEventListener('click',()=>{
    console.log('Count Updated');
    socket.emit('increment');
})

document.querySelector('#decrement').addEventListener('click',()=>{
    console.log('Count Decrement');
    socket.emit('decrement')
})