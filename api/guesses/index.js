import { PrismaClient } from "@prisma/client"
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export const create = async ctx => {   

    if (!ctx.headers.authorization) {
        ctx.status = 401
        return
    }
    
    const [type, token] = ctx.headers.authorization.split(" ")
    console.log({ type, token })

    try {
        const data = jwt.verify(token, process.env.JWT_SECRET)

        if (!ctx.request.body.homeTeamScore && !ctx.request.body.awayTeamScore) {
            ctx.status = 400
            return
        }
    
        const userId = data.sub
        const { gameId } = ctx.request.body
    
        const homeTeamScore = parseInt(ctx.request.body.homeTeamScore)
        const awayTeamScore = parseInt(ctx.request.body.awayTeamScore)
        
    
        try {
    
            const [guess] = await prisma.guess.findMany({
                where: { userId, gameId },
            })
    
            ctx.body = guess
                ? await prisma.guess.update({
                    where: {
                        id: guess.id
                    },
                    data: {
                        homeTeamScore,
                        awayTeamScore
                    }
                })
                : await prisma.guess.create({
                    data: {
                        userId,
                        gameId,
                        homeTeamScore,
                        awayTeamScore
                    }
                })        
    
        } catch (error) {
            console.log(error)
            ctx.body = error
            ctx.status = 500
        }
    } catch(error) {
        ctx.status = 401
        return
    }

}

export const list = async ctx => {

    const username = ctx.request.params.username

    const user = await prisma.user.findUnique({
        where: { username }
    })

    if (!user) {
        ctx.status = 404
        return
    }

    const guesses = await prisma.guess.findMany({
        where: {
            userId: user.id
        }
    })

    ctx.body = guesses

}