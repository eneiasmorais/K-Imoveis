import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1688410379989 implements MigrationInterface {
    name = 'InitialMigration1688410379989'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "deletedAt" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "deletedAt" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "deletedAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "deletedAt" SET NOT NULL`);
    }

}
