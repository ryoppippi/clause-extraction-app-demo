# Clause Extraction Web-app using Gemini API

https://github.com/user-attachments/assets/c918a763-9ffd-48a2-8f77-0860f9fa8f94

## dev

1. Generate a new Gemini API key from [aistudio@google](https://aistudio.google.com)
2. Clone the repo and set the API key in the `.env` file

```bash
pnpm i
mv .env.example .env
vim .env # edit the .env file
pnpm run dev
```

3. Open the browser and navigate to `http://localhost:5173`

## prod build

1. Generate a new Gemini API key from [aistudio@google](https://aistudio.google.com)
2. Clone the repo and set the API key in the `.env` file

```bash
pnpm i
mv .env.example .env
vim .env # edit the .env file
pnpm run build
pnpm preview
```
