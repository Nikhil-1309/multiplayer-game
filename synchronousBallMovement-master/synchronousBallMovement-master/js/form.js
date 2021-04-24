class Form{
  constructor(){

  }
  display() {
    //comment we are making html heading 
      var title = createElement('h2');
      title.html("carracing game");
      title.position(140,0);
      var input=createInput("name");
      var button=createButton('play');
      var greeting= createElement('h3');
      input.position(130,160);
      button.position(250,200);
      //comment we are click the playbutton
     button.mousePressed(function(){
       input.hide();
       button.hide();
       //comment make the input to give a player name.this player name storage in the variable name 
       var name=input.value();
       playercount=playercount+1;
       player.update(name);
       player.updateCount(playercount)
       greeting.html("hello"+name)
       greeting.position(130,160);   
     }) 
  }  
}