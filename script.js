let cards=[
    {
        image:"https://i.pinimg.com/564x/4d/de/2f/4dde2f52c27d691095f1a02bf986e229.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/564x/4d/de/2f/4dde2f52c27d691095f1a02bf986e229.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/564x/30/b9/b9/30b9b913e1aadbd291e469ed0e9c3128.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/564x/30/b9/b9/30b9b913e1aadbd291e469ed0e9c3128.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/564x/77/3c/8f/773c8f6bc381ec5c6222e34344b9627a.jpg",
        value:3,
        status:"closed"

    },
    {
        image:"https://i.pinimg.com/564x/77/3c/8f/773c8f6bc381ec5c6222e34344b9627a.jpg",
        value:3,
        status:"closed"

    },
    {
        image:"https://i.pinimg.com/564x/c9/40/2a/c9402a5e8237d1e5b2efb84396133e47.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/564x/c9/40/2a/c9402a5e8237d1e5b2efb84396133e47.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/564x/1f/65/34/1f65342df171f7f44e79a0425022e09b.jpg",
        value:5,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/564x/1f/65/34/1f65342df171f7f44e79a0425022e09b.jpg",
        value:5,
        status:"closed"
    },

  
]




// durnsten shuffling alogorithm 

let temp;
for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

let cardsCopy=cards;



function displayCards(data){

    let cardsString="";

    

    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})">
                </div>
            </div>
        `;
    });


    document.getElementById('cards').innerHTML=cardsString;

}


displayCards(cards);






let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){

    console.log(cards);

    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;

            // reste after one guess 
            val1=null;
            val2=null;
            cardCount=1;

        }
        else{

            alert("game over");
            location.reload();

        }

        
    }

    displayCards(cards);

}













