-- DropIndex
DROP INDEX "User_email_key";

-- CreateIndex
CREATE INDEX "Application_jobId_idx" ON "Application"("jobId");

-- CreateIndex
CREATE INDEX "Application_userId_idx" ON "Application"("userId");

-- CreateIndex
CREATE INDEX "JobRecruiter_userId_idx" ON "JobRecruiter"("userId");

-- CreateIndex
CREATE INDEX "JobRecruiter_jobId_idx" ON "JobRecruiter"("jobId");
