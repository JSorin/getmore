globalFunction = function(){
    console.info('a global function');
}
setInterval(()=>{globalFunction()},1000);