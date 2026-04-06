// timezoneUtils.ts

// A timezone utility module providing functions to handle timezone calculations.

import { DateTime } from 'luxon';

/**
 * Get the current date and time in specified timezone.
 * @param timezone - The IANA timezone string.
 * @returns Date and time in the specified timezone.
 */
export function getCurrentTimeInTimezone(timezone: string): string {
    return DateTime.now().setZone(timezone).toFormat('yyyy-MM-dd HH:mm:ss');
}

/**
 * Convert a UTC date to a specified timezone.
 * @param utcDate - The UTC date string in 'YYYY-MM-DD HH:mm:ss'.
 * @param timezone - The IANA timezone string.
 * @returns Converted date and time in the specified timezone.
 */
export function convertUtcToTimezone(utcDate: string, timezone: string): string {
    return DateTime.fromISO(utcDate, { zone: 'utc' }).setZone(timezone).toFormat('yyyy-MM-dd HH:mm:ss');
}

/**
 * List all available timezone names.
 * @returns An array of all timezone names.
 */
export function getAllTimezones(): string[] {
    return DateTime.local().zones; // Returns all available timezone names.
}