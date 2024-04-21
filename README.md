# test-task

## How to run FE
1) Open [frontend folder](https://github.com/ksliaptsou/test-task/tree/main/frontend) and install dependencies via `pnpm i`
2) Create .env file in frontend folder and provide `API_URL and API_TOKEN` variables
3) Run pnpm dev command and open started app

## How to run BE
1) Open [backed folder](https://github.com/ksliaptsou/test-task/tree/main/backend) and install dependencies via `pnpm i`
2) Create .env file in backend folder and provide `ALLOWED_ORIGINS, PORT (by default 5000), API_TOKEN_SECRET, CACHE_EXPIRE_TIME and TARGET_SEARCH_DRIVER` variables
3) Run `pnpm start:dev` command to start development server
4) To open swagger use localhost:8080/api where 8080 is equal to PORT from .env file (by default 5000)