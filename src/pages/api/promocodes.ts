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
    case 'PATCH':
      await handlePatch(req, res);
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

  const createdPromocode = await prisma.promocode.create({
    data: {
      code: body.code,
      codeType: body.codeType,
      status: body.status,
      discount: body.discount,
      maxDiscount: body.maxDiscount,
      start: new Date(body.start),
      end: new Date(body.end),
    }
  });
  
  res.json({ createdPromocode });
}

async function handlePatch(req: NextApiRequest, res: NextApiResponse) {
  const parsedBody = JSON.parse(req.body);
  console.log(parsedBody);
  
  try {
    const existingCode = await prisma.promocode.findUnique({
      where: {
        code: parsedBody.code,
      }
    });
    
    if (existingCode && existingCode.id !== parsedBody.id) {
      res.status(400).json({ msg: `"${parsedBody.code}" already exists` });
      return;
    }

    const updatedPromocode = await prisma.promocode.update({
      where: {
        id: parsedBody.id
      },
      data: {
        code: parsedBody.code,
        discount: parsedBody.discount,
        maxDiscount: parsedBody.maxDiscount,
        start: new Date(parsedBody.startDate),
        end: new Date(parsedBody.endDate)
      },
    });
    res.status(200).json({ updatedPromocode });
    return;
  } catch(e) {
    res.status(400).json({ error: e });
    return;
  }
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