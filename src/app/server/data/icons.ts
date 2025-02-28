type iconsData = [
    {
        title: string,
        containerhide: [
            { section: string, meta: string },
        ],
        icons: [
            {
                id: number,
                icon: string,
                name: string,
                code1: string,
                code2: string,
                meta: string
            },

        ],
        documentation: [

            {
                title: string, body: string, meta: string
            },

        ],
        mostused: [{
            title: [{ title: string }],
            icons: [
                { icon: string, name: string, },

            ],
        }],
        newicons: [{
            title: [{ title: string }],
            icons: [

                { icon: string, name: string, },



            ],
        }],
        outliers: [{
            title: [
                { title: string, body: string }
            ],
            icons: [
                { icon: string, class: string, name: string, },


            ],
        }],
        allicons: string,
        spacer: [
            { type: string }
        ],
        meta: string
    }
]

export const iconsData = [
    {
        title: "Icons",
        containerhide: [
            { section: "icons", meta: "icons" },
        ],
        icons: [
            {
                id: 1,
                icon: 'icon-edit',
                name: 'Edit',
                code1: '<i icon="icon-edit"></i>',
                code2: '\\e900',
                meta: "icons"
            },
            {
                id: 2,
                icon: 'icon-edit-b',
                name: 'Edit',
                code1: '<i icon="icon-edit"></i>',
                code2: '\\e901',
                meta: "icons"
            },

        ],
        documentation: [
            { title: "componentLibrary", body: "link", example: "", meta: "icons" },
            {
                title: "Outline Icons", body: "These are the default style, start with an outline style first.", meta: "icons"
            },
            {
                title: "Bold Icons", body: "Use bold icons when in the pressed state or when an operation is running. For example, if a filter is applied to a screen use the bold filter icon to show it’s running. The filename for all bold icons ends with a “_b” ", meta: "icons"
            },
            {
                title: "Layered Icons", body: "Another technique is to layer one icon on top of another. This allows for additional effects. For example using the outline favorite icon (star) on top of the bold favorite creates a nice rating meter.", meta: "icons"
            },
            {
                title: "Accessibility", body: "Clickable icons and icon buttons without labels should display tooltips in the UI. Tooltip copy should describe the purpose of the clickable icon so all users not just people with low or no vision can understand what the icon is and why it is there. ", meta: "icons"
            },
            {
                title: "Tooltips", body: "Appear for all clickable icons and icon buttons without labels on keyboard focus or mouse hover.\nHide when the user selects the clickable icon’s action. ", meta: "icons"
            },
            {
                title: "Font File Location", body: "codebase path location", meta: "icons"
            },

        ],
        mostused: [{
            title: [{ title: "Commonly Used" }],
            icons: [
                { icon: "icon-edit", name: "edit", },

            ],
        }],
        newicons: [{
            title: [{ title: "New" }],
            icons: [

                { icon: "icon-edit", name: "edit", },
                { icon: "icon-edit-b", name: "edit-b", },



            ],
        }],
        outliers: [{
            title: [
                { title: "Outliers", body: "The iscon is just the icon-edit rotated 45 degrees" }
            ],
            icons: [
                { icon: "icon-edit", class: "rotate-right", name: "edit -45 degree", },


            ],
        }],
        allicons: "All Icons:",
        spacer: [
            { type: 'spacer' }
        ],
        meta: "icons"
    }

];