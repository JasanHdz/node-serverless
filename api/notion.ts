import { Client } from '@notionhq/client'
import { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const { name = 'pronouns' } = req.query
    const notion = new Client({ auth: process.env.NOTION_SECRET })
    const data = await notion.databases.query({ database_id: process.env.DATABASE_ID ?? '', filter: {
        or: [
            {
                property: 'Name',
                title: {
                    contains: String(name)
                }
            }
        ],
    }, page_size: 1 })
    res.json({
        message: 'success fetch api',
        success: true,
        data
    })
}