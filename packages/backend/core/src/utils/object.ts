export function cloneDeepObject<T>(object: T): T {
  return JSON.parse(JSON.stringify(object))
}
