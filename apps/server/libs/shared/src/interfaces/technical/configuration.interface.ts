/**
 * @interface Configuration
 * @description Основная конфигурация приложения.
 */
export interface Configuration {
  /**
   * Порт, на котором будет работать приложение.
   */
  port: number;

  /**
   * Конфигурация PostgreSQL.
   */
  postgres: IConfigurationPostgres;
}

/**
 * @interface IConfigurationPostgres
 * @description Конфигурация базы pg.
 */
export interface IConfigurationPostgres {
  /**
   * Имя пользователя базы данных.
   */
  user: string;

  /**
   * Пароль базы данных.
   */
  pass: string;

  /**
   * Название базы данных.
   */
  database: string;

  /**
   * Порт подключения к базе данных.
   */
  port: string;

  /**
   * Флаг для включения/выключения логирования запросов.
   */
  log: boolean;

  /**
   * Флаг для синхронизации схемы.
   */
  sync: boolean;
}
