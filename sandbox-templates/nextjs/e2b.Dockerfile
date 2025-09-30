# You can use most Debian-based base images
FROM node:21-slim

# Install curl
RUN apt-get update && apt-get install -y curl && apt-get clean && rm -rf /var/lib/apt/lists/*

COPY compile_page.sh /compile_page.sh
RUN chmod +x /compile_page.sh

# Install dependencies and customize sandbox
# We later move installation to home directory. A next app can only be initialized in an empty directory, home directory contains hidden file.
WORKDIR /home/user/nextjs-app

# Passing yes flags while running the following commands.
RUN npx --yes create-next-app@15.3.3 . --yes

RUN npx --yes shadcn@2.6.3 init --yes -b neutral --force
RUN npx --yes shadcn@2.6.3 add --all --yes

# Move the Nextjs app to the home directory and remove the nextjs-app directory
# We use the home directory because it reduces that hallucination. /home/user is more optimal compared to /home/user/<a-directory>
RUN mv /home/user/nextjs-app/* /home/user/ && rm -rf /home/user/nextjs-app
