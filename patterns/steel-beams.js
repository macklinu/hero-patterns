import { defaultFill, defaultOpacity } from './_defaults.js'


export const steelBeams = (fill = defaultFill, opacity = defaultOpacity) => `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2258%22%20width%3D%2242%22%20viewBox%3D%220%200%2042%2058%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22${fill}%22%20fill-opacity%3D%22${opacity}%22%20d%3D%22M12%2018h12v18h6v4H18V22h-6v-4zm-6-2v-4H0V0h36v6h6v36h-6v4h6v12H6v-6H0V16h6zM34%202H2v8h24v24h8V2zM6%208a2%202%200%201%200%200-4%202%202%200%200%200%200%204zm8%200a2%202%200%201%200%200-4%202%202%200%200%200%200%204zm8%200a2%202%200%201%200%200-4%202%202%200%200%200%200%204zm8%200a2%202%200%201%200%200-4%202%202%200%200%200%200%204zm0%208a2%202%200%201%200%200-4%202%202%200%200%200%200%204zm0%208a2%202%200%201%200%200-4%202%202%200%200%200%200%204zm0%208a2%202%200%201%200%200-4%202%202%200%200%200%200%204zM2%2050h32v-8H10V18H2v32zm28-6a2%202%200%201%200%200%204%202%202%200%200%200%200-4zm-8%200a2%202%200%201%200%200%204%202%202%200%200%200%200-4zm-8%200a2%202%200%201%200%200%204%202%202%200%200%200%200-4zm-8%200a2%202%200%201%200%200%204%202%202%200%200%200%200-4zm0-8a2%202%200%201%200%200%204%202%202%200%200%200%200-4zm0-8a2%202%200%201%200%200%204%202%202%200%200%200%200-4zm0-8a2%202%200%201%200%200%204%202%202%200%200%200%200-4z%22%2F%3E%3C%2Fsvg%3E')`
