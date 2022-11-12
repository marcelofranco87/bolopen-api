import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const games = [
    {
      "gameTime": "2022-11-20T16:00:00Z",
      "homeTeam": "cat",
      "awayTeam": "equ",
      "groupLetter": "a",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-21T13:00:00Z",
      "homeTeam": "ing",
      "awayTeam": "ira",
      "groupLetter": "b",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-21T16:00:00Z",
      "homeTeam": "sen",
      "awayTeam": "hol",
      "groupLetter": "a",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-21T19:00:00Z",
      "homeTeam": "eua",
      "awayTeam": "gal",
      "groupLetter": "b",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-22T10:00:00Z",
      "homeTeam": "arg",
      "awayTeam": "ara",
      "groupLetter": "c",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-22T13:00:00Z",
      "homeTeam": "din",
      "awayTeam": "tun",
      "groupLetter": "d",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-22T16:00:00Z",
      "homeTeam": "mex",
      "awayTeam": "pol",
      "groupLetter": "c",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-22T19:00:00Z",
      "homeTeam": "fra",
      "awayTeam": "aus",
      "groupLetter": "d",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-23T10:00:00Z",
      "homeTeam": "mar",
      "awayTeam": "cro",
      "groupLetter": "f",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-23T13:00:00Z",
      "homeTeam": "ale",
      "awayTeam": "jap",
      "groupLetter": "e",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-23T16:00:00Z",
      "homeTeam": "esp",
      "awayTeam": "cos",
      "groupLetter": "e",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-23T19:00:00Z",
      "homeTeam": "bel",
      "awayTeam": "can",
      "groupLetter": "f",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-24T10:00:00Z",
      "homeTeam": "sui",
      "awayTeam": "cam",
      "groupLetter": "g",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-24T13:00:00Z",
      "homeTeam": "uru",
      "awayTeam": "cor",
      "groupLetter": "h",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-24T16:00:00Z",
      "homeTeam": "por",
      "awayTeam": "gan",
      "groupLetter": "h",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-24T19:00:00Z",
      "homeTeam": "bra",
      "awayTeam": "ser",
      "groupLetter": "g",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-25T10:00:00Z",
      "homeTeam": "gal",
      "awayTeam": "ira",
      "groupLetter": "b",
      "teste": "teste"
    },
    {
  
      "gameTime": "2022-11-25T13:00:00Z",
      "homeTeam": "cat",
      "awayTeam": "sen",
      "groupLetter": "a",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-25T16:00:00Z",
      "homeTeam": "hol",
      "awayTeam": "equ",
      "groupLetter": "a",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-25T19:00:00Z",
      "homeTeam": "ing",
      "awayTeam": "eua",
      "groupLetter": "b",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-26T10:00:00Z",
      "homeTeam": "tun",
      "awayTeam": "aus",
      "groupLetter": "d",
      "teste": "teste"
    },
    {
  
      "gameTime": "2022-11-26T13:00:00Z",
      "homeTeam": "pol",
      "awayTeam": "ara",
      "groupLetter": "c",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-26T16:00:00Z",
      "homeTeam": "fra",
      "awayTeam": "din",
      "groupLetter": "d",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-26T19:00:00Z",
      "homeTeam": "arg",
      "awayTeam": "mex",
      "groupLetter": "c",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-27T10:00:00Z",
      "homeTeam": "jap",
      "awayTeam": "cos",
      "groupLetter": "e",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-27T13:00:00Z",
      "homeTeam": "bel",
      "awayTeam": "mar",
      "groupLetter": "f",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-27T16:00:00Z",
      "homeTeam": "cro",
      "awayTeam": "can",
      "groupLetter": "f",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-27T19:00:00Z",
      "homeTeam": "esp",
      "awayTeam": "ale",
      "groupLetter": "e",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-28T10:00:00Z",
      "homeTeam": "cam",
      "awayTeam": "ser",
      "groupLetter": "g",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-28T13:00:00Z",
      "homeTeam": "cor",
      "awayTeam": "gan",
      "groupLetter": "h",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-28T16:00:00Z",
      "homeTeam": "bra",
      "awayTeam": "sui",
      "groupLetter": "g",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-28T19:00:00Z",
      "homeTeam": "por",
      "awayTeam": "uru",
      "groupLetter": "h",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-29T15:00:00Z",
      "homeTeam": "equ",
      "awayTeam": "sen",
      "groupLetter": "a",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-29T15:00:00Z",
      "homeTeam": "hol",
      "awayTeam": "cat",
      "groupLetter": "a",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-29T19:00:00Z",
      "homeTeam": "gal",
      "awayTeam": "ing",
      "groupLetter": "b",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-29T19:00:00Z",
      "homeTeam": "ira",
      "awayTeam": "eua",
      "groupLetter": "b",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-30T15:00:00Z",
      "homeTeam": "aus",
      "awayTeam": "din",
      "groupLetter": "d",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-30T15:00:00Z",
      "homeTeam": "tun",
      "awayTeam": "fra",
      "groupLetter": "d",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-30T19:00:00Z",
      "homeTeam": "pol",
      "awayTeam": "arg",
      "groupLetter": "c",
      "teste": "teste"
    },
    {
      "gameTime": "2022-11-30T19:00:00Z",
      "homeTeam": "ara",
      "awayTeam": "mex",
      "groupLetter": "c",
      "teste": "teste"
    },
    {
      "gameTime": "2022-12-01T15:00:00Z",
      "homeTeam": "cro",
      "awayTeam": "bel",
      "groupLetter": "f",
      "teste": "teste"
    },
    {
      "gameTime": "2022-12-01T15:00:00Z",
      "homeTeam": "can",
      "awayTeam": "mar",
      "groupLetter": "f",
      "teste": "teste"
    },
    {
      "gameTime": "2022-12-01T19:00:00Z",
      "homeTeam": "jap",
      "awayTeam": "esp",
      "groupLetter": "e",
      "teste": "teste"
    },
    {
      "gameTime": "2022-12-01T19:00:00Z",
      "homeTeam": "cos",
      "awayTeam": "ale",
      "groupLetter": "e",
      "teste": "teste"
    },
    {
      "gameTime": "2022-12-02T15:00:00Z",
      "homeTeam": "gan",
      "awayTeam": "uru",
      "groupLetter": "h",
      "teste": "teste"
    },
    {
      "gameTime": "2022-12-02T15:00:00Z",
      "homeTeam": "cor",
      "awayTeam": "por",
      "groupLetter": "h",
      "teste": "teste"
    },
    {
      "gameTime": "2022-12-02T19:00:00Z",
      "homeTeam": "ser",
      "awayTeam": "sui",
      "groupLetter": "g",
      "teste": "teste"
    },
    {
      "gameTime": "2022-12-02T19:00:00Z",
      "homeTeam": "cam",
      "awayTeam": "bra",
      "groupLetter": "g",
      "teste": "teste"
    }
  ]

const main = () =>
    prisma.game.createMany({
        data: games
    })    


main()
    .then(console.log)
    .catch(console.log)