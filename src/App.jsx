import React from "react"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: "heater1",
          src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
          keydown: "Q",
          name: "Heater 1"
        },
        {
          id: "heater2",
          src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
          keydown: "W",
          name: "Heater 2"
        },
        {
          id: "heater3",
          src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
          keydown: "E",
          name: "Heater 3"
        },
        {
          id: "heater4",
          src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
          keydown: "A",
          name: "Heater 4"
        },
        {
          id: "clap",
          src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
          keydown: "S",
          name: "Clap"
        },
        {
          id: "openHH",
          src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
          keydown: "D",
          name: "Open HH"
        },
        {
          id: "kickNHat",
          src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
          keydown: "Z",
          name: "Kick n' Hat"
        },
        {
          id: "kick",
          src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
          keydown: "X",
          name: "Kick"
        },
        {
          id: "closedHH",
          src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
          keydown: "C",
          name: "Closed HH"
        }
      ]
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }

  componentDidUpdate() {
    
  }

  handleKeyPress(e) {
    const keyPressed = e.key.toUpperCase();
    try {
      const elem = document.getElementById(String(keyPressed));
      this.playSound(elem);
      const item = this.state.data.filter((item) => item.keydown === keyPressed);
      this.handleDisplay(item[0].name);
    } catch (error) {
      
    }
  }

  handleClick(id) {
    const elem = document.getElementById(id.innerText);
    const item = this.state.data.filter((item) => item.keydown === id.innerText);
    this.handleDisplay(item[0].name);
    this.playSound(elem);
  } 

  playSound(e) {
    e.currentTime = 0;
    e.play();
  }

  handleDisplay(e) {
    const elem = document.getElementById("display");
    elem.innerText = e;
  }


  render() {
    return(
      <div id="drum-machine">
        <Display />
        {this.state.data.map((item) => {
          return <DrumPad
          key={item.id}
          id={item.id} 
          innerText={item.keydown} 
          src={item.src}
          clickHandler={this.handleClick}/>
        })}
      </div>
    )
  }
}

const Display = (props) => {
  return(
    <div id="display">

    </div>
  )
}

const DrumPad = ({id, innerText, src, clickHandler}) => {
  return(
    <button className ="drum-pad" id={id} onClick={() => clickHandler({innerText})}>
      <audio id={innerText} className="clip" src={src}></audio>
      {innerText}
    </button>
  )
}

export default App