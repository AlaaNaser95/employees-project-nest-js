import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddGenderAndEmailToEmployeeTable1685048348839
  implements MigrationInterface
{
  name = 'AddGenderAndEmailToEmployeeTable1685048348839';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`employee\` ADD \`gender\` enum ('M', 'F') NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`employee\` ADD \`email\` varchar(255) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`employee\` DROP COLUMN \`email\``);
    await queryRunner.query(`ALTER TABLE \`employee\` DROP COLUMN \`gender\``);
  }
}
