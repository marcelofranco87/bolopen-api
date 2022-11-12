import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const games = [
    {
      "gameTime": "2022-11-20T16:00:00Z",
      "homeTeam": "cat",
      "awayTeam": "equ",
      "group": "a"
    },
    {
      "gameTime": "2022-11-21T13:00:00Z",
      "homeTeam": "ing",
      "awayTeam": "ira",
      "group": "b"
    },
    {
      "gameTime": "2022-11-21T16:00:00Z",
      "homeTeam": "sen",
      "awayTeam": "hol",
      "group": "a"
    },
    {
      "gameTime": "2022-11-21T19:00:00Z",
      "homeTeam": "eua",
      "awayTeam": "gal",
      "group": "b"
    },
    {
      "gameTime": "2022-11-22T10:00:00Z",
      "homeTeam": "arg",
      "awayTeam": "ara",
      "group": "c"
    },
    {
      "gameTime": "2022-11-22T13:00:00Z",
      "homeTeam": "din",
      "awayTeam": "tun",
      "group": "d"
    },
    {
      "gameTime": "2022-11-22T16:00:00Z",
      "homeTeam": "mex",
      "awayTeam": "pol",
      "group": "c"
    },
    {
      "gameTime": "2022-11-22T19:00:00Z",
      "homeTeam": "fra",
      "awayTeam": "aus",
      "group": "d"
    },
    {
      "gameTime": "2022-11-23T10:00:00Z",
      "homeTeam": "mar",
      "awayTeam": "cro",
      "group": "f"
    },
    {
      "gameTime": "2022-11-23T13:00:00Z",
      "homeTeam": "ale",
      "awayTeam": "jap",
      "group": "e"
    },
    {
      "gameTime": "2022-11-23T16:00:00Z",
      "homeTeam": "esp",
      "awayTeam": "cos",
      "group": "e"
    },
    {
      "gameTime": "2022-11-23T19:00:00Z",
      "homeTeam": "bel",
      "awayTeam": "can",
      "group": "f"
    },
    {
      "gameTime": "2022-11-24T10:00:00Z",
      "homeTeam": "sui",
      "awayTeam": "cam",
      "group": "g"
    },
    {
      "gameTime": "2022-11-24T13:00:00Z",
      "homeTeam": "uru",
      "awayTeam": "cor",
      "group": "h"
    },
    {
      "gameTime": "2022-11-24T16:00:00Z",
      "homeTeam": "por",
      "awayTeam": "gan",
      "group": "h"
    },
    {
      "gameTime": "2022-11-24T19:00:00Z",
      "homeTeam": "bra",
      "awayTeam": "ser",
      "group": "g"
    },
    {
      "gameTime": "2022-11-25T10:00:00Z",
      "homeTeam": "gal",
      "awayTeam": "ira",
      "group": "b"
    },
    {
  
      "gameTime": "2022-11-25T13:00:00Z",
      "homeTeam": "cat",
      "awayTeam": "sen",
      "group": "a"
    },
    {
      "gameTime": "2022-11-25T16:00:00Z",
      "homeTeam": "hol",
      "awayTeam": "equ",
      "group": "a"
    },
    {
      "gameTime": "2022-11-25T19:00:00Z",
      "homeTeam": "ing",
      "awayTeam": "eua",
      "group": "b"
    },
    {
      "gameTime": "2022-11-26T10:00:00Z",
      "homeTeam": "tun",
      "awayTeam": "aus",
      "group": "d"
    },
    {
  
      "gameTime": "2022-11-26T13:00:00Z",
      "homeTeam": "pol",
      "awayTeam": "ara",
      "group": "c"
    },
    {
      "gameTime": "2022-11-26T16:00:00Z",
      "homeTeam": "fra",
      "awayTeam": "din",
      "group": "d"
    },
    {
      "gameTime": "2022-11-26T19:00:00Z",
      "homeTeam": "arg",
      "awayTeam": "mex",
      "group": "c"
    },
    {
      "gameTime": "2022-11-27T10:00:00Z",
      "homeTeam": "jap",
      "awayTeam": "cos",
      "group": "e"
    },
    {
      "gameTime": "2022-11-27T13:00:00Z",
      "homeTeam": "bel",
      "awayTeam": "mar",
      "group": "f"
    },
    {
      "gameTime": "2022-11-27T16:00:00Z",
      "homeTeam": "cro",
      "awayTeam": "can",
      "group": "f"
    },
    {
      "gameTime": "2022-11-27T19:00:00Z",
      "homeTeam": "esp",
      "awayTeam": "ale",
      "group": "e"
    },
    {
      "gameTime": "2022-11-28T10:00:00Z",
      "homeTeam": "cam",
      "awayTeam": "ser",
      "group": "g"
    },
    {
      "gameTime": "2022-11-28T13:00:00Z",
      "homeTeam": "cor",
      "awayTeam": "gan",
      "group": "h"
    },
    {
      "gameTime": "2022-11-28T16:00:00Z",
      "homeTeam": "bra",
      "awayTeam": "sui",
      "group": "g"
    },
    {
      "gameTime": "2022-11-28T19:00:00Z",
      "homeTeam": "por",
      "awayTeam": "uru",
      "group": "h"
    },
    {
      "gameTime": "2022-11-29T15:00:00Z",
      "homeTeam": "equ",
      "awayTeam": "sen",
      "group": "a"
    },
    {
      "gameTime": "2022-11-29T15:00:00Z",
      "homeTeam": "hol",
      "awayTeam": "cat",
      "group": "a"
    },
    {
      "gameTime": "2022-11-29T19:00:00Z",
      "homeTeam": "gal",
      "awayTeam": "ing",
      "group": "b"
    },
    {
      "gameTime": "2022-11-29T19:00:00Z",
      "homeTeam": "ira",
      "awayTeam": "eua",
      "group": "b"
    },
    {
      "gameTime": "2022-11-30T15:00:00Z",
      "homeTeam": "aus",
      "awayTeam": "din",
      "group": "d"
    },
    {
      "gameTime": "2022-11-30T15:00:00Z",
      "homeTeam": "tun",
      "awayTeam": "fra",
      "group": "d"
    },
    {
      "gameTime": "2022-11-30T19:00:00Z",
      "homeTeam": "pol",
      "awayTeam": "arg",
      "group": "c"
    },
    {
      "gameTime": "2022-11-30T19:00:00Z",
      "homeTeam": "ara",
      "awayTeam": "mex",
      "group": "c"
    },
    {
      "gameTime": "2022-12-01T15:00:00Z",
      "homeTeam": "cro",
      "awayTeam": "bel",
      "group": "f"
    },
    {
      "gameTime": "2022-12-01T15:00:00Z",
      "homeTeam": "can",
      "awayTeam": "mar",
      "group": "f"
    },
    {
      "gameTime": "2022-12-01T19:00:00Z",
      "homeTeam": "jap",
      "awayTeam": "esp",
      "group": "e"
    },
    {
      "gameTime": "2022-12-01T19:00:00Z",
      "homeTeam": "cos",
      "awayTeam": "ale",
      "group": "e"
    },
    {
      "gameTime": "2022-12-02T15:00:00Z",
      "homeTeam": "gan",
      "awayTeam": "uru",
      "group": "h"
    },
    {
      "gameTime": "2022-12-02T15:00:00Z",
      "homeTeam": "cor",
      "awayTeam": "por",
      "group": "h"
    },
    {
      "gameTime": "2022-12-02T19:00:00Z",
      "homeTeam": "ser",
      "awayTeam": "sui",
      "group": "g"
    },
    {
      "gameTime": "2022-12-02T19:00:00Z",
      "homeTeam": "cam",
      "awayTeam": "bra",
      "group": "g"
    }
  ]

const main = () =>
    prisma.game.createMany({
        data: games
    })    


main()
    .then(console.log)
    .catch(console.log)