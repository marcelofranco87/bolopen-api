import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const games = [
  {
    "gameTime": "2022-12-03T15:00:00Z",
    "homeTeam": "hol",
    "awayTeam": "eua",
    "groupLetter": "i",
    
  },
  {
    "gameTime": "2022-12-03T19:00:00Z",
    "homeTeam": "arg",
    "awayTeam": "aus",
    "groupLetter": "i",
    
  },
  {
    "gameTime": "2022-12-04T15:00:00Z",
    "homeTeam": "fra",
    "awayTeam": "pol",
    "groupLetter": "i",
    
  },
  {
    "gameTime": "2022-12-04T19:00:00Z",
    "homeTeam": "ing",
    "awayTeam": "sen",
    "groupLetter": "i",
    
  },
  {
    "gameTime": "2022-12-05T15:00:00Z",
    "homeTeam": "jap",
    "awayTeam": "cro",
    "groupLetter": "i",
    
  },
  {
    "gameTime": "2022-12-05T19:00:00Z",
    "homeTeam": "bra",
    "awayTeam": "cor",
    "groupLetter": "i",
    
  },
  {
    "gameTime": "2022-12-06T15:00:00Z",
    "homeTeam": "mar",
    "awayTeam": "esp",
    "groupLetter": "i",
    
  },
  {
    "gameTime": "2022-12-06T19:00:00Z",
    "homeTeam": "por",
    "awayTeam": "sui",
    "groupLetter": "i",
    
  },
  {
    "gameTime": "2022-12-09T15:00:00Z",
    "homeTeam": "vo5",
    "awayTeam": "vo6",
    "groupLetter": "j",
    
  },
  {
    "gameTime": "2022-12-09T19:00:00Z",
    "homeTeam": "vo1",
    "awayTeam": "vo2",
    "groupLetter": "j",
    
  },
  {
    "gameTime": "2022-12-10T15:00:00Z",
    "homeTeam": "vo3",
    "awayTeam": "vo4",
    "groupLetter": "j",
    
  },
  {
    "gameTime": "2022-12-10T19:00:00Z",
    "homeTeam": "vo7",
    "awayTeam": "vo8",
    "groupLetter": "j",    
  },
  // {
  //   "gameTime": "2022-12-13T19:00:00Z",
  //   "homeTeam": "vq1",
  //   "awayTeam": "vq2",
  //   "groupLetter": "k",    
  // },
  // {
  //   "gameTime": "2022-12-14T19:00:00Z",
  //   "homeTeam": "vq3",
  //   "awayTeam": "vq4",
  //   "groupLetter": "k",    
  // },
  // {
  //   "gameTime": "2022-12-17T15:00:00Z",
  //   "homeTeam": "ps1",
  //   "awayTeam": "ps2",
  //   "groupLetter": "l",
  // },
  // {
  //   "gameTime": "2022-12-18T15:00:00Z",
  //   "homeTeam": "vs1",
  //   "awayTeam": "vs2",
  //   "groupLetter": "m",    
  // },
]

// const games = [
//     {
//       "gameTime": "2022-11-20T16:00:00Z",
//       "homeTeam": "cat",
//       "awayTeam": "equ",
//       "groupLetter": "a",
      
//     },
//     {
//       "gameTime": "2022-11-21T13:00:00Z",
//       "homeTeam": "ing",
//       "awayTeam": "ira",
//       "groupLetter": "b",
      
//     },
//     {
//       "gameTime": "2022-11-21T16:00:00Z",
//       "homeTeam": "sen",
//       "awayTeam": "hol",
//       "groupLetter": "a",
      
//     },
//     {
//       "gameTime": "2022-11-21T19:00:00Z",
//       "homeTeam": "eua",
//       "awayTeam": "gal",
//       "groupLetter": "b",
      
//     },
//     {
//       "gameTime": "2022-11-22T10:00:00Z",
//       "homeTeam": "arg",
//       "awayTeam": "ara",
//       "groupLetter": "c",
      
//     },
//     {
//       "gameTime": "2022-11-22T13:00:00Z",
//       "homeTeam": "din",
//       "awayTeam": "tun",
//       "groupLetter": "d",
      
