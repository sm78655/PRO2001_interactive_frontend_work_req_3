# PRO2001 – Interactive Frontend
## Work Requirement 3: Entertainment Gallery – Responsive Card Layout

This project was created for **PRO2001 – Interactive Frontend, Work Requirement 3**.

## Features

- 6 entertainment cards
- Each card has a title, portrait image, category and short description
- Reusable `EntertainmentCard` component with typed props
- React Bootstrap responsive grid
- 1 card per row on small screens
- 2 cards per row on medium screens
- 3 cards per row on large screens
- Local portrait artwork in `public/images`

## Technologies Used

- React
- TypeScript
- Vite
- React Bootstrap
- Bootstrap 5
- CSS

## How to Run the App

```bash
npm install
npm run dev
```

Then open the local Vite URL, normally:

```text
http://localhost:5173
```

## Responsive Layout

The gallery uses:

```tsx
<Col xs={12} md={6} lg={4}>
```

This gives:
- Small screens: 1 card per row
- Medium screens: 2 cards per row
- Large screens: 3 cards per row

## Reusable Component

All six cards use the same reusable component:

`src/components/EntertainmentCard.tsx`

Card data is stored separately in:

`src/data/entertainment.ts`

## Author

**Sameer Ahmad Mustafa**

## Course

**PRO2001 – Interactive Frontend**
