import React, { useEffect, useState } from "react";
import './search.scss';
import { bookingApi, getPins } from "../../services/Pins";
import { useNavigate } from "react-router-dom";
// const defaultL = [
//   {
//   city:"Medak",
//   available:38,
//   subcities:[
//     {
//       name:"Shivampet",
//       available:11,
//       fast:{
//         cost:100,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:false,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:true,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"12:00PM-1:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:4,
//             time:"8:00PM-9:00PM",
//             isBooked:false,
//             timeout:21,
//           },
//           {
//             slot:5,
//             time:"9:00PM-10:00PM",
//             isBooked:false,
//             timeout:22,
//           }

//         ]
//       },
//       normal:{
//         cost:75,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:true,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:false,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"11:00AM-12:00PM",
//             isBooked:false,
//             timeout:12,
//           },
//           {
//             slot:4,
//             time:"1:00PM-2:00PM",
//             isBooked:false,
//             timeout:14,
//           },
//           {
//             slot:5,
//             time:"2:00PM-3:00PM",
//             isBooked:false,
//             timeout:15,
//           },
//           {
//             slot:6,
//             time:"8:00PM-9:00PM",
//             isBooked:false,
//             timeout:21,
//           }

//         ]
//       }
//     },
//     {
//       name:"Rathnapur",
//       available:8,
//       fast:{
//         cost:100,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:false,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:true,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"12:00PM-1:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:4,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       },
//       normal:{
//         cost:75,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:true,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:false,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"11:00AM-12:00PM",
//             isBooked:false,
//             timeout:12,
//           },
//           {
//             slot:1,
//             time:"1:00PM-2:00PM",
//             isBooked:false,
//             timeout:14,
//           },
//           {
//             slot:3,
//             time:"2:00PM-3:00PM",
//             isBooked:false,
//             timeout:15,
//           },
//           {
//             slot:4,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       }
//     },
//     {
//       name:"Toopran",
//       available:10,
//       fast:{
//         cost:100,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:false,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:true,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"12:00PM-1:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:4,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       },
//       normal:{
//         cost:75,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:true,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:false,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"11:00AM-12:00PM",
//             isBooked:false,
//             timeout:12,
//           },
//           {
//             slot:4,
//             time:"1:00PM-2:00PM",
//             isBooked:false,
//             timeout:14,
//           },
//           {
//             slot:5,
//             time:"2:00PM-3:00PM",
//             isBooked:false,
//             timeout:15,
//           },
//           {
//             slot:6,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       }
//     },
//     {
//       name:"BVRIT",
//       available:9,
//       fast:{
//         cost:100,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:false,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:true,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"12:00PM-1:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:4,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       },
//       normal:{
//         cost:75,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:true,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:false,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"11:00AM-12:00PM",
//             isBooked:false,
//             timeout:12,
//           },
//           {
//             slot:4,
//             time:"1:00PM-2:00PM",
//             isBooked:false,
//             timeout:14,
//           },
//           {
//             slot:5,
//             time:"2:00PM-3:00PM",
//             isBooked:false,
//             timeout:15,
//           },

//         ]
//       }
//     }
//   ]
// },{
//   city:"Sangareddy",
//   available:53,
//   subcities:[
//     {
//       name:"Hathnoor",
//       available:15,
//       fast:{
//         cost:100,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:false,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:true,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"12:00PM-1:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:4,
//             time:"4:00PM-5:00PM",
//             isBooked:false,
//             timeout:17,
//           },
//           {
//             slot:5,
//             time:"5:00PM-6:00PM",
//             isBooked:false,
//             timeout:18,
//           },
//           {
//             slot:6,
//             time:"6:00PM-7:00PM",
//             isBooked:false,
//             timeout:19,
//           },
//           {
//             slot:7,
//             time:"7:00PM-8:00PM",
//             isBooked:false,
//             timeout:20,
//           }

