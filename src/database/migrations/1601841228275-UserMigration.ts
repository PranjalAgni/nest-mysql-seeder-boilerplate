import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1601841228275 implements MigrationInterface {
    name = 'UserMigration1601841228275'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `user` ADD `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `updatedAt`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `createdAt`");
    }

}
