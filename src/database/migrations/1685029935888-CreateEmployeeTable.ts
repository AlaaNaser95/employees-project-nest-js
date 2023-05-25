import { MigrationInterface, QueryRunner } from 'typeorm';
export class CreateEmployeeTable1685029935888 implements MigrationInterface {
  name = 'CreateEmployeeTable1685029935888';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`employee\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`phoneCode\` varchar(255) NOT NULL, \`phoneNumber\` varchar(255) NOT NULL, \`dob\` date NULL, \`joiningDate\` date NULL, \`position\` varchar(255) NOT NULL, \`absenceDaysCount\` int NOT NULL DEFAULT '0', \`address\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`employee\``);
  }
}
