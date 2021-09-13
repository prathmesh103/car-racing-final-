class Player {
  constructor(){
    this.rank=null
    this.name=null
    this.distance=0
    this.index=null
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance

    });
  }

  static getPlayerInfo(){

    var playerInfoRef=database.ref("players").on("value",(data)=>{
      allPlayers=data.val()
    })
  }
  getCarsAtEnd(){
    database.ref("carsAtEnd").on("value",(data)=>{
   this.rank=data.val()
    })
    }
    static updateCarsAtEnd(rank){
database.ref("/").update({

  carsAtEnd:rank,
})


    } 
}
