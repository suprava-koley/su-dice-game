

var gameVar = {
    round:0,
    
    player1:[],
    player2:[]
}
var gameFunction = (function() {

   

   
    function addScore(turn, score) {
        
        turn ? gameVar.player1.push(score) : gameVar.player2.push(score)  ;
       
        if (turn == 0) gameVar.round = gameVar.round + 1;
      
        
    }
    function declareWinner()
    {
        var result1=0,result2=0;
        gameVar.player1.forEach(function(x){
            result1=result1+x;
        });
        gameVar.player2.forEach(function(x){
            result2=result2+x;
        });
       
        if(result1>result2)
        {
           
          
          
             if(name1.value.length==0)
             {
                document.querySelector('.winner').innerHTML="Congratulation player-1 is the winner!!" ; 
            }
            
             else
             {
                document.querySelector('.winner').innerHTML=(`Congratulation ${name1.value} is the winner!!`); 
             }
            
           
        }  
        else
        {
           
            
            if(name2.value.length==0)
            {
               document.querySelector('.winner').innerHTML="Congratulation player-2 is the winner!!" ; 
           }
           
            else
            {
               document.querySelector('.winner').innerHTML=(`Congratulation ${name2.value} is the winner!!`); 
            }
           
        }
    }
    function addRound(turn,score)
    {
       

        var ul1=document.querySelector(".scoring-board1");
        var ul2=document.querySelector(".scoring-board2");

        var ul=turn==1?ul1:ul2;
        var li=document.createElement("li");
        li.appendChild(document.createTextNode(score));
        ul.appendChild(li);
    }
    var nameTag1 = document.querySelector(".player1");
    var nameTag2 = document.querySelector(".player2");

     var name1 = document.querySelector(".player1-info");
     var name2 = document.querySelector(".player2-info");

    return {
        nameInfo: function(click) {
         
           
            
            var nameTag = click.className == 'add1' ? nameTag1 : nameTag2;
            var name = click.className == 'add1' ? name1 : name2;
            
            var Pname = document.createElement("p");
            Pname.appendChild(document.createTextNode(name.value));
            nameTag.appendChild(Pname);

            name.style.display = 'none';
            click.style.display = 'none';
        },

        
        dice: function(dice) {
                if(gameVar.round==3)
                {
                    dice.preventDefault();
                }
           
                var randNum = Math.floor(Math.random() * 6 + 1);


              
                dice.className == 'btn1' ? diceFunc1() : diceFunc2();
               
                function diceFunc1() {
                    document.querySelector('.dice-value1');
                    document.querySelector('.dice-value1').innerHTML = randNum;
                
                    addRound(1,randNum);
                    addScore(1,randNum);
                   

                }



                function diceFunc2() {
                    document.querySelector('.dice-value2');
                    document.querySelector('.dice-value2').innerHTML = randNum;
                
                    addScore(0,randNum);
                    addRound(2,randNum);
                    if (gameVar.round === 3) {
                        declareWinner();
                    }
                   
                }
            

        }

    }

})();


var mainfunc = (function(gameFunc) {
    var clickBtn1 = document.querySelector(".add1");
    var clickBtn2 = document.querySelector(".add2");


    var diceButton1 = document.querySelector('.btn1');
    var diceButton2 = document.querySelector('.btn2');

   
    var count = 1;

    var onClick_btn = (function(gameFunc) {
        return {
            c1: function() {
                gameFunc.nameInfo(clickBtn1);
            },
            c2: function() {
                gameFunc.nameInfo(clickBtn2);
            }
        }

    })(gameFunc);

    clickBtn1.addEventListener("click" ,onClick_btn.c1); 
    clickBtn2.addEventListener("click",onClick_btn.c2);

     diceButton1.addEventListener('click', diceRoll1);
    diceButton2.addEventListener('click', diceRoll2);
 
    
    
             function diceRoll1() {
             if (count == 1) {
             gameFunc.dice(diceButton1);

             } else {
                 alert('not your turn')
             }
             count = 2;
         }

         function diceRoll2() {
            
             
                 if (count == 2)
                  {
                     gameFunc.dice(diceButton2);
                  } 
                  else 
                  {
                     alert('not your turn');
                  }
                    count = 1;
             }

       
})(gameFunction);