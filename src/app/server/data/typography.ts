type typographyData = {
    title: string;
    containerhide: [{
        section: string;
        meta: string;
    }];
    headlines: [{
        head: string
        tag: string
        use: string
        font: string
        weight: string
        size: string
        color: string
        hex: string
        meta: string
    }];
    documentation: [
        {
            body: string
            meta: string
        }];
    sections: [
        {
            section: string
            title: string
            body: string
            head: string
            meta: string
        }
    ]
    twocolumns: [
        {
            headline: string;
            body: string;
            meta: string;
        }
    ]
    frequentlyused: [{
        section1: [{
            type: string;
            body: string;
            meta: string;
        }];
        section2: [{
            title: string;
            header: string;
            body: string;
            meta: string;
        }];
        section3: [{
            title: string;
            headline1: string;
            headline2: string;
            body: string;
            meta: string;
        }];
    }]
    spacer: [
        {
            type: string
        }
    ],
    meta: string
}

export const typographyData = [
    {
        title: "Typography",
        containerhide: [
            { section: "typography", meta: "typography" },
        ],
        headlines: [
            { head: "H1", tag: "h1", use: "Special", font: "GeistSans", weight: "Medium (500)", size: "72px", color: "Gray 600", hex: "#2b333d", meta: "typography" },
            { head: "H2", tag: "h2", use: "Special", font: "GeistSans", weight: "Light (300)", size: "52px", color: "Gray 600", hex: "#2b333d", meta: "typography" },
            { head: "H3", tag: "h3", use: "Page Title", font: "GeistSans", weight: "Light (300)", size: "42px", color: "Gray 600", hex: "#2b333d", meta: "typography" },
            { head: "H4", tag: "h4", use: "Header", font: "GeistSans", weight: "Light (300)", size: "26px", color: "Gray 600", hex: "#2b333d", meta: "typography" },
            { head: "H5 Title", tag: "h5", use: "Title", font: "GeistSans", weight: "Medium (500)", size: "18px", color: "Gray 600", hex: "#2b333d", meta: "typography" },
            { head: "H6 Emphasize", tag: "h6", use: "Title Small", font: "GeistSans", weight: "Medium (500)", size: "16px", color: "Gray 600", hex: "#2b333d", meta: "typography" },
            { head: "H7 Grid Cells", tag: "h7", use: "Grid Cells", font: "GeistSans", weight: "Regular (400)", size: "18px", color: "Gray 600", hex: "#2b333d", meta: "typography" },
            { head: "H8 Body", tag: "h8", use: "Body Text", font: "GeistSans", weight: "Regular (400)", size: "16px", color: "Gray 500", hex: "#5e6977", meta: "typography" },
            { head: "H9 Smallest", tag: "h9", use: "Infographics", font: "GeistSans", weight: "Regular (400)", size: "14px", color: "Gray 500", hex: "#5e6977", meta: "typography" },
        ],
        documentation: [
            { body: "Fonts must be readable, scalable with a minimal amount of styling.", meta: "typography" },
            // {title: "Description", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim quibusdam, minima fugiat sit minus tempore recusandae eveniet earum qui, at quidem corporis est dolorem molestiae necessitatibus quisquam, sunt cumque!"},
        ],
        sections: [
            { section: "allheights", title: "All Line Heights", head: "All Line Heights", body: "16, 20, 22, 28, 32, 40, 48, 58", meta: "typography" },
            { section: "frequentlyused", title: "Frequently used font styles", body: "", meta: "typography" },
        ],
        twocolumns: [
            { headline: "Headline 1 (H5 Title)", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut vestibulum nisl. Suspendisse potenti. In viverra convallis felis sed molestie. Duis lobortis blandit arcu semper porttitor. Cras vitae urna eu turpis condimentum rutrum quis eget augue. Integer feugiat nisl sed semper feugiat. Nulla orci neque, imperdiet vel sapien in, feugiat semper nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer neque risus, pharetra vitae diam in, condimentum lacinia leo. Fusce rhoncus, augue a pretium interdum, ligula orci egestas augue, eu accumsan velit ante non dolor. Proin eget lacus a ante tincidunt mollis. Curabitur in augue semper, tempor quam eu, tincidunt justo.", meta: "columns" },
            { headline: "Headline 2 (H5 Title)", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut vestibulum nisl. Suspendisse potenti. In viverra convallis felis sed molestie. Duis lobortis blandit arcu semper porttitor. Cras vitae urna eu turpis condimentum rutrum quis eget augue. Integer feugiat nisl sed semper feugiat. Nulla orci neque, imperdiet vel sapien in, feugiat semper nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer neque risus, pharetra vitae diam in, condimentum lacinia leo. Fusce rhoncus, augue a pretium interdum, ligula orci egestas augue, eu accumsan velit ante non dolor. Proin eget lacus a ante tincidunt mollis. Curabitur in augue semper, tempor quam eu, tincidunt justo.", meta: "columns" },

        ],
        frequentlyused: [{
            section1: [
                { type: "title", body: "Title (H5, 18px)", meta: "typography" },
                { type: "emphasis", body: "Emphasis (H6, 16px)", meta: "typography" },
                { type: "grid", body: "Grid Cells (H7, 18px)", meta: "typography" },
                { type: "body", body: "Body (H8, 16px)", meta: "typography" },
            ],
            section2: [
                { title: "Page Title (H3)", header: "Header (H5)", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", meta: "typography" }
            ],
            section3: [
                { title: "Section title (H4)", headline1: "Headline 1 (H5 Title)", headline2: "Headline 2 (H5 Title)", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut vestibulum nisl. Suspendisse potenti. In viverra convallis felis sed molestie. Duis lobortis blandit arcu semper porttitor. Cras vitae urna eu turpis condimentum rutrum quis eget augue. Integer feugiat nisl sed semper feugiat. Nulla orci neque, imperdiet vel sapien in, feugiat semper nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer neque risus, pharetra vitae diam in, condimentum lacinia leo. Fusce rhoncus, augue a pretium interdum, ligula orci egestas augue, eu accumsan velit ante non dolor. Proin eget lacus a ante tincidunt mollis. Curabitur in augue semper, tempor quam eu, tincidunt justo.", meta: "typography" }
            ]
        }

        ],
        spacer: [
            { type: 'spacer' }
        ],
        meta: "typography"
    }
]