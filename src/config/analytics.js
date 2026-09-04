/**
 * Google Analytics 4. Override with NEXT_PUBLIC_GA_MEASUREMENT_ID if needed.
 * The measurement ID is public by design (it ships in the page source).
 */
export const gaMeasurementId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-4VC0CR3FLZ';

export default gaMeasurementId;
