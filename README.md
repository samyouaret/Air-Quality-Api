# hoopofy

## Run application

    docker build --tag hoopofy . --no-cache

    docker run -p 3000:3000 --env APP_PORT=3000 hoopofy

## Todo list

1. [ ] Setup node environment.
2. [ ] Setup typescript.
3. [ ] Config eslint.
4. [ ] Config prettier.
5. [ ] Config jest.

## Problems with husky installing hook

     yarn add husky@7 --dev \
  && npx husky-init \
  && npm exec -- github:typicode/husky-4-to-7 --remove-v4-config