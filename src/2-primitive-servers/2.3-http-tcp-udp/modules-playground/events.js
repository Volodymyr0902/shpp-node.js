// events

import { Logger } from "./logger.js";
const logger = new Logger();

// add an event listener
logger.on("myevent", (...args) => {
  console.log(args)
})

logger.removeAllListeners()

logger.log("hello")
