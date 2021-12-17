function CountDown(value){
  if(value <= 0){
    console.log("Finished")
    return
  }
  console.log(value)
  CountDown(value-1)
}

CountDown(5)
