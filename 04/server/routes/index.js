var express = require('express');
var router = express.Router();

const {PrismaClient} = require('@prisma/client');
router.get('/', async(req, res, next) => {
  const prisma = new PrismaClient();
  const allBooks = await prisma.books.findMany();
  res.json(allBooks);
});

//postを受けた時の処理
router.post('/', async(req, res, next) => {
  const prisma = new PrismaClient();
  const data = {data:req.body};
  const book = await prisma.books.create(data);
  res.json(book);
});

module.exports = router;
