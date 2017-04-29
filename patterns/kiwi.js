import { defaultFill, defaultOpacity } from './_defaults'

export const kiwi = (fill = defaultFill, opacity = defaultOpacity) => {
  fill = fill.substring(fill.indexOf('#') + 1)
  return `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2244%22%20width%3D%2234%22%20viewBox%3D%220%200%2034%2044%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23${fill}%22%20fill-opacity%3D%22${opacity}%22%20d%3D%22M1%206.2C.72%205.55.38%204.94%200%204.36v13.28c.38-.58.72-1.2%201-1.84A12.04%2012.04%200%200%200%207.2%2022%2012.04%2012.04%200%200%200%201%2028.2c-.28-.65-.62-1.26-1-1.84v13.28c.38-.58.72-1.2%201-1.84A12.04%2012.04%200%200%200%207.2%2044h21.6a12.05%2012.05%200%200%200%205.2-4.36V26.36A12.05%2012.05%200%200%200%2028.8%2022a12.05%2012.05%200%200%200%205.2-4.36V4.36A12.05%2012.05%200%200%200%2028.8%200H7.2A12.04%2012.04%200%200%200%201%206.2zM17.36%2023H12a10%2010%200%201%200%200%2020h5.36a11.99%2011.99%200%200%201%200-20zm1.28-2H24a10%2010%200%201%200%200-20h-5.36a11.99%2011.99%200%200%201%200%2020zM12%201a10%2010%200%201%200%200%2020%2010%2010%200%200%200%200-20zm0%2014a2%202%200%201%200%200%204%202%202%200%200%200%200-4zm-3.46-2a2%202%200%201%200-3.47%202%202%202%200%200%200%203.47-2zm0-4a2%202%200%201%200-3.47-2%202%202%200%200%200%203.47%202zM12%207a2%202%200%201%200%200-4%202%202%200%200%200%200%204zm3.46%202a2%202%200%201%200%203.47-2%202%202%200%200%200-3.47%202zm0%204a2%202%200%201%200%203.47%202%202%202%200%200%200-3.47-2zM24%2043a10%2010%200%201%200%200-20%2010%2010%200%200%200%200%2020zm0-14a2%202%200%201%200%200-4%202%202%200%200%200%200%204zm3.46%202a2%202%200%201%200%203.47-2%202%202%200%200%200-3.47%202zm0%204a2%202%200%201%200%203.47%202%202%202%200%200%200-3.47-2zM24%2037a2%202%200%201%200%200%204%202%202%200%200%200%200-4zm-3.46-2a2%202%200%201%200-3.47%202%202%202%200%200%200%203.47-2zm0-4a2%202%200%201%200-3.47-2%202%202%200%200%200%203.47%202z%22%2F%3E%3C%2Fsvg%3E')`
}
