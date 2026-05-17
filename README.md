# Звіт з лабораторної роботи №6

## 1. Ініціалізація Prisma та аналіз існуючої схеми

Роботу було розпочато з ініціалізації Prisma у проєкті та підключення до існуючої бази даних PostgreSQL, створеної в попередніх лабораторних роботах.

**Виконані команди:**
```bash
npm init -y
npm install prisma --save-dev
npx prisma init --datasource-provider postgresql
npx prisma db pull
```
Після виконання команди db pull Prisma успішно проаналізувала базу даних і згенерувала початковий файл schema.prisma з існуючими таблицями (customer, film, actor тощо).

![ ](img/1.png)
![ ](img/2.png)
![ ](img/3.png)
![ ](img/4.png)

2. Внесення змін до схеми (Міграції)
У ході роботи було виконано три типи змін схеми бази даних за допомогою команди npx prisma migrate dev.

2.1. Додавання нового поля
До таблиці customer було додано нове поле phone, а до таблиці film — поле isAvailable.

До зміни (фрагмент моделі customer):

```
model customer {
  customer_id       Int       @id @default(autoincrement())
  first_name        String    @db.VarChar(32)
  // ... інші поля
}
Після зміни:

Фрагмент коду
model customer {
  customer_id       Int       @id @default(autoincrement())
  first_name        String    @db.VarChar(32)
  phone             String?
  // ... інші поля
}
```
Команда міграції: npx prisma migrate dev --name add-phone-field



2.2. Додавання нової таблиці
Для реалізації можливості залишати відгуки до фільмів, було створено нову таблицю review та налаштовано двосторонні зв'язки з таблицями film та customer.

Доданий код у schema.prisma:

Фрагмент коду
model review {
  review_id   Int      @id @default(autoincrement())
  rating      Int
  comment     String?
  created_at  DateTime @default(now())
  film_id     Int
  customer_id Int
  customer    customer @relation(fields: [customer_id], references: [customer_id])
  film        film     @relation(fields: [film_id], references: [film_id])
}
Команда міграції: npx prisma migrate dev --name add-review-table

[ВСТАВТЕ СКРІНШОТ: структура нової таблиці у Prisma Studio або pgAdmin]

2.3. Видалення стовпця
З таблиці customer було видалено поле birth_date, оскільки воно більше не використовується в логіці роботи.

Команда міграції: npx prisma migrate dev --name drop-birth_date-from-customer

[ВСТАВТЕ СКРІНШОТ: попередження Prisma про втрату даних під час видалення стовпця та підтвердження (клавіша 'y')]

3. Перевірка за допомогою клієнта Prisma
Для перевірки працездатності оновленої схеми та коректності налаштованих зв'язків було створено Node.js скрипт test_prisma.js. Для підключення до бази даних використовувався сучасний підхід з @prisma/adapter-pg.

Скрипт виконує дві основні дії:

Вставку нового запису в таблицю review.

Складний запит (аналог JOIN), що витягує фільм "Inception" разом з усіма пов'язаними відгуками.

Код скрипту перевірки (test_prisma.js):

JavaScript
const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://postgres:ВАШ_ПАРОЛЬ@localhost:5432/postgres?schema=public',
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("=== Старт перевірки клієнта Prisma ===");

  const existingCustomer = await prisma.customer.findFirst({ where: { email: 'chase@example.com' } });
  const existingFilm = await prisma.film.findFirst({ where: { title: 'Inception' } });

  const newReview = await prisma.review.create({
    data: {
      rating: 10,
      comment: "Absolutely mind-blowing masterpiece! (Створено через Prisma Client)",
      film_id: existingFilm.film_id,
      customer_id: existingCustomer.customer_id
    }
  });
  console.log("✅ Новий відгук успішно додано через Prisma:", newReview);

  console.log("\n=== Перевірка зв'язків (JOIN аналог) ===");
  const filmsWithReviews = await prisma.film.findMany({
    where: { title: 'Inception' },
    include: { reviews: true }
  });

  console.log("🎬 Результат вибірки фільмів з їхніми відгуками:");
  console.log(JSON.stringify(filmsWithReviews, null, 2));
}

main().finally(async () => { await prisma.$disconnect(); });
Результат виконання скрипту (вивід терміналу):

JSON
=== Старт перевірки клієнта Prisma ===
✅ Новий відгук успішно додано через Prisma: {
  review_id: 3,
  rating: 10,
  comment: 'Absolutely mind-blowing masterpiece! (Створено через Prisma Client)',
  created_at: 2026-05-17T20:29:15.327Z,
  film_id: 5,
  customer_id: 7
}

=== Перевірка зв'язків (JOIN аналог) ===
🎬 Результат вибірки фільмів з їхніми відгуками:
[
  {
    "film_id": 5,
    "title": "Inception",
    "release_year": 2010,
    "duration": 148,
    "age_restriction": "R_12",
    "studio_id": 7,
    "isAvailable": true,
    "reviews": [
      {
        "review_id": 1,
        "rating": 9,
        "comment": "^.^! Great movie.",
        "created_at": "2026-05-17T19:28:32.295Z",
        "film_id": 5,
        "customer_id": 7
      },
      {
        "review_id": 3,
        "rating": 10,
        "comment": "Absolutely mind-blowing masterpiece! (Створено через Prisma Client)",
        "created_at": "2026-05-17T20:29:15.327Z",
        "film_id": 5,
        "customer_id": 7
      }
    ]
  }
]
[ВСТАВТЕ СКРІНШОТ: вікно терміналу з цим виводом JSON або скріншот з Prisma Studio, де видно доданий відгук]

Висновок
Під час виконання лабораторної роботи було успішно налаштовано Prisma ORM. Продемонстровано процес еволюції схеми бази даних за допомогою міграцій (додавання таблиць, модифікація полів). За допомогою клієнта Prisma та адаптера PostgreSQL успішно виконано вставку даних та складну вибірку зі зв'язаних таблиць. Усі зміни схеми та міграції коректно відображаються у PostgreSQL.
