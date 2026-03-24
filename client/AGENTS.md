<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know
## **agents.md: Kolesh**

### Project Identity & Vision
App Name: Kolesh

Concept: A Personal Dashboard that has everything you need daily.

Purpose: A platform for People in Algeria to communicate, share their work, and showcase their Ideas and feeling through chat, shared notes and whiteboard and community interaction.


### Technical Stack (The Law)
Monorepo: /client (Frontend), /server (Backend).

Language: Strict TypeScript throughout.

Frontend: Next.js (App Router), Tailwind CSS.

UI Libraries: Shadcn/ui (Functional), Aceternity UI (Visuals).

Animation Engine: Framer Motion (State-driven transitions).

Backend: Node.js + Express.

Real-time: Socket.io (Room-based architecture).

Database: PostgreSQL via Prisma ORM.

Authentication: Better Auth.

Packages Management: use npm.

WebApp Theme : npx shadcn@latest add https://shadcnthemer.com/r/themes/240c9813-0123-4128-b128-c54519c12a4e.json

### Instructions
Put a separate line between highly different logic.

Add a comment before imports of the same source ex:(// shadcn imports, // next imports).

Do not use other packages except the ones in my technical stack before asking me if i want to.

Use IS_DEV or NODE_ENV environment variables to keep the production logic separate from the dev logic and focus on local development until requested otherwise.

Keep UI components dynamic and easy to use in other pages.

Keep in consideration performance and optimization use :(useCallback,useMemo,memo) if needed without comments.

### Engineering Constraints
Simplicity : The logic must be simple if possible and powerfull

Persistence: Every socket event must be mirrored in the PostgreSQL database before final client confirmation.

Shared Types: Use a shared packages/types directory or internal workspace symlinks so the Message, Post, and User types are identical in both /apps/web and /apps/server.

Zero LLM: The application must not use LLM APIs; all data and communication are user-driven and algorithmically handled.


### SEO & Metadata Standards
Implementation: Use the Next.js Metadata API exclusively for all routes.

Static Metadata: Defined in the root layout with a global title template.

Dynamic Metadata: Required for all profiles using generateMetadata to reflect the specific context.

Robots & Sitemap: Programmatic robots.ts and sitemap.ts files to manage indexing of the platform structure.

Canonical URLs: Every route must include a canonical link to its primary path.

Structured Data: Use JSON-LD (Profile/Article schema) injected via Server Components.

Do not use "use client" in pages; all web app pages must be Server Components.

### Build & Test Commands:
Build: npm run build must trigger prisma generate followed by the Next.js build and TypeScript compilation for the server.
Development: npm run dev must launch both the Next.js dev server and the Express backend concurrently.
Testing: Use native Node.js assertion modules (node:assert) or simple custom scripts for testing shared logic within the monorepo. No external testing frameworks (No Vitest, No Jest).

### Security Considerations:

Authentication: Use Better Auth with secure session management. Ensure all sensitive cookies are HttpOnly and Secure.

Data Integrity: Use Prisma’s type-safety and built-in validation to ensure incoming data matches the database schema.

Real-time Security: Implement custom middleware for Socket.io to verify the Better Auth session before allowing Room access or message broadcasting.

Database Safety: Rely on Prisma ORM for all queries to prevent SQL Injection. Do not use raw queries unless absolutely necessary.

XSS Prevention: Manually sanitize user-generated content (Posts/Portfolios) before rendering to prevent malicious script injection.

### Current Focus
Milestone: Initializing the core monorepo structure, user authentication,and main feautures.


### Boundaries 
Do not commit or push or create a branch on my github repo dont switch to a branch also except if i asked.

No Responsiveness: Strictly DO NOT use Tailwind responsive modifiers (e.g., sm:, md:, lg:, xl:) or CSS media queries. The app should have a fixed-width/fixed-layout design.

No Inline Styles: Do not use style={{...}} if a Tailwind utility exists for the same result.

Minimal Documentation: No comments in the form of ordered/numbered steps. Keep code comments to an absolute minimum (only for logic that is genuinely non-obvious).

Lean Logic: Do not create helper functions except for large, complex, or highly repetitive logic.



This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
