import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserLastNameMigration1601909462037 implements MigrationInterface {
  name = 'UserLastNameMigration1601909462037';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `user` DROP COLUMN `lastName`');
    await queryRunner.query(
      'ALTER TABLE `user` ADD `lastName` varchar(500) NOT NULL',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `user` DROP COLUMN `lastName`');
    await queryRunner.query(
      'ALTER TABLE `user` ADD `lastName` varchar(255) NOT NULL',
    );
  }
}
