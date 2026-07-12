import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { sendContactFormEmail } from "./_core/emailService";
import { TRPCError } from "@trpc/server";
import { ENV } from "./_core/env";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required").max(100),
          email: z.string().email("Invalid email address"),
          phone: z.string().min(1, "Phone is required").max(20),
          dogName: z.string().optional().default(""),
          message: z.string().min(1, "Message is required").max(1000),
        })
      )
      .mutation(async ({ input }) => {
        try {
          // Send email to owner
          const ownerEmail = "foti@mayaspetgrooming.com.au";
          const emailSent = await sendContactFormEmail(
            ownerEmail,
            input.name,
            input.email,
            input.phone,
            input.dogName,
            input.message
          );

          if (!emailSent) {
            throw new TRPCError({
              code: "INTERNAL_SERVER_ERROR",
              message: "Failed to send inquiry. Please try again later.",
            });
          }

          return {
            success: true,
            message: "Thank you! Your inquiry has been received. We'll contact you soon.",
          };
        } catch (error) {
          console.error("[Contact Form] Error:", error);
          if (error instanceof TRPCError) throw error;
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Failed to submit inquiry. Please try again later.",
          });
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
