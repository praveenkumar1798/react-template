import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { isLocal } from '@utils';

export function initSentry() {
  if (!isLocal()) {
    Sentry.init({
      release: process.env.SENTRY_RELEASE,
      environment: process.env.ENVIRONMENT_NAME,
      dsn: process.env.SENTRY_DSN,
      integrations: [new Integrations.BrowserTracing()],
      tracesSampleRate: 1.0
    });
  }
}
