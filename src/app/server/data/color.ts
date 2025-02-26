type ColorData = {
    title: string;
    containerhide: [{
        section: string;
        meta: string;
    }];
    colors: [{
        id: number,
        hexcode: string,
        class: string,
        color: string,
        use: string,
        type: string,
        category: string,
        subcat: string,
        meta: string
    }];
    documentation: [
        {
            title: string
            meta: string
        }];
    sections: [
        {
            section: string
            title: string
            body: string
            example: string
            meta: string
        }
    ]
    spacer: [
        {
            type: string
        }
    ]
}

export const ColorData = [
    {
        title: "Color",
        containerhide: [
            { section: "color", meta: "colors" },
        ],
        colors: [

            {
                id: 5,
                hexcode: '#ca1011',
                class: 'red',
                color: 'red',
                use: 'Information Error',
                type: 'primary',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 4,
                hexcode: '#ec7d1b',
                class: 'orange',
                color: 'orange',
                use: 'Primary Button',
                type: 'primary',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 3,
                hexcode: '#f5c205',
                class: 'yellow',
                color: 'yellow',
                use: 'Information Warning',
                type: 'primary',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 3,
                hexcode: '#d9ed05',
                class: 'lime',
                color: 'lime',
                use: 'Information Warning',
                type: 'primary',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 2,
                hexcode: '#7dc855',
                class: 'green',
                color: 'green',
                use: 'Information Success',
                type: 'primary',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 1,
                hexcode: '#4a90e2',
                class: 'blue',
                color: 'blue',
                use: 'Button & Links',
                type: 'primary',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 7,
                hexcode: '#7455b7',
                class: 'purple',
                color: 'purple',
                use: 'Impersonation',
                type: 'primary',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 6,
                hexcode: '#be22a7',
                class: 'dragon-fruit',
                color: 'dragon fruit',
                use: 'TBD',
                type: 'primary',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 31,
                hexcode: '#eb561c',
                class: 'cherry',
                color: 'cherry',
                use: '',
                type: 'secondary',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 32,
                hexcode: '#ec971b',
                class: 'tangerine',
                color: 'tangerine',
                use: '',
                type: 'secondary',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 33,
                hexcode: '#f5e705',
                class: 'lemon',
                color: 'lemon',
                use: '',
                type: 'secondary',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 34,
                hexcode: '#afdb03',
                class: 'mint',
                color: 'mint',
                use: '',
                type: 'secondary',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 35,
                hexcode: '#3cbbdd',
                class: 'teal',
                color: 'teal',
                use: '',
                type: 'secondary',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 36,
                hexcode: '#674ae2',
                class: 'blueberry',
                color: 'blueberry',
                use: '',
                type: 'secondary',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 37,
                hexcode: '#9840b8',
                class: 'plum',
                color: 'plum',
                use: '',
                type: 'secondary',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 38,
                hexcode: '#be2267',
                class: 'cranberry',
                color: 'cranberry',
                use: '',
                type: 'secondary',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 8,
                hexcode: '#e2f2fb',
                class: 'light-blue',
                color: 'light blue',
                use: 'Information Banner BG',
                type: 'support',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 9,
                hexcode: '#e7f8de',
                class: 'light-green',
                color: 'light green',
                use: 'Information Banner BG',
                type: 'support',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 10,
                hexcode: '#faf3d6',
                class: 'light-yellow',
                color: 'light yellow',
                use: 'Information Banner BG',
                type: 'support',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 11,
                hexcode: '#fbece2',
                class: 'light-orange',
                color: 'light orange',
                use: 'Widget BG',
                type: 'support',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 12,
                hexcode: '#fbe2e2',
                class: 'light-red',
                color: 'light red',
                use: 'Impersonation',
                type: 'support',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 13,
                hexcode: '#fbe2f3',
                class: 'light-pink',
                color: 'light pink',
                use: 'Widget BG',
                type: 'support',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 14,
                hexcode: '#efe2fb',
                class: 'light-plum',
                color: 'light plum',
                use: 'Widget BG',
                type: 'support',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 15,
                hexcode: '#e2e8fb',
                class: 'light-purple',
                color: 'light purple',
                use: 'Widget BG',
                type: 'support',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 16,
                hexcode: '#2b333d',
                class: 'gray-600',
                color: 'gray 600',
                use: 'Dark Text',
                type: 'neutrals',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 17,
                hexcode: '#5e6977',
                class: 'gray-500',
                color: 'gray 500',
                use: 'Text\nMenu Text',
                type: 'neutrals',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 18,
                hexcode: '#86939e',
                class: 'gray-400',
                color: 'gray 400',
                use: 'Hint Text',
                type: 'neutrals',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 19,
                hexcode: '#c7d2db',
                class: 'gray-300',
                color: 'gray 300',
                use: 'Disabled Text\nForm Outline\nMenus\nPopups',
                type: 'neutrals',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 20,
                hexcode: '#dfe6ec',
                class: 'gray-200',
                color: 'gray 200',
                use: 'Divider Lines',
                type: 'neutrals',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 21,
                hexcode: '#f1f4f4',
                class: 'gray-100',
                color: 'gray 100',
                use: 'Background\nFilter BG',
                type: 'neutrals',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 22,
                hexcode: '#f3f6f8',
                class: 'blue-gray',
                color: 'blue gray',
                use: 'Hover State\nDisabled BG',
                type: 'neutrals',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 23,
                hexcode: '#fafafa',
                class: 'red-gray',
                color: 'red gray',
                use: 'Headers',
                type: 'neutrals',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 24,
                hexcode: '#0c223f',
                class: 'dark-blue',
                color: 'dark blue',
                use: 'Logo',
                type: 'branding',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 25,
                hexcode: '#21446f',
                class: 'main-nav-blue',
                color: 'main nav blue',
                use: 'Bottom Gradient',
                type: 'branding',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 26,
                hexcode: '#346095',
                class: 'hover-blue',
                color: 'hover blue',
                use: 'Top Gradient\nMain Nav\nIcon Hover State\nLogo: Top swoosh',
                type: 'branding',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 27,
                hexcode: '#62a844',
                class: 'dark-green',
                color: 'dark green',
                use: 'Logo Swoosh',
                type: 'branding',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 28,
                hexcode: '#fede53',
                class: 'code-yellow',
                color: 'code yellow',
                use: 'Use for code blocks on dark backgrounds',
                type: 'branding',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 29,
                hexcode: '#000000',
                class: 'black',
                color: 'black',
                use: '',
                type: 'branding',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 30,
                hexcode: '#ffffff',
                class: 'white',
                color: 'white',
                use: '',
                type: 'branding',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },

        ],

        documentation: [
            { title: "Core and Informational Colors", body: "Use when communicating a primary, secondary or conditional state. These are used on buttons, links, status badges and charts.\n\nFor example, Red = Taxes, Yellow = Deductions, Blue = Benefits, Green = Earnings.\n\n\nSupport Colors\n\nUse in backgrounds or grid headers\n\n\nNeutrals\n\nDefines page structure such as borders, grid lines, category separators and directs attention to key information.\n\n\nBranding\n\nCompany logo, main navigation and icon hover colors", meta: "colors" },
            // {title: "Description", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim quibusdam, minima fugiat sit minus tempore recusandae eveniet earum qui, at quidem corporis est dolorem molestiae necessitatibus quisquam, sunt cumque!"},
        ],
        sections: [
            { section: "primary", title: "Core and Informational Color", body: "Use when communicating a primary, secondary or conditional state. These are used on buttons, links, status badges and charts.", example: "", meta: "colors" },
            { section: "readyxlibrary", title: "readyX Component Library", body: "https://atl0dev81web.dev.Company.org/readyXviewer/", example: "", meta: "banners RPO Components RPOComponents" },
            { section: "example", title: "For Example", body: "Red = Taxes\nYellow = Deductions\nBlue = Benefits\nGreen = Earnings", example: "", meta: "colors" },
            { section: "secondary", title: "Secondary Colors", body: "These are used in the navigation system", example: "", meta: "colors" },
            { section: "support", title: "Support Colors", body: "Use in background and grid headers", example: "", meta: "colors" },
            { section: "neutrals", title: "Neutrals", body: "Defines page structure such as borders, grid lines, category separators and directs attention to key information", example: "", meta: "colors" },
            { section: "branding", title: "Branding", body: "Company logo, main navigation and icon hover colors", example: "", meta: "colors" },
        ],
        spacer: [
            { type: 'spacer' }
        ]

    }
]