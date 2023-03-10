export function pipe(...fns: Function[]) {
  return (...args: any[]): unknown => {
    let res = args
    for (let fn of fns) {
      res = [fn(...res)]
    }
    return res[0]
  }
}