//         ]
//       },
//       normal:{
//         cost:75,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:true,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:false,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"11:00AM-12:00PM",
//             isBooked:false,
//             timeout:12,
//           },
//           {
//             slot:4,
//             time:"1:00PM-2:00PM",
//             isBooked:false,
//             timeout:14,
//           },
//           {
//             slot:5,
//             time:"4:00PM-5:00PM",
//             isBooked:false,
//             timeout:17,
//           },
//           {
//             slot:6,
//             time:"5:00PM-6:00PM",
//             isBooked:false,
//             timeout:18,
//           },
//           {
//             slot:7,
//             time:"6:00PM-7:00PM",
//             isBooked:false,
//             timeout:19,
//           },
//           {
//             slot:8,
//             time:"7:00PM-8:00PM",
//             isBooked:false,
//             timeout:20,
//           }

//         ]
//       }
//     },
//     {
//       name:"Patancheru",
//       available:18,
//       fast:{
//         cost:100,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:false,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:true,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"12:00PM-1:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:4,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           },
//           {
//             slot:5,
//             time:"4:00PM-5:00PM",
//             isBooked:false,
//             timeout:17,
//           },
//           {
//             slot:6,
//             time:"5:00PM-6:00PM",
//             isBooked:false,
//             timeout:18,
//           },
//           {
//             slot:7,
//             time:"6:00PM-7:00PM",
//             isBooked:false,
//             timeout:19,
//           },
//           {
//             slot:8,
//             time:"7:00PM-8:00PM",
//             isBooked:false,
//             timeout:20,
//           }

//         ]
//       },
//       normal:{
//         cost:75,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:true,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:false,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"11:00AM-12:00PM",
//             isBooked:false,
//             timeout:12,
//           },
//           {
//             slot:4,
//             time:"1:00PM-2:00PM",
//             isBooked:false,
//             timeout:14,
//           },
//           {
//             slot:5,
//             time:"2:00PM-3:00PM",
//             isBooked:false,
//             timeout:15,
//           },
//           {
//             slot:6,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           },
//           {
//             slot:7,
//             time:"4:00PM-5:00PM",
//             isBooked:false,
//             timeout:17,
//           },
//           {
//             slot:8,
//             time:"5:00PM-6:00PM",
//             isBooked:false,
//             timeout:18,
//           },
//           {
//             slot:9,
//             time:"6:00PM-7:00PM",
//             isBooked:false,
//             timeout:19,
//           },
//           {
//             slot:10,
//             time:"7:00PM-8:00PM",
//             isBooked:false,
//             timeout:20,
//           }

//         ]
//       }
//     },
//     {
//       name:"Jogipet",
//       available:10,
//       fast:{
//         cost:100,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:false,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:true,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"12:00PM-1:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:4,
//             time:"5:00PM-6:00PM",
//             isBooked:false,
//             timeout:18,
//           }

//         ]
//       },
//       normal:{
//         cost:75,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:true,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:false,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"11:00AM-12:00PM",
//             isBooked:false,
//             timeout:12,
//           },
//           {
//             slot:4,
//             time:"1:00PM-2:00PM",
//             isBooked:false,
//             timeout:14,
//           },
//           {
//             slot:5,
//             time:"2:00PM-3:00PM",
//             isBooked:false,
//             timeout:15,
//           },
//           {
//             slot:6,
//             time:"6:00PM-7:00PM",
//             isBooked:false,
//             timeout:19,
//           }

