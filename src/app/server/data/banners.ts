type bannersData = {
    title: string,
    containerhide: [
        {
            section: string,
            meta: string
        },
    ],
    componenthide: [
        {
            section: string,
            meta: string
        },
    ],
    current: {
        current: string,
        meta: string
    },
    ideal: {
        ideal: string,
        meta: string
    },
    banners: [
        {
            type: string,
            class: string,
            title: string,
            message: string,
            meta: string
        },


    ],
    currentideal: [
        {
            type: string,
            class: string,
            title: string,
            message: string,
            meta: string
        },

    ],
    sections: [
        {
            section: string,
            title: string,
            body: string,
            example: string,
            meta: string
        },

    ],
    code: [

        {
            name: string,
            example: string
        },
        {
            name: string,
            example: string
        },
        {
            name: string,
            example: string,
            meta: string
        },
        {
            name: string,
            example: string,
            meta: string
        },

    ],
    toastrcode: [
        {
            name: string,
            example: string
        },
    ],
    colors: [
        {
            color: string,
            color1: string,
            color2: string,
            color3: string,
            copy1: string,
            copy2: string,
            copy3: string,
            meta: string
        },

    ],
    toast: [
        {
            type: string,
            btnText: string,
            toastText: string,
            click: string,
            meta: string
        },

    ],
    spacer: [
        {
            type: string
        }
    ],
    meta: string
}

