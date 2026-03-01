export type AnalyticsValue = string | number | boolean;
export type AnalyticsProps = Record<string, AnalyticsValue | null | undefined>;

function cleanProps(props: AnalyticsProps): Record<string, AnalyticsValue> {
  return Object.fromEntries(
    Object.entries(props).filter(([, value]) => value !== undefined && value !== null)
  ) as Record<string, AnalyticsValue>;
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, options?: { props?: Record<string, AnalyticsValue> }) => void;
  }
}

export function trackEvent(eventName: string, props: AnalyticsProps = {}): void {
  if (typeof window === "undefined") return;

  const payload = cleanProps(props);

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: eventName, ...payload });
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
  }

  if (typeof window.plausible === "function") {
    window.plausible(eventName, { props: payload });
  }

  window.dispatchEvent(
    new CustomEvent("segurepix:track", {
      detail: { event: eventName, props: payload, ts: Date.now() },
    })
  );

  if (process.env.NODE_ENV !== "production") {
    console.info("[track]", eventName, payload);
  }
}