//         ]
//       }
//     },
//     {
//       name:"Koudipally",
//       available:10,
//       fast:{
//         cost:100,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:false,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:true,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"12:00PM-1:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:4,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       },
//       normal:{
//         cost:75,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:true,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:false,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"11:00AM-12:00PM",
//             isBooked:false,
//             timeout:12,
//           },
//           {
//             slot:4,
//             time:"1:00PM-2:00PM",
//             isBooked:false,
//             timeout:14,
//           },
//           {
//             slot:5,
//             time:"2:00PM-3:00PM",
//             isBooked:false,
//             timeout:15,
//           },
//           {
//             slot:6,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       }
//     }
//   ]
// },{
//   city:"Narsapur",
//   available:10,
//   subcities:[
//     {
//       name:"Location1",
//       available:9,
//       fast:{
//         cost:100,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:false,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:true,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"12:00PM-1:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       },
//       normal:{
//         cost:75,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:true,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:false,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"11:00AM-12:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"1:00PM-2:00PM",
//             isBooked:false,
//             timeout:16,
//           },
//           {
//             slot:3,
//             time:"2:00PM-3:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       }
//     },
//     {
//       name:"Location1",
//       available:9,
//       fast:{
//         cost:100,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:false,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:true,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"12:00PM-1:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       },
//       normal:{
//         cost:75,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:true,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:false,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"11:00AM-12:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"1:00PM-2:00PM",
//             isBooked:false,
//             timeout:16,
//           },
//           {
//             slot:3,
//             time:"2:00PM-3:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       }
//     },
//     {
//       name:"Location1",
//       available:9,
//       fast:{
//         cost:100,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:false,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:true,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"12:00PM-1:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       },
//       normal:{
//         cost:75,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:true,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:false,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"11:00AM-12:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"1:00PM-2:00PM",
//             isBooked:false,
//             timeout:16,
//           },
//           {
//             slot:3,
//             time:"2:00PM-3:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       }
//     },
//     {
//       name:"Location1",
//       available:9,
//       fast:{
//         cost:100,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:false,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:true,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"12:00PM-1:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       },
//       normal:{
//         cost:75,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:true,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:false,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"11:00AM-12:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"1:00PM-2:00PM",
//             isBooked:false,
//             timeout:16,
//           },
//           {
//             slot:3,
//             time:"2:00PM-3:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       }
//     }
//   ]
// },{
//   city:"Jogipet",
//   available:10,
//   subcities:[
//     {
//       name:"Location1",
//       available:9,
//       fast:{
//         cost:100,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:false,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:true,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"12:00PM-1:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       },
//       normal:{
//         cost:75,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:true,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:false,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"11:00AM-12:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"1:00PM-2:00PM",
//             isBooked:false,
//             timeout:16,
//           },
//           {
//             slot:3,
//             time:"2:00PM-3:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       }
//     },
//     {
//       name:"Location1",
//       available:9,
//       fast:{
//         cost:100,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:false,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:true,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"12:00PM-1:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       },
//       normal:{
//         cost:75,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:true,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:false,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"11:00AM-12:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"1:00PM-2:00PM",
//             isBooked:false,
//             timeout:16,
//           },
//           {
//             slot:3,
//             time:"2:00PM-3:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       }
//     },
//     {
//       name:"Location1",
//       available:9,
//       fast:{
//         cost:100,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:false,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:true,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"12:00PM-1:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       },
//       normal:{
//         cost:75,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:true,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:false,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"11:00AM-12:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"1:00PM-2:00PM",
//             isBooked:false,
//             timeout:16,
//           },
//           {
//             slot:3,
//             time:"2:00PM-3:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       }
//     },
//     {
//       name:"Location1",
//       available:9,
//       fast:{
//         cost:100,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:false,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:true,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"12:00PM-1:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       },
//       normal:{
//         cost:75,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:true,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:false,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"11:00AM-12:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"1:00PM-2:00PM",
//             isBooked:false,
//             timeout:16,
//           },
//           {
//             slot:3,
//             time:"2:00PM-3:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       }
//     }
//   ]
// },{
//   city:"Hyderabad",
//   available:10,
//   subcities:[
//     {
//       name:"Location1",
//       available:9,
//       fast:{
//         cost:100,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:false,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:true,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"12:00PM-1:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       },
//       normal:{
//         cost:75,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:true,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:false,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"11:00AM-12:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"1:00PM-2:00PM",
//             isBooked:false,
//             timeout:16,
//           },
//           {
//             slot:3,
//             time:"2:00PM-3:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       }
//     },
//     {
//       name:"Location1",
//       available:9,
//       fast:{
//         cost:100,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:false,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:true,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"12:00PM-1:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       },
//       normal:{
//         cost:75,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:true,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:false,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"11:00AM-12:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"1:00PM-2:00PM",
//             isBooked:false,
//             timeout:16,
//           },
//           {
//             slot:3,
//             time:"2:00PM-3:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       }
//     },
//     {
//       name:"Location1",
//       available:9,
//       fast:{
//         cost:100,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:false,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:true,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"12:00PM-1:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       },
//       normal:{
//         cost:75,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:true,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:false,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"11:00AM-12:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"1:00PM-2:00PM",
//             isBooked:false,
//             timeout:16,
//           },
//           {
//             slot:3,
//             time:"2:00PM-3:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       }
//     },
//     {
//       name:"Location1",
//       available:9,
//       fast:{
//         cost:100,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:false,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:true,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"12:00PM-1:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       },
//       normal:{
//         cost:75,
//         slots:[
//           {
//             slot:1,
//             time:"9:00AM-10:00AM",
//             isBooked:true,
//             timeout:10,
//           },
//           {
//             slot:2,
//             time:"10:00AM-11:00AM",
//             isBooked:false,
//             timeout:11,
//           },
//           {
//             slot:3,
//             time:"11:00AM-12:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"1:00PM-2:00PM",
//             isBooked:false,
//             timeout:16,
//           },
//           {
//             slot:3,
//             time:"2:00PM-3:00PM",
//             isBooked:false,
//             timeout:13,
//           },
//           {
//             slot:1,
//             time:"3:00PM-4:00PM",
//             isBooked:false,
//             timeout:16,
//           }

