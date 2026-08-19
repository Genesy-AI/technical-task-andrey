-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_lead" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,
    "email" TEXT NOT NULL,
    "jobTitle" TEXT,
    "countryCode" TEXT,
    "companyName" TEXT,
    "message" TEXT,
    "emailVerified" BOOLEAN
);
INSERT INTO "new_lead" ("companyName", "countryCode", "createdAt", "email", "emailVerified", "firstName", "id", "jobTitle", "lastName", "message", "updatedAt") SELECT "companyName", "countryCode", "createdAt", "email", "emailVerified", "firstName", "id", "jobTitle", "lastName", "message", "updatedAt" FROM "lead";
DROP TABLE "lead";
ALTER TABLE "new_lead" RENAME TO "lead";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
