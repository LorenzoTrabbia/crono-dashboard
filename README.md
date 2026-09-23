# Crono Dashboard

Frontend implementation of the Crono dashboard based on the provided [Figma design](https://www.figma.com/design/9stjTEFTCNpLiHePX2GYOk/Crono-dashboard---test-task?node-id=0-1&p=f&t=S2otFApGVSzl9t3G-0).

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (icons)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Project Structure

```
src/
  assets/
    icons/ avatar images
  components/   UI components (Sidebar, cards, Signals list, action menu, etc.)
  data/         Static mock data (signals, KPIs, tasks, onboarding steps)
  hooks/        useSignals — manages the Signals list state and unread counter
  types/        Shared TypeScript types
```

## Implementation Notes

- **Signals interaction**: clicking "Action" opens a small menu with **Complete** and **Delete**. Both options resolve the signal and decrease the unread counter (`useSignals` hook), since the assignment only specified the counter behavior and not a visual distinction between the two outcomes.
- **Data**: signals, KPIs, tasks, and onboarding steps are static mock data (`src/data`), simulating what would normally come from an API.
- **Layout**: the dashboard uses a full-height viewport grid. As a trade-off of that choice, the Signals and Onboarding cards stretch slightly taller than their content when there are few items, introducing a small vertical spacing difference versus the Figma file (which sizes those cards to their natural content height). This is most visible at the Figma's reference resolution (1440x750); on larger screens, the stretch becomes more pronounced, since the grid keeps filling the full viewport height regardless of content. An alternative approach - letting all cards size to content and allowing the page to scroll - would match the Figma spacing more closely at any resolution, at the cost of a fixed, no-scroll dashboard feel.
- **Icons**: icons are from Lucide React.

## What I'd Do With More Time

- Add unit tests for the `useSignals` hook and the Signals list interaction.
- Extract the KPI progress bar into a more reusable, data-driven component.
- Fine-tune the vertical rhythm of the Signals/Onboarding cards to remove the spacing trade-off noted above.