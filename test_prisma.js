const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://postgres:IO-43toru26@localhost:5432/postgres?schema=public' ,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
  log: ['info', 'warn', 'error'],
});


async function main() {
  console.log("=== Старт перевірки клієнта Prisma ===");

  // 1. Спочатку знайдемо клієнта та фільм, які вже є в базі (з ваших тестів)
  const existingCustomer = await prisma.customer.findFirst({
    where: { email: 'chase@example.com' }
  });

  const existingFilm = await prisma.film.findFirst({
    where: { title: 'Inception' }
  });

  if (!existingCustomer || !existingFilm) {
    console.log("Помилка: Спочатку запустіть ваш SQL-скрипт з INSERT-ами в pgAdmin, щоб у базі з'явилися Chase та Inception!");
    return;
  }

  // 2. Тестуємо вставку (INSERT) нової таблиці 'review' через Prisma Client
  const newReview = await prisma.review.create({
    data: {
      rating: 10,
      comment: "Absolutely mind-blowing masterpiece! (Створено через Prisma Client)",
      film_id: existingFilm.film_id,
      customer_id: existingCustomer.customer_id
    }
  });
  console.log("Новий відгук успішно додано через Prisma:", newReview);

  console.log("\n=== Перевірка зв'язків (JOIN аналог) ===");

  // 3. Тестуємо складний запит: вибираємо фільми та підтягуємо пов'язані відгуки
  const filmsWithReviews = await prisma.film.findMany({
    where: { title: 'Inception' },
    include: {
      reviews: true // підтягуємо масив відгуків для кожного фільму
    }
  });

  console.log("Результат вибірки фільмів з їхніми відгуками:");
  console.log(JSON.stringify(filmsWithReviews, null, 2));
}

main()
  .catch((e) => {
    console.error("❌ Виникла помилка під час виконання запиту:", e);
  })
  .finally(async () => {
    // Обов'язково закриваємо підключення до бази даних
    await prisma.$disconnect();
  });
