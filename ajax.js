var data = [];
    function tryLoad(){
        let url = new URL("https://jsonplaceholder.typicode.com/todos")
        var xml = new XMLHttpRequest();
        xml.open('GET',url);
        xml.send();
        xml.onload = function(){
        if(xml.status ==200){
            console.log(xml.responseText);
            data = JSON.parse(xml.responseText);
            addElements();
            }            
        }
    }
    tryLoad();
    var myUl=document.createElement("ul")
    function addElements(){     
           
        for(var i =0 ;i< data.length;i++){
            //console.log("aa2");
            create(data[i])
        }
    }
    function create(obj){
        var myLi = document.createElement("li");        
            myUl.appendChild(myLi);
            document.body.append(myUl);
            myLi.innerHTML = "\"userId\" >  " + obj.userId +
            "<br>" +" \"title\" > " + obj.title +
            "<br>" +" \"completed\" > " + obj.completed;
            colors(obj,myLi)
            
    }
    function colors(obj,myLi){
        if(obj.completed == true){
            //console.log("aa")
            myLi.style.backgroundColor = "green";
            myLi.style.color = "#e6e6e6"
        } else{
            myLi.style.backgroundColor = "#ffff00";
        } 
    }
    //////////

    //////////
    //Completed check
    var sele = document.getElementById("mySelector");
    sele.onchange = function(){
            if(!this.value){
                //check for the first option to not remove the li
            }
            else{
                myUl.innerHTML= "";
                for(var i =1 ;i<data.length;i++){
                    if(data[i].completed==true && this.value =="completed"){
                    //console.log("aa")
                        create(data[i]);
                    }else if(data[i].completed==false && this.value =="not_completed"){
                        create(data[i])
                    }
                }
            }                            
    }
    //////////


    //////////
    //reset Function
    var reset = document.getElementById("reset");
    reset.onclick = function(){
        myUl.innerHTML= ''
        tryLoad()
    }
    //////////

    //////////
    //id selector 
    var CheckId = document.getElementById("selectorId");
    CheckId.onchange = function(){
        if(!this.value){}
        else{
            myUl.innerHTML=""
            for(var i=0 ;i<data.length;i++)
            if(this.value== data[i].userId){
                create(data[i]);
        }
        }   
    }
    /////////

    
