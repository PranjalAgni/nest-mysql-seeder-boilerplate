import {MigrationInterface, QueryRunner} from "typeorm";

export class UserPrimaryColumn1601929428391 implements MigrationInterface {
    name = 'UserPrimaryColumn1601929428391'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP PRIMARY KEY");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `id`");
        await queryRunner.query("ALTER TABLE `user` ADD `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `id`");
        await queryRunner.query("ALTER TABLE `user` ADD `id` varchar(36) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD PRIMARY KEY (`id`)");
    }

}
