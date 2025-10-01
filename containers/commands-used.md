# Docker Commands Used for reference

- In the config directory run: `docker compose up -d`.
- To login to the container: `docker exec -it my_postgres psql -U admin -d myapp_db`.
- To check schemas: `\dn`.
- To check users: `\du`.
- Other commands:

```bash
docker compose stop     # stop the container
docker compose start    # start again
docker compose down     # stop and remove container (keeps volume/data)
docker compose down -v  # stop and remove container + wipe all data
docker compose exec <service_name> env # To see the env values being passed to a service. 
docker compose down -v --rmi all 
docker compose build --no-cache && docker compose up -d
docker system prune --all --force --volumes
```

- PSQL related commands

```bash
psql -U <username> -d <dbName>
ALTER USER <username> WITH SUPERUSER; # Gives admin privileges to a user. Useful for prisma migrate dev command.
ALTER ROLE <username> WITH NOSUPERUSER; # Remove the admin privileges.
ALTER USER <username> WITH NOSUPERUSER; # Works as well.
\?          # help options.
\du         #display user
\l          # list databases.
\dn         # list schemas in current database.
```

- Prisma related commands:

``` bash
# Tutorial ones:
npx prisma init
npx prisma db push # DO NOT USE THIS unless absolutely necessary. PAIN in the back. FOR DEVELOPMENT
npx prisma migrate dev # USE this instead. FOR DEVELOPMENT
npx prisma studio   # GUI for interacting with database.
npx prisma migrate reset # Reset entire database. USE ONLY IN DEVELOPMENT.

# GPT ones:
npx prisma db pull      # introspect schema
npx prisma migrate dev  # run migrations
```

- Commands used with e2b

``` bash
# You can also use this command to change the template name.
cd sandbox-templates/nextjs && e2b template build --name web-builder-nextjs --cmd "/compile_page.sh"
```

- Commands used with inngest

```bash
npx inngest-cli@latest dev
```