//     },
//     {
//       "gameTime": "2022-11-22T16:00:00Z",
//       "homeTeam": "mex",
//       "awayTeam": "pol",
//       "groupLetter": "c",
      
//     },
//     {
//       "gameTime": "2022-11-22T19:00:00Z",
//       "homeTeam": "fra",
//       "awayTeam": "aus",
//       "groupLetter": "d",
      
//     },
//     {
//       "gameTime": "2022-11-23T10:00:00Z",
//       "homeTeam": "mar",
//       "awayTeam": "cro",
//       "groupLetter": "f",
      
//     },
//     {
//       "gameTime": "2022-11-23T13:00:00Z",
//       "homeTeam": "ale",
//       "awayTeam": "jap",
//       "groupLetter": "e",
      
//     },
//     {
//       "gameTime": "2022-11-23T16:00:00Z",
//       "homeTeam": "esp",
//       "awayTeam": "cos",
//       "groupLetter": "e",
      
//     },
//     {
//       "gameTime": "2022-11-23T19:00:00Z",
//       "homeTeam": "bel",
//       "awayTeam": "can",
//       "groupLetter": "f",
      
//     },
//     {
//       "gameTime": "2022-11-24T10:00:00Z",
//       "homeTeam": "sui",
//       "awayTeam": "cam",
//       "groupLetter": "g",
      
//     },
//     {
//       "gameTime": "2022-11-24T13:00:00Z",
//       "homeTeam": "uru",
//       "awayTeam": "cor",
//       "groupLetter": "h",
      
//     },
//     {
//       "gameTime": "2022-11-24T16:00:00Z",
//       "homeTeam": "por",
//       "awayTeam": "gan",
//       "groupLetter": "h",
      
//     },
//     {
//       "gameTime": "2022-11-24T19:00:00Z",
//       "homeTeam": "bra",
//       "awayTeam": "ser",
//       "groupLetter": "g",
      
//     },
//     {
//       "gameTime": "2022-11-25T10:00:00Z",
//       "homeTeam": "gal",
//       "awayTeam": "ira",
//       "groupLetter": "b",
      
//     },
//     {
  
//       "gameTime": "2022-11-25T13:00:00Z",
//       "homeTeam": "cat",
//       "awayTeam": "sen",
//       "groupLetter": "a",
      
//     },
//     {
//       "gameTime": "2022-11-25T16:00:00Z",
//       "homeTeam": "hol",
//       "awayTeam": "equ",
//       "groupLetter": "a",
      
//     },
//     {
//       "gameTime": "2022-11-25T19:00:00Z",
//       "homeTeam": "ing",
//       "awayTeam": "eua",
//       "groupLetter": "b",
      
//     },
//     {
//       "gameTime": "2022-11-26T10:00:00Z",
//       "homeTeam": "tun",
//       "awayTeam": "aus",
//       "groupLetter": "d",
      
//     },
//     {
  
//       "gameTime": "2022-11-26T13:00:00Z",
//       "homeTeam": "pol",
//       "awayTeam": "ara",
//       "groupLetter": "c",
      
//     },
//     {
//       "gameTime": "2022-11-26T16:00:00Z",
//       "homeTeam": "fra",
//       "awayTeam": "din",
//       "groupLetter": "d",
      
//     },
//     {
//       "gameTime": "2022-11-26T19:00:00Z",
//       "homeTeam": "arg",
//       "awayTeam": "mex",
//       "groupLetter": "c",
      
//     },
//     {
//       "gameTime": "2022-11-27T10:00:00Z",
//       "homeTeam": "jap",
//       "awayTeam": "cos",
//       "groupLetter": "e",
      
//     },
//     {
//       "gameTime": "2022-11-27T13:00:00Z",
//       "homeTeam": "bel",
//       "awayTeam": "mar",
//       "groupLetter": "f",
      
//     },
//     {
//       "gameTime": "2022-11-27T16:00:00Z",
//       "homeTeam": "cro",
//       "awayTeam": "can",
//       "groupLetter": "f",
      
