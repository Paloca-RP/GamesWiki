/*#################_Trocar_Imagem_############################*/
/*( onMouseOver="mouseEmCimaN(this)" onMouseOut="mouseForaN(this)" )  
Para ao passar mudar a imagem o "N" é o numero da função */
{
    //Bioshock
    function mouseEmCima(imagem) {
        imagem.src="../../images/Trocar_IMG/BioShock.jpg";
    }
    function mouseFora(imagem) {  
        imagem.src="../../images/imagens_principais/BioShock.jpg"; 
    }
    //CODMW2
    function mouseEmCima1(imagem) {
        imagem.src="../../images/Trocar_IMG/codmw2.jpg";
    }
    function mouseFora1(imagem) {  
        imagem.src="../../images/imagens_principais/codmw2.jpg"; 
    }
    //CyberPunk
    function mouseEmCima2(imagem) {
        imagem.src="../../images/Trocar_IMG/CyberPunk.png";
    }
    function mouseFora2(imagem) {  
        imagem.src="../../images/imagens_principais/CyberPunk.png"; 
    }
    //finalfantasyix
    function mouseEmCima3(imagem) {
        imagem.src="../../images/Trocar_IMG/finalfantasyix.jpg";
    }
    function mouseFora3(imagem) {  
        imagem.src="../../images/imagens_principais/finalfantasyix.jpg"; 
    }
    //GodofWar
    function mouseEmCima4(imagem) {
        imagem.src="../../images/Trocar_IMG/gow.jpg";
    }
    function mouseFora4(imagem) {  
        imagem.src="../../images/imagens_principais/gow.jpg"; 
    }
    //Little_Big_Planet
    function mouseEmCima5(imagem) {
        imagem.src="../../images/Trocar_IMG/Little_Big_Planet.jpg";
    }
    function mouseFora5(imagem) {  
        imagem.src="../../images/imagens_principais/Little_Big_Planet.jpg"; 
    }
    //LOZBOTW
    function mouseEmCima6(imagem) {
        imagem.src="../../images/Trocar_IMG/LOZBOTW.png";
    }
    function mouseFora6(imagem) {  
        imagem.src="../../images/imagens_principais/LOZBOTW.png"; 
    }
    //Red_Dead_Redemption
    function mouseEmCima7(imagem) {
        imagem.src="../../images/Trocar_IMG/Red_Dead_Redemption.png";
    }
    function mouseFora7(imagem) {  
        imagem.src="../../images/imagens_principais/Red_Dead_Redemption.png"; 
    }
    //Rocket_league
    function mouseEmCima8(imagem) {
        imagem.src="../../images/Trocar_IMG/rocket.jpg";
    }
    function mouseFora8(imagem) {  
        imagem.src="../../images/imagens_principais/rocketol.png"; 
    }
    //the last of us
    function mouseEmCima9(imagem) {
        imagem.src="../../images/Trocar_IMG/The_Last_of_Us.png";
    }
    function mouseFora9(imagem) {  
        imagem.src="../../images/imagens_principais/The_Last_of_Us.png"; 
    }
}
/*#################_BOTAO_DE_SUBMETER_COMENTARIOS_############################*/
{    
    //Bioshock
    {
        var lista=["I dislike shooting games in general because i suck at it. However my favorite genre is horror, rpg and strategy. This game hits all the marks of my favorite genre without heavily relying on its shooter element. I love how you can decimate wave of splicers even with just adam skills. Its funny and i love the bees with its reference to Wicker Man. Very atmospheric and at times made me sneakily peak at corners to check for splicers. Some jumpscares but not heart attack inducing. Of course the story. Intriguing to say the least. Easily one of the best game i played.",
       " If you like FPS with a bit of exploration and powers, classic gun arsenal and rich story, then this game is for you!"]

        function adicionarProducto (){
            var produto = document.getElementById("comments").value
                if(produto.length !== 0) {
                    lista.push(produto);
                    document.getElementById("comments").value = " ";
                    alert("comments add");
                }else{
                alert("Insira um Produto");}
        }

        function mostrarLista (){
            for(let i = 0; i < lista.length;i++)
            {
                let newParagraph = document.createElement("p")  
                let newParagraph2 = document.createElement("hr")
                let textNode = document.createTextNode(lista[i])
                newParagraph.appendChild(textNode)        
                newParagraph2.appendChild(textNode)
                let element = document.getElementById("lista-comments")
                element.appendChild(newParagraph)
                element.appendChild(newParagraph2)
            }
        }
        function mostrarultimo (event){
            let newParagraph = document.createElement("p")
            let newParagraph2 = document.createElement("hr")
                let textNode = document.createTextNode(lista[lista.length - 1])
                newParagraph.appendChild(textNode)
                newParagraph2.appendChild(textNode)
                let element = document.getElementById("lista-comments")
                element.appendChild(newParagraph)
                element.appendChild(newParagraph2)
                event.preventDefault()
        }
    }
    //CODMW2
    {
        var lista1=["Game is so much fun and great even years after i love the spec ops missions. If you want to buy the game for the multplayer dont ist dying off"]

        function adicionarProducto (){
            var produto = document.getElementById("comments").value
                if(produto.length !== 0) {
                    lista.push(produto);
                    document.getElementById("comments").value = " ";
                    alert("comments add");
                }else{
                alert("Insira um Produto");}
        }

        function mostrarLista1 (){
            for(let i = 0; i < lista1.length;i++)
            {
                let newParagraph = document.createElement("p")  
                let newParagraph2 = document.createElement("hr")
                let textNode = document.createTextNode(lista1[i])
                newParagraph.appendChild(textNode)        
                newParagraph2.appendChild(textNode)
                let element = document.getElementById("lista-comments")
                element.appendChild(newParagraph)
                element.appendChild(newParagraph2)
            }
        }
        function mostrarultimo1 (event){
            let newParagraph = document.createElement("p")
            let newParagraph2 = document.createElement("hr")
                let textNode = document.createTextNode(lista1[lista1.length - 1])
                newParagraph.appendChild(textNode)
                newParagraph2.appendChild(textNode)
                let element = document.getElementById("lista-comments1")
                element.appendChild(newParagraph)
                element.appendChild(newParagraph2)
                event.preventDefault()
        }
    }
    //CyberPunk
    {
        var lista2=["bons gráficos, boa história, bom cenário, excelente jogabilidade"]

        function adicionarProducto2 (){
            var produto = document.getElementById("comments").value
                if(produto.length !== 0) {
                    lista2.push(produto);
                    document.getElementById("comments").value = " ";
                    alert("comments add");
                }else{
                alert("Insira um Produto");}
        }

        function mostrarLista2 (){
            for(let i = 0; i < lista2.length;i++)
            {
                let newParagraph = document.createElement("p")  
                let newParagraph2 = document.createElement("hr")
                let textNode = document.createTextNode(lista2[i])
                newParagraph.appendChild(textNode)        
                newParagraph2.appendChild(textNode)
                let element = document.getElementById("lista-comments2")
                element.appendChild(newParagraph)
                element.appendChild(newParagraph2)
            }
        }
        function mostrarultimo2 (event){
            let newParagraph = document.createElement("p")
            let newParagraph2 = document.createElement("hr")
                let textNode = document.createTextNode(lista2[lista2.length - 1])
                newParagraph.appendChild(textNode)
                newParagraph2.appendChild(textNode)
                let element = document.getElementById("lista-comments2")
                element.appendChild(newParagraph)
                element.appendChild(newParagraph2)
                event.preventDefault()
        }
    }
    //finalfantasyix
    {
        var lista3=["Preface: the review posted here was my thoughts without the use of Moguri Mod. Moguri Mod fixes all of the issues present and adds beautiful background and nice quality of life tools for completionists such as 100% steal rate. I highly rec. this game if you use Moguri Mod. If you do not plan on installing Moguri Mod, read my review. Shout out to the devs of the mod for finishing this poorly coded piece of ♥♥♥♥. Keep it 100.", "When I first played Final Fantasy IX it was Christmas of 2000. I remember being incredibly excited that year because my Mom got me follow up games to two of my favorite JRPGs, the franchise Final Fantasy and Chrono Trigger. That Christmas I received Final Fantasy IX and Chrono Cross. In retrospect the amount of disappointment I felt for those two games at the time was unprecedented. That is probably the most disappointed I have ever been by a Christmas as a youth, but I digress..."]

        function adicionarProducto3 (){
            var produto = document.getElementById("comments").value
                if(produto.length !== 0) {
                    lista3.push(produto);
                    document.getElementById("comments").value = " ";
                    alert("comments add");
                }else{
                alert("Insira um Produto");}
        }

        function mostrarLista3 (){
            for(let i = 0; i < lista3.length;i++)
            {
                let newParagraph = document.createElement("p")  
                let newParagraph2 = document.createElement("hr")
                let textNode = document.createTextNode(lista3[i])
                newParagraph.appendChild(textNode)        
                newParagraph2.appendChild(textNode)
                let element = document.getElementById("lista-comments3")
                element.appendChild(newParagraph)
                element.appendChild(newParagraph2)
            }
        }
        function mostrarultimo3 (event){
            let newParagraph = document.createElement("p")
            let newParagraph2 = document.createElement("hr")
                let textNode = document.createTextNode(lista3[lista3.length - 1])
                newParagraph.appendChild(textNode)
                newParagraph2.appendChild(textNode)
                let element = document.getElementById("lista-comments3")
                element.appendChild(newParagraph)
                element.appendChild(newParagraph2)
                event.preventDefault()
        }
    }
    //GodofWar
    {
        var lista4=["Grate game ever"]

        function adicionarProducto4 (){
            var produto = document.getElementById("comments").value
                if(produto.length !== 0) {
                    lista4.push(produto);
                    document.getElementById("comments").value = " ";
                    alert("comments add");
                }else{
                alert("Insira um Produto");}
        }

        function mostrarLista4 (){
            for(let i = 0; i < lista4.length;i++)
            {
                let newParagraph = document.createElement("p")  
                let newParagraph2 = document.createElement("hr")
                let textNode = document.createTextNode(lista4[i])
                newParagraph.appendChild(textNode)        
                newParagraph2.appendChild(textNode)
                let element = document.getElementById("lista-comments4")
                element.appendChild(newParagraph)
                element.appendChild(newParagraph2)
            }
        }
        function mostrarultimo4 (event){
            let newParagraph = document.createElement("p")
            let newParagraph2 = document.createElement("hr")
                let textNode = document.createTextNode(lista4[lista4.length - 1])
                newParagraph.appendChild(textNode)
                newParagraph2.appendChild(textNode)
                let element = document.getElementById("lista-comments4")
                element.appendChild(newParagraph)
                element.appendChild(newParagraph2)
                event.preventDefault()
        }
    }
    //Little_Big_Planet
    {
        var lista5=["Otimo Jogo"]

        function adicionarProducto5 (){
            var produto = document.getElementById("comments").value
                if(produto.length !== 0) {
                    lista5.push(produto);
                    document.getElementById("comments").value = " ";
                    alert("comments add");
                }else{
                alert("Insira um Produto");}
        }

        function mostrarLista5 (){
            for(let i = 0; i < lista5.length;i++)
            {
                let newParagraph = document.createElement("p")  
                let newParagraph2 = document.createElement("hr")
                let textNode = document.createTextNode(lista5[i])
                newParagraph.appendChild(textNode)        
                newParagraph2.appendChild(textNode)
                let element = document.getElementById("lista-comments5")
                element.appendChild(newParagraph)
                element.appendChild(newParagraph2)
            }
        }
        function mostrarultimo5 (event){
            let newParagraph = document.createElement("p")
            let newParagraph2 = document.createElement("hr")
                let textNode = document.createTextNode(lista5[lista5.length - 1])
                newParagraph.appendChild(textNode)
                newParagraph2.appendChild(textNode)
                let element = document.getElementById("lista-comments5")
                element.appendChild(newParagraph)
                element.appendChild(newParagraph2)
                event.preventDefault()
        }
    }
    //LOZBOTW
    {
        var lista6=["Otimo Jogo"]

        function adicionarProducto6 (){
            var produto = document.getElementById("comments").value
                if(produto.length !== 0) {
                    lista6.push(produto);
                    document.getElementById("comments").value = " ";
                    alert("comments add");
                }else{
                alert("Insira um Produto");}
        }

        function mostrarLista6 (){
            for(let i = 0; i < lista6.length;i++)
            {
                let newParagraph = document.createElement("p")  
                let newParagraph2 = document.createElement("hr")
                let textNode = document.createTextNode(lista6[i])
                newParagraph.appendChild(textNode)        
                newParagraph2.appendChild(textNode)
                let element = document.getElementById("lista-comments6")
                element.appendChild(newParagraph)
                element.appendChild(newParagraph2)
            }
        }
        function mostrarultimo6 (event){
            let newParagraph = document.createElement("p")
            let newParagraph2 = document.createElement("hr")
                let textNode = document.createTextNode(lista6[lista6.length - 1])
                newParagraph.appendChild(textNode)
                newParagraph2.appendChild(textNode)
                let element = document.getElementById("lista-comments6")
                element.appendChild(newParagraph)
                element.appendChild(newParagraph2)
                event.preventDefault()
        }
    }
    //Red_Dead_Redemption
    {
        var lista7=["After the long wait, finally Rockstar fans can play one of the finest games this generation. Red Dead Redemption 2, for those with the hardware capable of running it, is the best western gaming experience we could ever have hoped for.", "This low audio bug is ridiculous. Every time you launch the game it sets your windows volume for the game down to 24% so you have to manually tab out and adjust the volume slider back to 100. Seems to have started in December update. Since there's no online forum to complain i'm putting it in this review. I'll fix the review once the bug is fixed."]

        function adicionarProducto7 (){
            var produto = document.getElementById("comments").value
                if(produto.length !== 0) {
                    lista7.push(produto);
                    document.getElementById("comments").value = " ";
                    alert("comments add");
                }else{
                alert("Insira um Produto");}
        }

        function mostrarLista7 (){
            for(let i = 0; i < lista7.length;i++)
            {
                let newParagraph = document.createElement("p")  
                let newParagraph2 = document.createElement("hr")
                let textNode = document.createTextNode(lista7[i])
                newParagraph.appendChild(textNode)        
                newParagraph2.appendChild(textNode)
                let element = document.getElementById("lista-comments7")
                element.appendChild(newParagraph)
                element.appendChild(newParagraph2)
            }
        }
        function mostrarultimo7 (event){
            let newParagraph = document.createElement("p")
            let newParagraph2 = document.createElement("hr")
                let textNode = document.createTextNode(lista7[lista7.length - 1])
                newParagraph.appendChild(textNode)
                newParagraph2.appendChild(textNode)
                let element = document.getElementById("lista-comments7")
                element.appendChild(newParagraph)
                element.appendChild(newParagraph2)
                event.preventDefault()
        }
    }
    //Rocket_league
    {
        var lista8=["Since it got free and they changed the hit box of many cars they ruined the game the ranks arent the same as they used to be,u cant play alone because u will rage with your teamates because they dont know how to play"]

        function adicionarProducto8 (){
            var produto = document.getElementById("comments").value
                if(produto.length !== 0) {
                    lista8.push(produto);
                    document.getElementById("comments").value = " ";
                    alert("comments add");
                }else{
                alert("Insira um Produto");}
        }

        function mostrarLista8 (){
            for(let i = 0; i < lista8.length;i++)
            {
                let newParagraph = document.createElement("p")  
                let newParagraph2 = document.createElement("hr")
                let textNode = document.createTextNode(lista8[i])
                newParagraph.appendChild(textNode)        
                newParagraph2.appendChild(textNode)
                let element = document.getElementById("lista-comments8")
                element.appendChild(newParagraph)
                element.appendChild(newParagraph2)
            }
        }
        function mostrarultimo8 (event){
            let newParagraph = document.createElement("p")
            let newParagraph2 = document.createElement("hr")
                let textNode = document.createTextNode(lista8[lista8.length - 1])
                newParagraph.appendChild(textNode)
                newParagraph2.appendChild(textNode)
                let element = document.getElementById("lista-comments8")
                element.appendChild(newParagraph)
                element.appendChild(newParagraph2)
                event.preventDefault()
        }
    }
    //the last of us
    {
        var lista9=["Otimo Jogo"]

        function adicionarProducto9 (){
            var produto = document.getElementById("comments").value
                if(produto.length !== 0) {
                    lista9.push(produto);
                    document.getElementById("comments").value = " ";
                    alert("comments add");
                }else{
                alert("Insira um Produto");}
        }

        function mostrarLista9 (){
            for(let i = 0; i < lista9.length;i++)
            {
                let newParagraph = document.createElement("p")  
                let newParagraph2 = document.createElement("hr")
                let textNode = document.createTextNode(lista9[i])
                newParagraph.appendChild(textNode)        
                newParagraph2.appendChild(textNode)
                let element = document.getElementById("lista-comments9")
                element.appendChild(newParagraph)
                element.appendChild(newParagraph2)
            }
        }
        function mostrarultimo9 (event){
            let newParagraph = document.createElement("p")
            let newParagraph2 = document.createElement("hr")
                let textNode = document.createTextNode(lista9[lista9.length - 1])
                newParagraph.appendChild(textNode)
                newParagraph2.appendChild(textNode)
                let element = document.getElementById("lista-comments9")
                element.appendChild(newParagraph)
                element.appendChild(newParagraph2)
                event.preventDefault()
        }
    }
}
/*#################_registar_################## */

var utilizador = [""]


function registar (event){
    var produto = document.getElementById("comments").value
    if(produto.length !== 0){
        utilizador.push(produto)
        
        alert("comments add");
        
        event.preventDefault()
    }
    else
        alert("Insira um Produto")
}

function login(event){
    var email = document.getElementById("email").value
    var pass = document.getElementById("pass").value
    if(email.length != 0 && pass.length != 0){
        utilizador.push(utilizador)
        alert("add")
        event.preventDefault()
    }
    else
        alert("Insira um Produto")
}
