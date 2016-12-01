import { defaultFill, defaultOpacity } from './_defaults.js'


export const skulls = (fill = defaultFill, opacity = defaultOpacity) => `url('data:image/svg+xml,%3Csvg%20width%3D%22180%22%20height%3D%22180%22%20viewBox%3D%220%200%20180%20180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Eskulls%3C%2Ftitle%3E%3Cpath%20d%3D%22M82.42%20180h-1.415L0%2098.995v-2.828L6.167%2090%200%2083.833v-2.828L81.005%200h2.828L90%206.167%2096.167%200h2.828L180%2081.005v2.828L173.833%2090%20180%2096.167v2.828L98.995%20180h-2.828L90%20173.833%2083.833%20180H82.42zm0-1.414L1.413%2097.58%208.994%2090l-7.58-7.58L82.42%201.413%2090%208.995l7.58-7.58%2081.006%2081.004-7.58%207.581%207.58%207.58-81.005%2081.006-7.581-7.58-7.58%207.58zM175.196%200h-25.832c1.033%202.924%202.616%205.589%204.625%207.868C152.145%209.682%20151%2012.208%20151%2015c0%205.523%204.477%2010%2010%2010%201.657%200%203%201.343%203%203v4h16V0h-4.803c.51.883.803%201.907.803%203%200%203.314-2.686%206-6%206s-6-2.686-6-6c0-1.093.292-2.117.803-3h10.394-13.685C161.18.938%20161%201.948%20161%203v4c-4.418%200-8%203.582-8%208s3.582%208%208%208c2.761%200%205%202.239%205%205v2h4v-4h2v4h4v-4h2v4h2V0h-4.803zm-15.783%200c-.27.954-.414%201.96-.414%203v2.2c-1.25.254-2.414.74-3.447%201.412-1.716-1.93-3.098-4.164-4.054-6.612h7.915zM180%2017h-3l2.143-10H180v10zm-30.635%20163c-.884-2.502-1.365-5.195-1.365-8%200-13.255%2010.748-24%2023.99-24H180v32h-30.635zm12.147%200c.5-1.416%201.345-2.67%202.434-3.66l-1.345-1.48c-1.5%201.364-2.62%203.136-3.187%205.14H151.5c-.968-2.48-1.499-5.177-1.499-8%200-12.15%209.84-22%2022.001-22H180v30h-18.488zm13.685%200c-1.037-1.793-2.976-3-5.197-3-2.22%200-4.16%201.207-5.197%203h10.394zM0%20148h8.01C21.26%20148%2032%20158.742%2032%20172c0%202.805-.481%205.498-1.366%208H0v-32zm0%202h7.999C20.149%20150%2030%20159.847%2030%20172c0%202.822-.531%205.52-1.499%208h-7.915c-.567-2.004-1.688-3.776-3.187-5.14l-1.345%201.48c1.089.99%201.933%202.244%202.434%203.66H0v-30zm15.197%2030c-1.037-1.793-2.976-3-5.197-3-2.22%200-4.16%201.207-5.197%203h10.394zM0%2032h16v-4c0-1.657%201.343-3%203-3%205.523%200%2010-4.477%2010-10%200-2.794-1.145-5.32-2.992-7.134C28.017%205.587%2029.6%202.924%2030.634%200H0v32zm0-2h2v-4h2v4h4v-4h2v4h4v-2c0-2.761%202.239-5%205-5%204.418%200%208-3.582%208-8s-3.582-8-8-8V3c0-1.052-.18-2.062-.512-3H0v30zM28.501%200c-.955%202.448-2.336%204.683-4.052%206.613C23.415%205.941%2022.25%205.453%2021%205.2V3c0-1.04-.144-2.046-.414-3H28.5zM0%2017h3L.857%207H0v10zM15.197%200c.51.883.803%201.907.803%203%200%203.314-2.686%206-6%206S4%206.314%204%203c0-1.093.292-2.117.803-3h10.394zM109%20115c-1.657%200-3%201.343-3%203v4H74v-4c0-1.657-1.343-3-3-3-5.523%200-10-4.477-10-10%200-2.793%201.145-5.318%202.99-7.132C60.262%2093.638%2058%2088.084%2058%2082c0-13.255%2010.748-24%2023.99-24h16.02C111.26%2058%20122%2068.742%20122%2082c0%206.082-2.263%2011.636-5.992%2015.866C117.855%2099.68%20119%20102.206%20119%20105c0%205.523-4.477%2010-10%2010zm0-2c-2.761%200-5%202.239-5%205v2h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-2c0-2.761-2.239-5-5-5-4.418%200-8-3.582-8-8s3.582-8%208-8v-4c0-2.64%201.136-5.013%202.946-6.66L72.6%2084.86C70.389%2086.874%2069%2089.775%2069%2093v2.2c-1.25.254-2.414.74-3.447%201.412C62.098%2092.727%2060%2087.61%2060%2082c0-12.15%209.84-22%2022.001-22H98C110.149%2060%20120%2069.847%20120%2082c0%205.609-2.097%2010.728-5.551%2014.613-1.034-.672-2.199-1.16-3.449-1.413V93c0-3.226-1.389-6.127-3.6-8.14l-1.346%201.48C107.864%2087.987%20109%2090.36%20109%2093v4c4.418%200%208%203.582%208%208s-3.582%208-8%208zM90.857%2097L93%20107h-6l2.143-10h1.714zM80%2099c3.314%200%206-2.686%206-6s-2.686-6-6-6-6%202.686-6%206%202.686%206%206%206zm20%200c3.314%200%206-2.686%206-6s-2.686-6-6-6-6%202.686-6%206%202.686%206%206%206z%22%20fill%3D%22${fill}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`
