import EventEmitter from "events";
 
export class Logger extends EventEmitter {
  log = () => {
    this.emit("myevent", {id: 3324, name: "Sean"})
  }
}