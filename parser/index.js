
import { Executors } from "node-threadpool";
const {Executors } = require("node-threadpool")
 
const pool = Executors.newFixedThreadPool(1);
const result = pool.submit(async () => "hello world");
 
console.log(await result);


// 'use strict'

// const { Worker } = require('worker_threads')

// /**
// * Use a worker via Worker Threads module to make intensive CPU task
// * @param filepath string relative path to the file containing intensive CPU task code
// * @return {Promise(mixed)} a promise that contains result from intensive CPU task
// */

// function _useWorker (filepath, argument) {

//   return new Promise((resolve, reject) => {

//     const worker = new Worker(filepath, {argv: [argument]})
//     worker.on('online', () => { console.log('Launching intensive CPU task') })

//     worker.on('message', messageFromWorker => {
//       console.log(messageFromWorker)
//       return resolve
//     })

//     worker.on('error', reject)
//     worker.on('exit', code => {

//       if (code !== 0) {
//         reject(new Error(`Worker stopped with exit code ${code}`))
//       }

//     })
//   })
// }

// /**
// * Use main thread while making intensive CPU task on worker
// */

// async function main () {

//   // this log will happen every second during and after the intensive task, main thread is never blocked

//   setInterval(() => { console.log('Event loop on main thread is not blocked right now') }, 1000)
//   await _useWorker('./worker.js', process.argv[3])
// }

// main()