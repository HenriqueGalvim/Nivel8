    
let list = document.querySelector(".lista")
  let list2 = document.querySelector(".lista2")

  let botao= document.querySelector("#botao")
  let botao2= document.querySelector("#botao2")

botao.addEventListener("click", ()=> {
 	list.style.display="block"
 	botao.style.display="none"
 })

 botao2.addEventListener("click", ()=> {
 	list.style.display="none"
 	list2.style.display="block"
 	botao2.style.display="none"
 })
let res= document.querySelector("#res")
let msg1=document.querySelector(".msg1")
let msg2=document.querySelector(".msg2")
let msg3=document.querySelector(".msg3")
let msg4=document.querySelector(".msg4")
let msg5=document.querySelector(".msg5")
let msg6=document.querySelector(".msg6")

	msg1.addEventListener("click",()=>{
		res.innerHTML= "<h3>Duda</h3> <br>Eu conheci a herika no 9° ano e meio q rolou uma treta do nada pq elas tavam falando q eu queria me aproximar do grupinho pq eu gostava do thomas,eu não me sentia mto bem em relação a isso mas ok, aí ne ok, a gente ficou do mesmo jeito kkkkjjkkkk,aí tu querendo me bater pq eu não parava de cantar o rei leão .No final do ano a gente ate q ficou mais próximas,com o passar do tempo isso permaneceu, com o tempo isso foi passando, você me dava conselhos e tudo,so q no final de 2019 a gente se aproximou bastante, e eu sempre ia na tua casa , e a gente ficou mto amigas,ate q do nada em 2020 ela arruma um crushkkkkkkkk,a gente só falava nisso, e é p ela q eu conto babados, muito mesmo, fofoco de madrugada, aconselho ,enfim ,ajudo nos esquemas e por aí vai kkkkkkkkkk, eu amo muito e quero sempre ter a amizade dela, ela é como uma irmã mais velha p mim."
	})

	msg2.addEventListener("click",()=>{
		res.innerHTML= "<h3> Francisco </h3> <br> Eu sou teu amigo há mais de 6 anos, e por todos esses anos sempre se mostrou uma pessoa íncrivel, mesmo nos momentos mais dificeis tu sempre tá lá, disposta a nos ajudar, a nos acompanha."
	})

	msg3.addEventListener("click",()=>{
		res.innerHTML= "<h3> Galvim </h3> <br>Bom, lembro me de te conhecer no 8° ano, não éramos muito próximos, esse foi bem esquecido mas eu lembro de uma vez que tu me chamou pra brincar de não sei o que eaí eu brinquei, e quando vi as meninas começaram a chegar e querer brincar, isso durou por mais alguns minutos até pararmos, esse foi o único contato que tivemos naquele ano. <br><br> No 9° eu só lembro de interagir contigo no tempos de ed.física, onde vivíamos jogando vôlei, tu era muito boa norssa, aprendi a sacar vendo tu jogando, não é atoa que eu manjo dos saque né, enfim, não nos falamos muito, e enfim veio o If, acho que tu foi a ultima do pessoal que eu me aproximei,  só viemos a se falar melhor  vish depois de muito tempo já,  a maioria das nossas conversas envolvia anime e até hoje né, foi tu que me apresentou  kimetsu, e bom, passando um pouco o tempo e chegando a atualidade. <br> <br>Tu já me salvou varias vezes, digo em relação a me dar carona, até perdi a conta já, e bom, tu é a irmãzona do grupo né,  quem vê até pensa  que é séria, não pode falar um  A que já ri, bom, tu é muito legal e apesar de não sermos tão tão tão tão próximos como somos com os outros, eu  tenho um enorme carinho por ti e te acho incrível, feliz aniversário mesmo que seja atrasado, isso é um presente de todo mundo pra ti, eu só fiz a mágica, te aminho, qualquer coisa sabe que pode contar comigo sempre, ah é né, quando que boruto fica bom mesmo?????????? "
	})

	msg4.addEventListener("click",()=>{
		res.innerHTML= "<h3> Thomas </h3> <br>Eu não sabia ao certo como iniciar esse texto, já que como é possível contar mais de 5 anos em poucos caracteres? Enfim, tantas experiências passamos juntos nesse tempo, boas e ruins, tantos acertos e erros, porém sempre um do lado do outro e de alguma forma se entendendo seguindo nessa vida louca e inconstante, eu não sei me expressar com palavras, mas sei que você é uma pessoa em que posso sempre confiar, sempre tentando entender nossas dores e confusões, de verdade você é uma pessoa incrível e sei que vai alcançar o mundo com sua determinação...eu espero que possamos sempre te ter próximo...seja pessoalmente ou mesmo jogando algo e rindo como sempre, não falo muito isso para meus amigos, mas eu amo a nossa amizade e amo vcs."
	})

	msg5.addEventListener("click",()=>{
		res.innerHTML= "<h3> Thais </h3> <br> Eu nem sei o que falar"
	})

	msg6.addEventListener("click",()=>{
		res.innerHTML= "<h3> Backyardigans </h3> <br>Meu nome é Tyrone<br>Eu sou a Uniqua<br>Eu sou a Tasha<br>E meu nome é Austin<br>E nós somos<br>Seus amiguinhos os Backyardigans <br>Juntos nós somos <br>Os Backyardigans <br>Onde é nosso lugar <br>Nós gostamos de cantar <br>E gostamos de dançar <br>Temos o mundo inteiro no nosso quintal <br>Sempre encontrando coisas novas pra brincar<br>Todos os dias nós vamos contar com os amigos<br>Os Backyardigans <br>"
	})