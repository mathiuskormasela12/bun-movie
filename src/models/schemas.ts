import {pgTable, varchar, serial, date, timestamp} from 'drizzle-orm/pg-core';

export const movies = pgTable('movies', {
  id: serial('id').primaryKey(),
  title: varchar('title', {length: 255}),
  description: varchar('description', {length: 255}),
  releasedDate: date('releasedDate'),
  createdAt: timestamp('createdAt').defaultNow()
});

export type Movie = typeof movies.$inferSelect;