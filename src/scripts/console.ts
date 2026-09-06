/* eslint-disable no-console */

/**
 * Console utilities. Contains helpers to output data
 * to the console. Console outputs are only available
 * on development mode.
 */

type LogLevel = "debug" | "error" | "info" | "log" | "table" | "trace" | "warn";

/**
 * Outputs data to the console at the desired level.
 * Invalid levels will fallback to `console.log`.
 *
 * Logging only happens when the application runs on
 * development mode. The function terminates early
 * otherwise.
 *
 * @param data Data to output to the console.
 * @param level Output level.
 */
export function maybeLog(level: LogLevel, ...data: unknown[]): void {
  if (!import.meta.env.DEV) return;

  switch (level) {
    case "debug":
      console.debug(data);
      break;

    case "error":
      console.error(data);
      break;

    case "info":
      console.info(data);
      break;

    case "table":
      console.table(data);
      break;

    case "trace":
      console.trace(data);
      break;

    case "warn":
      console.warn(data);
      break;

    default:
      console.log(data);
      break;
  }
}
