/**
 * Reads a single line of input from stdin, returning it to the caller.
 * @returns {string}
 */
declare function readline(): string;

/**
 * when compiling with webpack set to true, otherwise false for testing
 */
declare const isRunAtCodinGame: boolean;

/**
 * Only in JS_THREADSAFE builds. Sleep for dt seconds. Fractions of a second are supported. Returns true on success, false if the sleep was interrupted.
 */
declare function sleep(dt: number): boolean;

/**
 * Execution time elapsed for the current thread.
 */
declare function elapsed(): number;

/**
 * Return the current time with sub-ms precision.
 */
declare function dateNow(): number;

/**
 * Get/Set the limit in seconds for the execution time for the current context. A negative value (default) means that the execution time is unlimited. If a second argument is provided, it will be invoked when the timer elapses. Calling this function will replace any callback set by setInterruptCallback.
 */
declare function timeout(seconds: number, callback: () => any): any;
