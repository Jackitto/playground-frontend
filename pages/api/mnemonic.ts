import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'
import initMiddleware from '../../lib/initMiddleware'

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST'],
  })
)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await cors(req, res)

  const results = await fetch(`http://127.0.0.1:8000/mnemonic`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  })

  const result = await results.json()

  res.status(200).json(result)
}
