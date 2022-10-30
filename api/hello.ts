import { VercelRequest, VercelResponse } from '@vercel/node'
import path from 'path'

export default function handler(req: VercelRequest, res: VercelResponse) {
    res.json({
        message: 'Hello world'
    })
}