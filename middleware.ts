import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Protect all routes, including api and trpc
    '/((?!.+\\.[\\w]+$|_next).*)',
    // Also protect API routes
    '/(api|trpc)(.*)$'
  ],
};