//     },
//     {
//       "gameTime": "2022-11-27T19:00:00Z",
//       "homeTeam": "esp",
//       "awayTeam": "ale",
//       "groupLetter": "e",
      
//     },
//     {
//       "gameTime": "2022-11-28T10:00:00Z",
//       "homeTeam": "cam",
//       "awayTeam": "ser",
//       "groupLetter": "g",
      
//     },
//     {
//       "gameTime": "2022-11-28T13:00:00Z",
//       "homeTeam": "cor",
//       "awayTeam": "gan",
//       "groupLetter": "h",
      
//     },
//     {
//       "gameTime": "2022-11-28T16:00:00Z",
//       "homeTeam": "bra",
//       "awayTeam": "sui",
//       "groupLetter": "g",
      
//     },
//     {
//       "gameTime": "2022-11-28T19:00:00Z",
//       "homeTeam": "por",
//       "awayTeam": "uru",
//       "groupLetter": "h",
      
//     },
//     {
//       "gameTime": "2022-11-29T15:00:00Z",
//       "homeTeam": "equ",
//       "awayTeam": "sen",
//       "groupLetter": "a",
      
//     },
//     {
//       "gameTime": "2022-11-29T15:00:00Z",
//       "homeTeam": "hol",
//       "awayTeam": "cat",
//       "groupLetter": "a",
      
//     },
//     {
//       "gameTime": "2022-11-29T19:00:00Z",
//       "homeTeam": "gal",
//       "awayTeam": "ing",
//       "groupLetter": "b",
      
//     },
//     {
//       "gameTime": "2022-11-29T19:00:00Z",
//       "homeTeam": "ira",
//       "awayTeam": "eua",
//       "groupLetter": "b",
      
//     },
//     {
//       "gameTime": "2022-11-30T15:00:00Z",
//       "homeTeam": "aus",
//       "awayTeam": "din",
//       "groupLetter": "d",
      
//     },
//     {
//       "gameTime": "2022-11-30T15:00:00Z",
//       "homeTeam": "tun",
//       "awayTeam": "fra",
//       "groupLetter": "d",
      
//     },
//     {
//       "gameTime": "2022-11-30T19:00:00Z",
//       "homeTeam": "pol",
//       "awayTeam": "arg",
//       "groupLetter": "c",
      
//     },
//     {
//       "gameTime": "2022-11-30T19:00:00Z",
//       "homeTeam": "ara",
//       "awayTeam": "mex",
//       "groupLetter": "c",
      
//     },
//     {
//       "gameTime": "2022-12-01T15:00:00Z",
//       "homeTeam": "cro",
//       "awayTeam": "bel",
//       "groupLetter": "f",
      
//     },
//     {
//       "gameTime": "2022-12-01T15:00:00Z",
//       "homeTeam": "can",
//       "awayTeam": "mar",
//       "groupLetter": "f",
      
//     },
//     {
//       "gameTime": "2022-12-01T19:00:00Z",
//       "homeTeam": "jap",
//       "awayTeam": "esp",
//       "groupLetter": "e",
      
//     },
//     {
//       "gameTime": "2022-12-01T19:00:00Z",
//       "homeTeam": "cos",
//       "awayTeam": "ale",
//       "groupLetter": "e",
      
//     },
//     {
//       "gameTime": "2022-12-02T15:00:00Z",
//       "homeTeam": "gan",
//       "awayTeam": "uru",
//       "groupLetter": "h",
      
//     },
//     {
//       "gameTime": "2022-12-02T15:00:00Z",
//       "homeTeam": "cor",
//       "awayTeam": "por",
//       "groupLetter": "h",
      
//     },
//     {
//       "gameTime": "2022-12-02T19:00:00Z",
//       "homeTeam": "ser",
//       "awayTeam": "sui",
//       "groupLetter": "g",
      
//     },
//     {
//       "gameTime": "2022-12-02T19:00:00Z",
//       "homeTeam": "cam",
//       "awayTeam": "bra",
//       "groupLetter": "g",
      
//     }
//   ]

const main = () =>
    prisma.game.createMany({
        data: games
    })    


main()
    .then(console.log)
    .catch(console.log)