export const bannersData = [
    {
        title: "Banners",
        containerhide: [
            { section: "banners", meta: "banners" },
        ],
        componenthide: [
            { section: "banners", meta: "banners Component Component" },
        ],
        current: { current: "Current:", meta: "banners current" },
        ideal: { ideal: "Ideal:", meta: "banners ideal" },
        banners: [
            { type: "informational", class: "light-blue", title: "Informational", message: "This is an informational banner", meta: "banners" },
            { type: "success", class: "", title: "Success", message: "This is an success banner", meta: "banners" },
            { type: "warning", class: "", title: "Warning", message: "This is an warning banner", meta: "banners" },
            { type: "warningSingle", class: "", title: "3 warning messages", message: "3 warning messages", body: "<ul><li>2 budget <i class='icon-link'></i></li><li>1 Employee past due <i class='icon-link'></i></li><li>10 employees due in 7 days <i class='icon-link'></i></li></ul>", li1: "2 budget", li1class: "icon-link", li2: "1 Employee past due", li2class: "icon-link", li3: "10 employees due in 7 days", li3class: "icon-link", meta: "banners" },
            { type: "multipleMixed", class: "", title: "This plan has 3 errors and 1 warning", message: "3 warning messages", body: "<ul><li>12 employees past due <i class='icon-link'></i></li><li>20 employees due in 7 days <i class='icon-link'></i></li><li>2 budget errors <i class='icon-link'></i></li><li>2 budget warnings <i class='icon-link'></i></li></ul>", li1: "12 Employees past due", li1class: "icon-link", li2: "20 employees due in 7 days", li2class: "icon-link", li3: "2 budget errors", li3class: "icon-link", li4: "2 budget warnings", li4class: "icon-link", meta: "banners" },
            { type: "expand", class: "", title: "This plan has 3 errors and 1 warning", message: "3 warning messages", body: "<ul id='_InformationList'></ul><ul id='_InformationListClientSide'><li>The SSN for this employee is already in use by the following employee(s). This will affect wage base calculations and cause the employee to receive multiple W2’s. Corrective action is needed.<br><br><div><table class='MessageHandlerInfoTable table table-condensed'><tbody><tr><th>Name</th><th>SSN</th><th>Tax Form</th></tr><tr><td>Ming Na</td><td>XXX-XX-XXXX</td><td>W2</td></tr></tbody></table></div></li></ul>", li1: "The SSN for this employee is already in use by the following employee(s). This will affect wage base calculations and cause the employee to receive multiple W2’s. Corrective action is needed.", head1: "Name", head2: "SSN", head3: "Tax Form", li2: "Ming Na", li3: "123-45-6789", li4: "W2", meta: "banners" },
            { type: "error", class: "", title: "Error", message: "This is an error banner", meta: "banners" },

        ],
        currentideal: [
            { type: "errorcurrent", class: "", title: "Error", message: "This is an error banner", meta: "banners current" },
            { type: "ideal", class: "", title: "Error", message: "This is an error banner", meta: "banners ideal" },
        ],
        sections: [
            { section: "banners", title: "Banners", body: "Typically displayed at the top of the page or within a sub-header. Banners can be interacted with, such as dismissing, expand/collapsing or paging through multiple messages. If 1+ messages exist, display a single banner with caret on left side to display more. Banner messages should be simple, concise and describe a clear message.", example: "", meta: "banners" },
            { section: "expand", title: "Expand and Collapse Banners", body: "Please note the title is a bolder font weight and optional. This is to separate the title from description.\n\nThe text can wrap to multiple lines, do not truncate text. The containers is closed by default and expands in a downward fashion when the left caret has been selected.", example: "", meta: "banners" },
            { section: "multipleSingle", title: "Multiple Messages (Single Type)", body: "Display the highest priority items first, or list in chronological order\n\n Collapsed State - display number of warnings\n Expanded State - Display all items in list format\nAllow list to be hot linked to fields below", example: "", meta: "banners" },
            { section: "multipleMixed", title: "Multiple Messages (Mixed Types)", body: "Display the highest priority items first, or list in chronological order\n\nCollapsed State - display number of errors, warnings or informational messages on top line\nExpanded State - Display all items in list format\nAllow list to be hot linked to fields below ", example: "", meta: "banners" },
            { section: "action", title: "Banner with Action Button", body: "Place at top of the page. When text is long, wrap to next row. Place a button on the right side of the banner. Clicking on button jumps directly to item/page. Upon clicking button display popup", example: "", meta: "banners" },
            { section: "page", title: "Page Level Banner Placement", body: "Position the banner at the top of the page just below the title and 3rd level navigation", example: "", meta: "banners" },
            { section: "toast", title: "Toast Messages", body: "Displayed for short period of time, manually or self-dismissing.", example: "", meta: "banners" },
            { section: "full", title: "Full Page Progress Indicators", body: "A translucent black background overlays the the entire screen.\n\nBar starts from the left side and continually moves to the right so it appears the system is still active.\n\nGood to use for long loading times along with the inability to exit out of the operation.", example: "", meta: "banners" },

        ],
        code: [
            {
                name: "Informational", example: ''
            },


        ],
        toastrcode: [
            { name: "user-feedback ts", example: 'async actionSubmit() {\nthis.submitActionInProgress = true;\nconst success = await this._userFeedbackService.submitFeedback(this.userInput);\n\nif (success) {\nthis._toastr.success(\'Feedback successful!\');\nthis.actionClose();\n} else {\nthis._toastr.error(\'There was a problem with your request!\');\n} this.submitActionInProgress = false;\n}' },
            { name: "messaging", example: 'this._toastr = toastr !== \'undefined\' && toastr || <any>{};\nthis._toastr.options = {\n"showDuration": "500",\n"hideDuration": "500",\n"timeOut": "2000",\n"extendedTimeOut": "1000",\n// "closeButton": false,\n// "debug": false,\n// "newestOnTop": false,\n// "progressBar": false,\n// "positionClass": "toast-top-right",\n// "preventDuplicates": false,\n// "onclick": null,\n// "showEasing": "swing",\n// "hideEasing": "linear",\n// "showMethod": "fadeIn",\n// "hideMethod": "fadeOut"\n};\n\nthis.errorPanel = $("[id$=\'_ErrorPanel\']");\nthis.errorListClientSide = $("[id$=\'_ErrorListClientSide\']");\nthis.errorListServerSide = $("[id$=\'_ErrorList\']");\n\nthis.warningPanel = $("[id$=\'_WarningPanel\']");\nthis.warningListClientSide = $("[id$=\'_WarningListClientSide\']");\nthis.warningListServerSide = $("[id$=\'_WarningList\']");\n\nthis.messagePanel = $("[id$=\'_InformationPanel\']");\nthis.messageListClientSide = $("[id$=\'_InformationListClientSide\']");\nthis.messageListServerSide = $("[id$=\'_InformationList\']");\n\nthis.validationSummaryPanel = $("[id$=\'_validationSummary\']");\n\nthis.bodyContainer = $("#container");\n}\n\nflashSuccess(msg: string, title?: string) {\nthis._toastr.success(msg, title);\n}\n\nflashWarning(msg: string, title?: string) {\nthis._toastr.warning(msg, title);\n}\n\nflashError(msg: string, title?: string) {\nthis._toastr.error(msg, title);\n}\n\npublic configureService( configuration: MessagingServiceConfigModel )\n{\nif ( configuration ) {\nif ( configuration.bodyContainerSelector )\nthis.bodyContainer = $( configuration.bodyContainerSelector );\n\nif ( configuration.errorPanel ) {\nif ( configuration.errorPanel.errorPanelSelector )\nthis.errorPanel = $( configuration.errorPanel.errorPanelSelector, this.bodyContainer );\n\nif ( configuration.errorPanel.errorListClientSideSelector )\nthis.errorListClientSide = $( configuration.errorPanel.errorListClientSideSelector, this.bodyContainer );\n\nif ( configuration.errorPanel.errorListServerSideSelector )\nthis.errorListServerSide = $( configuration.errorPanel.errorListServerSideSelector, this.bodyContainer );\n}\nif ( configuration.validationSummarySelector )\nthis.validationSummaryPanel = $( configuration.validationSummarySelector );\n}\n}' },


        ],
        colors: [
            { color: "Blue", color1: "#3173C2", color2: "#DCE3FA", color3: "#B3D2EA", copy1: "Colored Text:", copy2: "Background Blue:", copy3: "Line Blue:", meta: "banners" },
            { color: "Green", color1: "#34B439", color2: "#D1F3D2", color3: "", copy1: "Colored Text:", copy2: "Background Green:", copy3: "", meta: "banners" },
            { color: "Yellow", color1: "#E47B12", color2: "#F3EACC", color3: "", copy1: "Colored Text:", copy2: "Background Yellow:", copy3: "", meta: "banners" },
            { color: "Red", color1: "#DF120B", color2: "#F6DAD7", color3: "", copy1: "Colored Text:", copy2: "Background Red:", copy3: "", meta: "banners" },
        ],
        toast: [
            { type: "success", btnText: "success toast", toastText: "Success", click: "successToast()", meta: "banners" },
            { type: "warning", btnText: "warning toast", toastText: "Warning", click: "warningToast()", meta: "banners" },
            { type: "error", btnText: "error toast", toastText: "Error", click: "errorToast()", meta: "banners" },
            { type: "info", btnText: "info toast", toastText: "Information", click: "infoToast()", meta: "banners" },
        ],
        spacer: [
            { type: 'spacer' }
        ],
        meta: 'banners'

    }
]