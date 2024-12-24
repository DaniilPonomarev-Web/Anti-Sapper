import * as Joi from 'joi';

/**
 * @property {object} postgres - Конфигурация подключения к PostgreSQL.
 * @property {string} postgres.user - Имя пользователя для подключения к PostgreSQL, извлекается из переменной окружения PG_USER.
 * @property {string} postgres.pass - Пароль для подключения к PostgreSQL, извлекается из переменной окружения PG_PASS.
 * @property {string} postgres.database - Название базы данных, извлекается из переменной окружения PG_DB.
 * @property {number} postgres.port - Порт для подключения к PostgreSQL, извлекается из переменной окружения PG_PORT.
 * @property {boolean} postgres.log - Логировать ли запросы к PostgreSQL, извлекается из переменной окружения PG_LOG.
 * @property {boolean} postgres.sync - Синхронизация базы данных, извлекается из переменной окружения DB_SYNC.
 */

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production').required(),
  PORT: Joi.string().required().default('3010'),
  PG_USER: Joi.string().required(),
  PG_PASS: Joi.string().required(),
  PG_DB: Joi.string().required(),
  PG_PORT: Joi.number().default(5432),
  PG_LOG: Joi.boolean().default(false),
  DB_SYNC: Joi.boolean().default(false),
});
