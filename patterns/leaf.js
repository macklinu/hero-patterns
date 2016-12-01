import { defaultFill, defaultOpacity } from './_defaults.js'


export const leaf = (fill = defaultFill, opacity = defaultOpacity) => `url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2240%22%20viewBox%3D%220%200%2080%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Eleaf%3C%2Ftitle%3E%3Cg%20fill%3D%22${fill}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M2.011%2039.976c.018-4.594%201.785-9.182%205.301-12.687.475-.474.97-.916%201.483-1.326v9.771L4.54%2039.976H2.01zm5.373%200L23.842%2023.57c.687%205.351-1.031%2010.95-5.154%2015.06-.483.483-.987.931-1.508%201.347H7.384zm-7.384%200c.018-5.107%201.982-10.208%205.89-14.104%205.263-5.247%2012.718-6.978%2019.428-5.192%201.783%206.658.07%2014.053-5.137%2019.296H.001zm10.806-15.41c3.537-2.116%207.644-2.921%2011.614-2.415L10.806%2033.73v-9.163zM65.25.75C58.578-1.032%2051.164.694%2045.93%205.929c-5.235%205.235-6.961%2012.649-5.18%2019.321%206.673%201.782%2014.087.056%2019.322-5.179%205.235-5.235%206.961-12.649%205.18-19.321zM43.632%2023.783c5.338.683%2010.925-1.026%2015.025-5.126%204.1-4.1%205.809-9.687%205.126-15.025l-20.151%2020.15zm7.186-19.156c3.518-2.112%207.602-2.915%2011.55-2.41l-11.55%2011.55v-9.14zm-3.475%202.716c-4.1%204.1-5.809%209.687-5.126%2015.025l6.601-6.6V6.02c-.51.41-1.002.85-1.475%201.323zM.071%200C.065%201.766.291%203.533.75%205.25%207.422%207.032%2014.836%205.306%2020.07.071l.07-.071H.072zm17.086%200C13.25%203.125%208.345%204.386%203.632%203.783L7.414%200h9.743zM2.07%200c-.003.791.046%201.582.146%202.368L4.586%200H2.07z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')`
