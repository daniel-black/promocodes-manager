import { prisma } from '@/db';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      await handleGet(req, res);
      break;
    case 'POST':
      await handlePost(req, res);
      break;
    case 'DELETE':
      await handleDelete(req, res);
      break;
    default:
      res.json({ msg: 'nothing for you' });
  }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  if (Object.keys(req.query).length === 0) {
    const promocodes = await prisma.promocode.findMany();
    console.log(promocodes)
    res.status(200).json(promocodes);
    return
  }
  
  res.json({ msg: 'you want something other than all promocodes' });
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const body = JSON.parse(req.body);

  // check that Promocode does not already exist
  const existingCode = await prisma.promocode.findUnique({
    where: {
      code: body.code
    }
  });
  
  if (existingCode) {
    res.status(400).json({ msg: `"${body.code}" already exists` });
    return;
  }

  console.log(req.body);

  const createResult = await prisma.promocode.create({
    data: {
      code: body.code,
      codeType: body.codeType,
      discount: body.discount,
      maxDiscount: body.maxDiscount,
      start: new Date(body.start),
      end: new Date(body.end),
    }
  });

  console.log(createResult);
  
  // await prisma.promocode.upsert();
  res.json({msg: 'you wnat to POST?'});
}

async function handleDelete(req: NextApiRequest, res: NextApiResponse) {
  const parsedBody = JSON.parse(req.body);
  try {
    const deletedPromocode = await prisma.promocode.delete({
      where: {
        id: parsedBody.id
      },
    });
    res.status(200).json({ deletedPromocode });
    return;
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError) {
      res.status(400).json({ error: e.meta?.cause });
      return;
    }
    res.status(400).json({ error: e });
    return;
  }
}