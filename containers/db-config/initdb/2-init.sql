-- Connect to the database created by POSTGRES_DB
\connect ${POSTGRES_DB};

-- Create a schema for Prisma
CREATE SCHEMA ${SCHEMA_NAME};

-- Create a Prisma user
CREATE USER ${APP_USER} WITH ENCRYPTED PASSWORD '${APP_USER_PASSWORD}';

-- Allow connection to the database
GRANT CONNECT ON DATABASE ${POSTGRES_DB} TO ${APP_USER};

-- Allow schema usage + object creation
GRANT USAGE, CREATE ON SCHEMA ${SCHEMA_NAME} TO ${APP_USER};

-- Grant all privileges on current tables/sequences
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA ${SCHEMA_NAME} TO ${APP_USER};
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA ${SCHEMA_NAME} TO ${APP_USER};

-- Ensure new tables/sequences created in this schema also give rights to Prisma
ALTER DEFAULT PRIVILEGES IN SCHEMA ${SCHEMA_NAME}
  GRANT ALL ON TABLES TO ${APP_USER};

ALTER DEFAULT PRIVILEGES IN SCHEMA ${SCHEMA_NAME}
  GRANT ALL ON SEQUENCES TO ${APP_USER};
