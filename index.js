import readline from "readline"

/* BODY */

export default async function commandify (functions, message){

  let defaultMessage = functions => functions.map(fun => fun.name)
    .map((functionName,i) => `[${i}]: Run ${functionName}`)
    .join('\n')+ 
    `\nChoose one option, wisely: #`
  message = message || defaultMessage(functions)

  let whattodo = async (message, callback) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question(message, async (answer) => {
      rl.close();
      await callback(answer)
    });
  }

  async function tryCatchTryAgain (fun) {
    try{
        await fun()
    }catch (error) {
        console.log(error)
        try{
            console.log(`Execute ${fun.name} again after failure`)
            await fun()
        }catch (error){
            console.log(error)
        }
    }
  }

  let executeoption = async (option) => {
    option = Number(option)
    if(option < 0){
      console.log(`Error, ${option} < 0`)
    }else if(option < functions.length){
      await tryCatchTryAgain(functions[option])
    }else if(option > (functions.length-1)){
      console.log(`Error, ${option} > ${functions.length-1}`)
    }else{
      console.log(`Error, invalid argument`)
    }
  }

  if(process.argv.length==3){
      const option = process.argv[2] // e.g., npm start 15
      const optionNum = Number(option)
      if(!isNaN(optionNum)){
        await executeoption(optionNum)
      }else{
        await whattodo(message, executeoption)
      }
  }else(
    await whattodo(message, executeoption)
  )
}