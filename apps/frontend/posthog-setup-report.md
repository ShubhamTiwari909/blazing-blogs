# PostHog post-wizard report

The wizard has completed a deep integration of PostHog into your Blazing Blogs Next.js application. This integration includes:

- **Client-side initialization** via `instrumentation-client.ts` for automatic pageview tracking, session replay, and exception capture
- **Server-side tracking** using `posthog-node` for API route events
- **User identification** that links anonymous sessions to authenticated users when they sign in
- **Reverse proxy configuration** in `next.config.mjs` to improve tracking reliability and bypass ad blockers
- **Environment variables** properly configured with `NEXT_PUBLIC_` prefix for client accessibility

## Events Summary

| Event Name                | Description                                                      | File Path                                                                 |
| ------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `user_signed_in`          | User initiated Google OAuth sign-in                              | `src/components/ui/navbar/SigninSignout.tsx`                              |
| `user_signed_out`         | User signed out of the application                               | `src/components/ui/navbar/SigninSignout.tsx`                              |
| `newsletter_subscribed`   | User subscribed to the newsletter                                | `src/components/subscribe/useSubscribe.ts`                                |
| `newsletter_unsubscribed` | User unsubscribed from the newsletter                            | `src/components/subscribe/useSubscribe.ts`                                |
| `blog_link_copied`        | User copied the blog link to clipboard                           | `src/components/blogs/blog-renderer/blog-header/copy-link/useCopyLink.ts` |
| `blog_shared_linkedin`    | User clicked to share a blog post on LinkedIn                    | `src/components/share/linkedin/index.tsx`                                 |
| `blog_searched`           | User searched for blogs                                          | `src/components/blogs/blogs-list/SearchInput.tsx`                         |
| `blog_reaction_added`     | User added a reaction to a blog post                             | `src/components/blogs/reactions/helpers.ts`                               |
| `subscriber_created`      | New subscriber was created (server-side)                         | `src/app/api/subscribe/route.ts`                                          |
| `subscriber_reactivated`  | Existing subscriber reactivated their subscription (server-side) | `src/app/api/subscribe/route.ts`                                          |
| `subscriber_unsubscribed` | Subscriber unsubscribed from newsletter (server-side)            | `src/app/api/unsubscribe/route.ts`                                        |
| `welcome_email_sent`      | Welcome email was sent to new subscriber (server-side)           | `src/app/api/send/route.tsx`                                              |
| `google_sheet_submitted`  | User submitted the contact form (server-side)                    | `src/app/api/submit-to-sheet/route.ts`                                    |

## Files Created/Modified

### New Files

- `instrumentation-client.ts` - Client-side PostHog initialization
- `src/lib/posthog-server.ts` - Server-side PostHog client

### Modified Files

- `.env` - Added PostHog environment variables
- `next.config.mjs` - Added reverse proxy rewrites for PostHog
- `src/components/layout/SessionWrapper.client.tsx` - Added user identification
- `src/components/ui/navbar/SigninSignout.tsx` - Added sign in/out events
- `src/components/subscribe/useSubscribe.ts` - Added newsletter events
- `src/components/blogs/blog-renderer/blog-header/copy-link/useCopyLink.ts` - Added link copy event
- `src/components/share/linkedin/index.tsx` - Added LinkedIn share event
- `src/components/blogs/blogs-list/SearchInput.tsx` - Added search event
- `src/components/blogs/reactions/helpers.ts` - Added reaction event
- `src/app/api/subscribe/route.ts` - Added server-side subscription events
- `src/app/api/unsubscribe/route.ts` - Added server-side unsubscription event
- `src/app/api/send/route.tsx` - Added server-side email sent event
- `src/app/api/submit-to-sheet/route.ts` - Added server-side contact form event

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

### Dashboard

- [Analytics basics](https://us.posthog.com/project/300296/dashboard/1150115) - Core analytics dashboard tracking user engagement, subscriptions, and content interactions

### Insights

- [Newsletter Subscription Funnel](https://us.posthog.com/project/300296/insights/AYBI8fKY) - Tracks the conversion funnel from sign-in to newsletter subscription
- [User Sign-ins Over Time](https://us.posthog.com/project/300296/insights/7ihgB5Qr) - Tracks daily user sign-ins to monitor user engagement
- [Newsletter Churn Rate](https://us.posthog.com/project/300296/insights/GW0rPBK0) - Monitors newsletter subscriptions vs unsubscriptions
- [Blog Engagement Actions](https://us.posthog.com/project/300296/insights/8q6O0kSj) - Tracks link copies, LinkedIn shares, and reactions
- [Search Behavior](https://us.posthog.com/project/300296/insights/TtBjPiBD) - Tracks blog search activity to understand content discovery

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
