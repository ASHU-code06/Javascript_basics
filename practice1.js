function f1(){
    console.log("f1");
}
function f2(){
    console.log('f2');
}
function main(){
    console.log('main');
    setTimeout(f1,0);
    f2 ();
}
main();
//first main will execute or go into call stack
//then console.log('main') will go into call stack and pop out after done execiton
//then setTimeout will go in callback queue as it is a web API
//then f2 will be execute