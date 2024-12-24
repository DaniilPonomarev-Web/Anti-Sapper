/**
 * @config
 * @name DefaultConfig
 * @description Конфигурация приложения, получаемая из переменных окружения.
 * @returns {Object} Объект конфигурации с параметрами приложения.
 * @properties
 * @property {string} NODE_ENV - Среда выполнения приложения, допустимые значения: 'development', 'production'
 * @property {string} PORT - Среда выполнения приложения, допустимые значения: 'development', 'production'
 * @property {string} PG_USER - Пользователь для подключения к PostgreSQL.
 * @property {string} PG_PASS - Пароль для подключения к PostgreSQL.
 * @property {string} PG_DB - Название базы данных PostgreSQL.
 * @property {number} PG_PORT - Порт для подключения к PostgreSQL, по умолчанию 5432.
 * @property {boolean} PG_LOG - Флаг логирования запросов к PostgreSQL, по умолчанию false.
 * @property {boolean} DB_SYNC - Флаг синхронизации базы данных, по умолчанию false.
 */

export const configuration = {
  node_env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || '3010',
  postgres: {
    user: process.env.PG_USER,
    pass: process.env.PG_PASS,
    database: process.env.PG_DB,
    port: process.env.PG_PORT,
    log: process.env.PG_LOG,
    sync: process.env.DB_SYNC,
  },
};
