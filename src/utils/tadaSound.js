import { Audio } from 'expo-av'

// Assets
import TadaSound from '@assets/tada-sound.mp3'

const soundObject = new Audio.Sound()

const loadSound = async () =>{
  try{
    const soundStatus = await soundObject.getStatusAsync()
    if(!soundStatus.isLoaded){
      await soundObject.loadAsync(TadaSound)
    }
  }catch(error){
    console.log(error)
  }
}

const playSound = async ()=>{
  try {
    //const soundStatus = await soundObject.getStatusAsync()
    await soundObject.playAsync()
  } catch (error) {
    console.log(error)
    // error but meh, just log it
  }
}

export default {
  SoundObject : soundObject,
  loadSound,
  playSound
}
