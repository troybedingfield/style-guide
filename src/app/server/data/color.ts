type colorData = {
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
    ],
    meta: string
}

export const colorData = [
    {
        title: "Color",
        containerhide: [
            { section: "color", meta: "colors" },
        ],
        colors: [

            {
                id: 5,
                hexcode: '#D81A1B',
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
                hexcode: '#F07F1C',
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
                hexcode: '#F9C505',
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
                hexcode: '#DEF20A',
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
                hexcode: '#79CC4D',
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
                hexcode: '#307ED9',
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
                hexcode: '#6D4DB0',
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
                hexcode: '#C820AF',
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
                hexcode: '#EB5116',
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
                hexcode: '#E99417',
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
                hexcode: '#F2E402',
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
                hexcode: '#D7EB09',
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
                hexcode: '#30B8DC',
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
                hexcode: '#30B8DC',
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
                hexcode: '#9C3DBF',
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
                hexcode: '#BF1F66',
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
                hexcode: '#DCEDF6',
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
                hexcode: '#E3F5DA',
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
                hexcode: '#F5EED0',
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
                hexcode: '#F6E6DB',
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
                hexcode: '#F6DDDD',
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
                hexcode: '#F6DFEF',
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
                hexcode: '#E4D5F2',
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
                hexcode: '#DAE0F5',
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
                hexcode: '#272D34',
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
                hexcode: '#5C6470',
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
                hexcode: '#7F8C96',
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
                hexcode: '#C3CCD2',
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
                hexcode: '#DFE5EA',
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
                hexcode: '#EBEEEE',
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
                hexcode: '#F2F2F2',
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
                hexcode: '#FBFBFB',
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
                hexcode: '#0C3F21',
                class: 'dark-green',
                color: 'dark green',
                use: 'Logo',
                type: 'branding',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 25,
                hexcode: '#2A6F21',
                class: 'main-nav-green',
                color: 'main nav',
                use: 'Bottom Gradient',
                type: 'branding',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 26,
                hexcode: '#399534',
                class: 'hover-green',
                color: 'hover green',
                use: 'Top Gradient\nMain Nav\nIcon Hover State\nLogo: Top swoosh',
                type: 'branding',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 27,
                hexcode: '#44A880',
                class: 'brand-green',
                color: 'brand green',
                use: 'Logo',
                type: 'branding',
                category: 'global',
                subcat: 'color',
                meta: "colors"
            },
            {
                id: 28,
                hexcode: '#53E4FE',
                class: 'code-teal',
                color: 'code teal',
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
            { section: "example", title: "For Example", body: "Red = Taxes\nYellow = Deductions\nBlue = Benefits\nGreen = Earnings", example: "", meta: "colors" },
            { section: "secondary", title: "Secondary Colors", body: "These are used in the navigation system", example: "", meta: "colors" },
            { section: "support", title: "Support Colors", body: "Use in background and grid headers", example: "", meta: "colors" },
            { section: "neutrals", title: "Neutrals", body: "Defines page structure such as borders, grid lines, category separators and directs attention to key information", example: "", meta: "colors" },
            { section: "branding", title: "Branding", body: "Company logo, main navigation and icon hover colors", example: "", meta: "colors" },
        ],
        spacer: [
            { type: 'spacer' }
        ],
        meta: "color"
    }
]