//         ]
//       }
//     }
//   ]
// }
// ]
const date = new Date();
const Search =  ()=>{
  const [ search, setSearch ] = useState(null);
  const [ error, setError] = useState('');
  const [ success, setSuccess] = useState('');
  const [ loading,setLoading ] = useState(true);
  const navigate =  useNavigate();
  const [ booking, setBooking] = useState({
    slotId:'',
    city:'',
    subcity:'',
    type:'',
    slot:null,
    time:'',
    cost:null,
    timeout:null,
    email:'chary@gmail.com'
  })
  const bookSlot = async (slot,type,cost)=>{
    setBooking((prevBooking)=>{
      return  {
        ...prevBooking,
        type:type,
        slot:slot.slot,
        time:slot.time,
        timeout:slot.timeout,
        cost:cost
      }
    })
  }
  const [ searchState, setSearchState] =  useState({
    subcities:null,
    subcity:null,
  })
  const updateSearch = (field,value,fstate,data)=>{
    setSearchState((prevSearch)=>{
      const updated = {
        ...booking,
        [field]:value
      }
      setBooking(updated);
      return {
        ...prevSearch,
        [fstate]:data
      }
    })
  }
  const back = ()=>{

    if(booking.slot){
      setBooking((prevBooking)=>{
        return {
          ...prevBooking,
          type:'',
          slot:null,
          time:'',
          cost:null
        }
      })
      return;
    }
    if(booking.subcity){
      setBooking((prevBooking)=>{
        setSearchState((prevSearch)=>{
          return {
            ...prevSearch,
            subcity:null,
          }
        })
        return {
          ...prevBooking,
          subcity:''
        }
      })
      return;
    }

    if(booking.city){
      setBooking((prevBooking)=>{
        setSearchState((prevSearch)=>{
          return {
            ...prevSearch,
            subcities:null,
          }
        })
        return {
          ...prevBooking,
          city:''
        }
      })
    }
  }
  const bookHandle = async(e)=>{
    e.preventDefault();
    setLoading(true);
    const { error, data }  = await bookingApi(booking);
    if(error){
      setError(data.message);
      setTimeout(() => {
        setError('')
      }, 2000);
      return;
    }
    setSuccess('Booked slot  succesfully');
    setTimeout(() => {
      setSuccess('');
      setLoading(false);
      navigate('/history')
    }, 2000);
    return ;
  }
  const fetchCities =  async ()=>{
    const { code, data } = await getPins();
    setLoading(false);
    setSearch((data.available));
  }
  useEffect(()=>{
    fetchCities();
  },[])
  return (
    <div className="searchpage">
      <div className="mainhead">
        {booking.city && booking.city+booking.slotId +">>"}
        {booking.subcity && booking.subcity+">>"}
        {booking.type && booking.type+">>"}
        {booking.time && booking.time}
      </div>
      <div className="middle">
        <span onClick={back}>Back</span>
        <h3>Select City </h3>
        <div className="error">{error}</div>
        <div className="success">{success}</div>
        {loading &&  <div>Loading....</div>}
      </div>
      <div className="content">
        {  booking?.slot &&
          <form className="box" onSubmit={bookHandle}>
            <div className="up">Booking Receipt</div>
            <div className="mid">
              <div className="left">
                <div className="row">
                  <label htmlFor="">City</label>
                  <span>{booking.city}</span>
                </div>
                <div className="row">
                  <label htmlFor="">Subcity</label>
                  <span>{booking.subcity}</span>
                </div>
                <div className="row">
                  <label htmlFor="">Type</label>
                  <span>{booking.type}</span>
                </div>
                <div className="row">
                  <label htmlFor="">Slot</label>
                  <span>Slot no {booking.slot}</span>
                </div>
                <div className="row">
                  <label htmlFor="">Expires</label>
                  <span>{booking.timeout}<sup>th</sup> hour</span>
                </div>
              </div>
              <div className="right">
                <div>Time</div>
                <div><h3>{booking.time}</h3></div>
                <div>Cost</div>
                <div><b><h1>{booking.cost}/-</h1></b></div>
              </div>
            </div>
            <div className="down">
              <input type="button" value="Cancel" onClick={back} />
              <input type="submit" value={loading?"Booking":"Book"} />
            </div>
          </form>

        }
        {
          searchState.subcity && !booking.slot && 
          <div className="slots">
            <div className="slot">
              <div className="head">
                <span className="title">Fast Charging Slots</span>
                <div>
                  <span className="avail">Available</span>
                  <span className="booked">Booked</span>
                <span className="postTimeout">Post Timeout </span>

                </div>
              </div>
              <div className="timings">
                {
                  searchState.subcity.fast.slots.map((each,index)=>(
                    <span key={index}
                    className={each.isBooked?"booked":date.getHours()>=each.timeout-1?"postTimeout":"avail"} 
                    onClick={()=>each.isBooked?null:date.getHours()>=each.timeout-1?null:bookSlot(each,"fast",searchState.subcity.fast.cost)} 
                    >{each.time}
                    </span>
                  ))
                }
              </div>
            </div>
            <div className="slot">
            <div className="head">
              <span className="title">Normal Charging Slots</span>
              <div>
                <span className="avail">Available</span>
                <span className="booked">Booked</span>
                <span className="postTimeout">Post Timeout</span>
              </div>
            </div>
            <div className="timings">
              {
                
                searchState.subcity.normal.slots.map((each,index)=>(
                  <span key={index}
                  className={each.isBooked?"booked":date.getHours()>=each.timeout-1?"postTimeout":"avail"} 
                  onClick={()=>each.isBooked?null:date.getHours()>=each.timeout-1?null:bookSlot(each,"normal",searchState.subcity.normal.cost)} 
                  >{each.time}
                  </span>
                ))
              }
            </div>
          </div>
        </div>
        }
        {
          booking.city && !booking.subcity && searchState.subcities && searchState.subcities.map((each,index)=>(
            <div className="each" key={index} onClick={()=>updateSearch('subcity',each.name,"subcity",each)}>
              <h2>{each.name}</h2>
              <span>Available <b>{each.available}</b></span>
              <div className="row">
                <span>Fast Cost: <b>{each.fast.cost}</b></span>
                <span>Normal Cost: <b>{each.normal.cost}</b></span>
              </div>
            </div>
          ))
        }
      </div>
      { 
        !booking?.city &&
        <div className="content">
        {
          search && search.map((each,index)=>(
            <div className="each" key={index} onClick={()=>updateSearch("city",each.city,"subcities",each.subcities)}>
              <h2>{each.city}</h2>
              <div className="row">
                <span>Available <b>{each.available}</b></span>
                <span>Subcities <b>{each.subcities.length}</b></span>
              </div>
            </div>
          ))
        }
        </div>
      }
    </div>
  )
}

export default Search;